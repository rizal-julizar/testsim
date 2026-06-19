/**
 * Aplikasi Simulasi Ujian Teori SIM Indonesia
 * ============================================
 * Fitur:
 * - Pilihan jenis SIM (A, C, Umum)
 * - 30 soal per sesi (diacak dari bank soal)
 * - Timer 15 menit
 * - Navigasi soal dengan dots
 * - Hasil dengan skor, statistik, dan status lulus/gagal
 * - Review jawaban dengan penjelasan
 * - Mode pengulangan soal yang salah (sampai semua benar)
 * - Animasi confetti saat semua benar
 */

(function () {
    'use strict';

    // =============================================
    // STATE
    // =============================================
    let state = {
        selectedSimType: 'A',
        currentQuestions: [],
        currentQuestionIndex: 0,
        userAnswers: {},        // { questionId: selectedOptionIndex }
        sessionNumber: 1,
        totalQuestionsAnswered: 0,
        timerInterval: null,
        timeRemaining: 15 * 60, // 15 minutes in seconds
        wrongQuestionIds: [],   // IDs of wrong questions from last session
    };

    // =============================================
    // DOM ELEMENTS
    // =============================================
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // Screens
    const screenLanding = $('#screen-landing');
    const screenQuiz = $('#screen-quiz');
    const screenResult = $('#screen-result');
    const screenReview = $('#screen-review');
    const screenComplete = $('#screen-complete');

    // Landing
    const btnStart = $('#btn-start');
    const simTypeBtns = $$('.sim-type-btn');

    // Quiz
    const sessionBadge = $('#session-badge');
    const progressBar = $('#progress-bar');
    const progressText = $('#progress-text');
    const timerText = $('#timer-text');
    const timerEl = $('#timer');
    const questionCategory = $('#question-category');
    const questionNumber = $('#question-number');
    const questionText = $('#question-text');
    const optionsList = $('#options-list');
    const questionDots = $('#question-dots');
    const btnPrev = $('#btn-prev');
    const btnNext = $('#btn-next');
    const btnBackHome = $('#btn-back-home');

    // Result
    const resultIcon = $('#result-icon');
    const resultTitle = $('#result-title');
    const resultSession = $('#result-session');
    const scoreRingFill = $('#score-ring-fill');
    const scoreValue = $('#score-value');
    const statCorrect = $('#stat-correct');
    const statWrong = $('#stat-wrong');
    const statTotal = $('#stat-total');
    const statTime = $('#stat-time');
    const passBadge = $('#pass-badge');
    const passDesc = $('#pass-desc');
    const btnReview = $('#btn-review');
    const btnRetryWrong = $('#btn-retry-wrong');
    const btnNewTest = $('#btn-new-test');
    const wrongCount = $('#wrong-count');

    // Review
    const reviewList = $('#review-list');
    const btnBackResult = $('#btn-back-result');
    const filterBtns = $$('.filter-btn');

    // Complete
    const totalSessions = $('#total-sessions');
    const totalQuestionsAnswered = $('#total-questions-answered');
    const btnRestart = $('#btn-restart');

    // =============================================
    // SVG GRADIENT (for score ring)
    // =============================================
    function injectSVGDefs() {
        const svgNS = 'http://www.w3.org/2000/svg';
        const defs = document.createElementNS(svgNS, 'defs');
        const gradient = document.createElementNS(svgNS, 'linearGradient');
        gradient.setAttribute('id', 'scoreGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS(svgNS, 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6366f1');
        const stop2 = document.createElementNS(svgNS, 'stop');
        stop2.setAttribute('offset', '50%');
        stop2.setAttribute('stop-color', '#8b5cf6');
        const stop3 = document.createElementNS(svgNS, 'stop');
        stop3.setAttribute('offset', '100%');
        stop3.setAttribute('stop-color', '#a78bfa');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        gradient.appendChild(stop3);
        defs.appendChild(gradient);

        const scoreRing = document.querySelector('.score-ring');
        if (scoreRing) {
            scoreRing.insertBefore(defs, scoreRing.firstChild);
        }
    }

    // =============================================
    // SCREEN NAVIGATION
    // =============================================
    function showScreen(screenEl) {
        [screenLanding, screenQuiz, screenResult, screenReview, screenComplete].forEach(s => {
            s.classList.remove('active');
        });
        screenEl.classList.add('active');
        window.scrollTo(0, 0);
    }

    // =============================================
    // SIM TYPE SELECTION
    // =============================================
    simTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            simTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedSimType = btn.dataset.type;
        });
    });

    // =============================================
    // START QUIZ
    // =============================================
    btnStart.addEventListener('click', startNewTest);

    function startNewTest() {
        state.sessionNumber = 1;
        state.totalQuestionsAnswered = 0;
        state.wrongQuestionIds = [];
        startSession();
    }

    function startSession() {
        // Get questions
        let questions;
        if (state.wrongQuestionIds.length > 0) {
            // Retry wrong questions
            questions = QUESTION_BANK.filter(q => state.wrongQuestionIds.includes(q.id));
            questions = shuffleArray(questions);
        } else {
            questions = getQuestionsBySimType(state.selectedSimType);
            // Take first 30 questions (or all if less than 30)
            questions = questions.slice(0, 30);
        }

        state.currentQuestions = questions;
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.timeRemaining = Math.max(questions.length * 30, 5 * 60); // 30s per question, min 5 minutes

        // Update UI
        sessionBadge.textContent = `Sesi ${state.sessionNumber}`;
        buildQuestionDots();
        renderQuestion();
        startTimer();
        showScreen(screenQuiz);
    }

    // =============================================
    // QUESTION RENDERING
    // =============================================
    function renderQuestion() {
        const q = state.currentQuestions[state.currentQuestionIndex];
        const total = state.currentQuestions.length;
        const idx = state.currentQuestionIndex;

        // Meta
        questionCategory.textContent = q.category;
        questionNumber.textContent = `Soal ${idx + 1}`;
        questionText.textContent = q.question;

        // Progress
        progressBar.style.width = `${((idx + 1) / total) * 100}%`;
        progressText.textContent = `${idx + 1} / ${total}`;

        // Options
        const letters = ['A', 'B', 'C', 'D'];
        optionsList.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.index = i;
            if (state.userAnswers[q.id] === i) {
                btn.classList.add('selected');
            }
            btn.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            `;
            btn.addEventListener('click', () => selectOption(q.id, i));
            optionsList.appendChild(btn);
        });

        // Navigation buttons
        btnPrev.disabled = idx === 0;
        if (idx === total - 1) {
            btnNext.innerHTML = `
                <span>Selesai</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            `;
        } else {
            btnNext.innerHTML = `
                <span>Selanjutnya</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            `;
        }

        // Update dots
        updateDots();

        // Animate card
        const card = $('#question-card');
        card.style.animation = 'none';
        card.offsetHeight; // Force reflow
        card.style.animation = 'scaleIn 0.3s ease';
    }

    function selectOption(questionId, optionIndex) {
        state.userAnswers[questionId] = optionIndex;

        // Update option buttons visually
        const btns = optionsList.querySelectorAll('.option-btn');
        btns.forEach((btn, i) => {
            btn.classList.toggle('selected', i === optionIndex);
            const letter = btn.querySelector('.option-letter');
            if (i === optionIndex) {
                letter.style.background = '';
                letter.style.color = '';
            }
        });

        updateDots();
    }

    // =============================================
    // QUESTION DOTS
    // =============================================
    function buildQuestionDots() {
        questionDots.innerHTML = '';
        state.currentQuestions.forEach((q, i) => {
            const dot = document.createElement('div');
            dot.className = 'q-dot';
            dot.title = `Soal ${i + 1}`;
            dot.addEventListener('click', () => {
                state.currentQuestionIndex = i;
                renderQuestion();
            });
            questionDots.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = questionDots.querySelectorAll('.q-dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('current', 'answered');
            if (i === state.currentQuestionIndex) {
                dot.classList.add('current');
            } else if (state.userAnswers[state.currentQuestions[i].id] !== undefined) {
                dot.classList.add('answered');
            }
        });
    }

    // =============================================
    // NAVIGATION
    // =============================================
    btnPrev.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            renderQuestion();
        }
    });

    btnNext.addEventListener('click', () => {
        const total = state.currentQuestions.length;
        if (state.currentQuestionIndex < total - 1) {
            state.currentQuestionIndex++;
            renderQuestion();
        } else {
            // Last question - finish test
            finishTest();
        }
    });

    btnBackHome.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin keluar? Progres ujian akan hilang.')) {
            stopTimer();
            showScreen(screenLanding);
        }
    });

    // =============================================
    // TIMER
    // =============================================
    function startTimer() {
        stopTimer();
        updateTimerDisplay();
        state.timerInterval = setInterval(() => {
            state.timeRemaining--;
            updateTimerDisplay();

            if (state.timeRemaining <= 0) {
                finishTest();
            }
        }, 1000);
    }

    function stopTimer() {
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
            state.timerInterval = null;
        }
    }

    function updateTimerDisplay() {
        const mins = Math.floor(state.timeRemaining / 60);
        const secs = state.timeRemaining % 60;
        timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        // Warning states
        timerEl.classList.remove('warning', 'danger');
        if (state.timeRemaining <= 60) {
            timerEl.classList.add('danger');
        } else if (state.timeRemaining <= 180) {
            timerEl.classList.add('warning');
        }
    }

    // =============================================
    // FINISH TEST & RESULTS
    // =============================================
    function finishTest() {
        stopTimer();

        const total = state.currentQuestions.length;
        let correct = 0;
        let wrongIds = [];

        state.currentQuestions.forEach(q => {
            const userAnswer = state.userAnswers[q.id];
            if (userAnswer === q.correctIndex) {
                correct++;
            } else {
                wrongIds.push(q.id);
            }
        });

        const wrong = total - correct;
        const scorePercent = Math.round((correct / total) * 100);
        const passed = scorePercent >= 70;
        const timeUsed = state.currentQuestions.length * 30 - state.timeRemaining;
        const timeUsedClamped = Math.max(0, (Math.max(state.currentQuestions.length * 30, 5 * 60)) - state.timeRemaining);

        // Update total
        state.totalQuestionsAnswered += total;
        state.wrongQuestionIds = wrongIds;

        // Update result UI
        resultSession.textContent = `Sesi ${state.sessionNumber}`;
        
        if (passed) {
            resultIcon.textContent = '🎉';
            resultTitle.textContent = 'Selamat!';
        } else {
            resultIcon.textContent = '📚';
            resultTitle.textContent = 'Tetap Semangat!';
        }

        // Animate score
        scoreValue.textContent = '0';
        animateCounter(scoreValue, 0, scorePercent, 1200);

        // Score ring
        const circumference = 2 * Math.PI * 85; // ~534
        const offset = circumference - (scorePercent / 100) * circumference;
        scoreRingFill.style.strokeDashoffset = circumference;
        setTimeout(() => {
            scoreRingFill.style.strokeDashoffset = offset;
        }, 100);

        // Stats
        statCorrect.textContent = correct;
        statWrong.textContent = wrong;
        statTotal.textContent = total;

        const mins = Math.floor(timeUsedClamped / 60);
        const secs = timeUsedClamped % 60;
        statTime.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        // Pass status
        if (passed) {
            passBadge.textContent = 'LULUS';
            passBadge.className = 'pass-badge lulus';
            passDesc.textContent = `Selamat! Skor Anda ${scorePercent}% memenuhi syarat kelulusan (minimal 70%)`;
        } else {
            passBadge.textContent = 'BELUM LULUS';
            passBadge.className = 'pass-badge gagal';
            passDesc.textContent = `Skor Anda ${scorePercent}%. Diperlukan minimal 70% untuk lulus. Terus berlatih!`;
        }

        // Retry wrong button
        if (wrong > 0) {
            btnRetryWrong.style.display = 'inline-flex';
            wrongCount.textContent = wrong;
        } else {
            btnRetryWrong.style.display = 'none';
        }

        showScreen(screenResult);

        // Check if all correct — show celebration
        if (wrong === 0 && state.sessionNumber > 1) {
            setTimeout(() => showCelebration(), 500);
        }
    }

    function animateCounter(el, from, to, duration) {
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(from + (to - from) * eased);
            el.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // =============================================
    // REVIEW
    // =============================================
    btnReview.addEventListener('click', () => {
        renderReview('all');
        showScreen(screenReview);
    });

    btnBackResult.addEventListener('click', () => {
        showScreen(screenResult);
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReview(btn.dataset.filter);
        });
    });

    function renderReview(filter) {
        reviewList.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];

        state.currentQuestions.forEach((q, idx) => {
            const userAnswer = state.userAnswers[q.id];
            const isCorrect = userAnswer === q.correctIndex;

            if (filter === 'correct' && !isCorrect) return;
            if (filter === 'wrong' && isCorrect) return;

            const item = document.createElement('div');
            item.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;

            let optionsHTML = '';
            q.options.forEach((opt, i) => {
                let className = 'review-option';
                if (i === userAnswer && !isCorrect) className += ' user-answer';
                if (i === q.correctIndex && isCorrect) className += ' user-correct';
                if (i === q.correctIndex && !isCorrect) className += ' correct-answer';

                optionsHTML += `
                    <div class="${className}">
                        <span class="review-option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </div>
                `;
            });

            item.innerHTML = `
                <div class="review-question-header">
                    <span class="review-status-icon">${isCorrect ? '✅' : '❌'}</span>
                    <span class="review-question-num">Soal ${idx + 1}</span>
                    <span class="review-category">${q.category}</span>
                </div>
                <div class="review-question-text">${q.question}</div>
                <div class="review-options">${optionsHTML}</div>
                <div class="review-explanation">
                    <strong>Penjelasan:</strong> ${q.explanation}
                </div>
            `;

            reviewList.appendChild(item);
        });

        if (reviewList.children.length === 0) {
            reviewList.innerHTML = `
                <div style="text-align:center; padding:3rem; color:var(--text-muted);">
                    <div style="font-size:3rem; margin-bottom:1rem;">📋</div>
                    <p>Tidak ada soal dalam kategori ini.</p>
                </div>
            `;
        }
    }

    // =============================================
    // RETRY WRONG QUESTIONS
    // =============================================
    btnRetryWrong.addEventListener('click', () => {
        state.sessionNumber++;
        startSession();
    });

    // =============================================
    // NEW TEST
    // =============================================
    btnNewTest.addEventListener('click', () => {
        showScreen(screenLanding);
    });

    // =============================================
    // CELEBRATION (All Correct)
    // =============================================
    function showCelebration() {
        totalSessions.textContent = state.sessionNumber;
        totalQuestionsAnswered.textContent = state.totalQuestionsAnswered;
        showScreen(screenComplete);
        spawnConfetti();
    }

    function spawnConfetti() {
        const container = $('#confetti-container');
        container.innerHTML = '';
        const colors = ['#6366f1', '#8b5cf6', '#a78bfa', '#ec4899', '#f43f5e', '#10b981', '#f59e0b', '#06b6d4', '#fbbf24'];

        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            container.appendChild(confetti);
        }
    }

    btnRestart.addEventListener('click', () => {
        showScreen(screenLanding);
    });

    // =============================================
    // KEYBOARD NAVIGATION
    // =============================================
    document.addEventListener('keydown', (e) => {
        if (!screenQuiz.classList.contains('active')) return;

        switch (e.key) {
            case '1': case 'a': case 'A':
                selectOptionByKey(0);
                break;
            case '2': case 'b': case 'B':
                selectOptionByKey(1);
                break;
            case '3': case 'c': case 'C':
                selectOptionByKey(2);
                break;
            case '4': case 'd': case 'D':
                selectOptionByKey(3);
                break;
            case 'ArrowLeft':
                if (state.currentQuestionIndex > 0) {
                    state.currentQuestionIndex--;
                    renderQuestion();
                }
                break;
            case 'ArrowRight':
            case 'Enter':
                if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
                    state.currentQuestionIndex++;
                    renderQuestion();
                } else if (e.key === 'Enter') {
                    finishTest();
                }
                break;
        }
    });

    function selectOptionByKey(index) {
        const q = state.currentQuestions[state.currentQuestionIndex];
        if (index < q.options.length) {
            selectOption(q.id, index);
        }
    }

    // =============================================
    // INIT
    // =============================================
    function init() {
        injectSVGDefs();
        showScreen(screenLanding);
    }

    init();

})();
