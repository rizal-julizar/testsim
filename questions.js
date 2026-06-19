/**
 * Database Soal Ujian Teori SIM Indonesia
 * Berdasarkan materi resmi Korlantas Polri & UU No. 22 Tahun 2009
 * 
 * Kategori:
 * - rambu: Rambu Lalu Lintas (Peringatan, Larangan, Perintah, Petunjuk)
 * - marka: Marka Jalan & APILL
 * - aturan: Aturan & Undang-Undang Lalu Lintas
 * - keselamatan: Keselamatan & Persepsi Bahaya
 * - kendaraan: Pengenalan Kendaraan & Perlengkapan
 * - etika: Etika Berkendara & Wawasan
 * 
 * Setiap soal memiliki tag SIM type: "A", "C", atau "semua"
 */

const QUESTION_BANK = [

    // ==========================================
    // KATEGORI: RAMBU LALU LINTAS (15 Soal)
    // ==========================================
    {
        id: 1,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu lalu lintas berbentuk segitiga sama sisi dengan warna dasar kuning dan lambang berwarna hitam menandakan apa?",
        options: [
            "Petunjuk jalan",
            "Larangan",
            "Peringatan",
            "Perintah"
        ],
        correctIndex: 2,
        explanation: "Rambu berbentuk segitiga dengan warna dasar kuning/merah dan lambang hitam merupakan rambu peringatan yang menunjukkan adanya potensi bahaya atau kondisi khusus di depan."
    },
    {
        id: 2,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu dengan latar belakang warna biru dan simbol putih biasanya merupakan rambu jenis apa?",
        options: [
            "Rambu Larangan",
            "Rambu Peringatan",
            "Rambu Perintah",
            "Rambu Petunjuk"
        ],
        correctIndex: 2,
        explanation: "Rambu berlatar biru dengan simbol putih berbentuk lingkaran adalah rambu perintah. Rambu ini menyatakan perintah yang wajib dilakukan oleh pengguna jalan."
    },
    {
        id: 3,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu batas kecepatan maksimum termasuk dalam jenis rambu apa?",
        options: [
            "Rambu Peringatan",
            "Rambu Larangan",
            "Rambu Perintah",
            "Rambu Petunjuk"
        ],
        correctIndex: 1,
        explanation: "Rambu batas kecepatan maksimum termasuk rambu larangan karena melarang pengemudi melebihi kecepatan yang ditentukan. Rambu ini berbentuk lingkaran dengan garis tepi merah."
    },
    {
        id: 4,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Apa arti dari rambu 'Wajib mengikuti arah ke kiri'?",
        options: [
            "Peringatan tikungan ke kiri",
            "Larangan belok kanan",
            "Perintah untuk mengikuti arah ke kiri",
            "Petunjuk jalan ke kiri"
        ],
        correctIndex: 2,
        explanation: "Rambu 'Wajib mengikuti arah ke kiri' adalah rambu perintah (berlatar biru, simbol putih) yang memerintahkan pengendara untuk mengikuti arah ke kiri."
    },
    {
        id: 5,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu berbentuk lingkaran berwarna dasar putih dengan garis tepi merah menandakan apa?",
        options: [
            "Perintah",
            "Peringatan",
            "Larangan",
            "Petunjuk"
        ],
        correctIndex: 2,
        explanation: "Rambu berbentuk lingkaran dengan warna dasar putih dan garis tepi merah merupakan rambu larangan yang menyatakan perbuatan yang dilarang dilakukan oleh pengguna jalan."
    },
    {
        id: 6,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu berbentuk persegi panjang berwarna hijau dengan tulisan putih termasuk jenis rambu apa?",
        options: [
            "Rambu Peringatan",
            "Rambu Larangan",
            "Rambu Perintah",
            "Rambu Petunjuk"
        ],
        correctIndex: 3,
        explanation: "Rambu berbentuk persegi panjang atau bujur sangkar dengan warna hijau atau biru adalah rambu petunjuk yang memberikan informasi jurusan, fasilitas, atau lokasi."
    },
    {
        id: 7,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Apa yang harus dilakukan saat menghadapi rambu peringatan tanjakan?",
        options: [
            "Menambah kecepatan agar kuat menanjak",
            "Mengurangi kecepatan dan bersiap menggunakan gigi rendah",
            "Berhenti sejenak sebelum tanjakan",
            "Tetap melaju dengan kecepatan konstan"
        ],
        correctIndex: 1,
        explanation: "Saat menemui rambu peringatan tanjakan, pengemudi harus mengurangi kecepatan dan mempersiapkan gigi rendah untuk menghadapi kondisi jalan yang menanjak secara aman."
    },
    {
        id: 8,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu berbentuk segi delapan (oktagon) berwarna merah dengan tulisan 'STOP' berarti?",
        options: [
            "Dilarang berhenti",
            "Kurangi kecepatan",
            "Wajib berhenti sebelum memasuki persimpangan",
            "Dilarang melintas"
        ],
        correctIndex: 2,
        explanation: "Rambu STOP berbentuk segi delapan merah memerintahkan pengemudi untuk berhenti sepenuhnya sebelum memasuki persimpangan, memastikan kondisi aman lalu melanjutkan perjalanan."
    },
    {
        id: 9,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Apa arti rambu dengan gambar silang (X) berwarna merah di atas lingkaran putih?",
        options: [
            "Dilarang berhenti",
            "Dilarang parkir",
            "Dilarang berhenti dan parkir",
            "Dilarang putar balik"
        ],
        correctIndex: 2,
        explanation: "Rambu dengan tanda silang (X) merah di atas lingkaran putih berarti dilarang berhenti dan dilarang parkir di area tersebut. Jika hanya satu garis diagonal, artinya hanya dilarang parkir."
    },
    {
        id: 10,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu peringatan berbentuk belah ketupat dengan gambar anak-anak menyeberang menandakan?",
        options: [
            "Area bermain anak",
            "Dekat zona sekolah, waspada terhadap pejalan kaki anak-anak",
            "Dilarang membawa anak di kendaraan",
            "Tempat penitipan anak"
        ],
        correctIndex: 1,
        explanation: "Rambu ini memperingatkan pengemudi bahwa mereka memasuki zona sekolah dan harus waspada terhadap anak-anak yang mungkin menyeberang jalan. Pengemudi harus mengurangi kecepatan."
    },
    {
        id: 11,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Jika terdapat rambu larangan belok kiri, apa yang harus dilakukan pengemudi?",
        options: [
            "Tetap boleh belok kiri jika keadaan sepi",
            "Dilarang belok kiri dan harus memilih arah lain yang diperbolehkan",
            "Boleh belok kiri tapi hati-hati",
            "Hanya dilarang pada jam tertentu"
        ],
        correctIndex: 1,
        explanation: "Rambu larangan belok kiri berarti pengemudi tidak boleh berbelok ke kiri dalam keadaan apapun. Pengemudi wajib mengikuti arah lain yang diperbolehkan."
    },
    {
        id: 12,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu berbentuk lingkaran biru dengan panah putih menunjuk ke atas berarti?",
        options: [
            "Jalan searah menuju atas/utara",
            "Wajib berjalan lurus",
            "Dilarang berbalik arah",
            "Jalan bertingkat"
        ],
        correctIndex: 1,
        explanation: "Rambu perintah berbentuk lingkaran biru dengan panah putih ke atas berarti pengemudi diperintahkan untuk berjalan lurus (wajib lurus)."
    },
    {
        id: 13,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Apa fungsi rambu tambahan (papan tambahan) yang terpasang di bawah rambu utama?",
        options: [
            "Menggantikan rambu utama",
            "Memberi penjelasan atau batasan tambahan pada rambu utama",
            "Menandakan rambu utama tidak berlaku",
            "Hanya sebagai hiasan"
        ],
        correctIndex: 1,
        explanation: "Rambu tambahan (papan tambahan) berfungsi memberikan penjelasan atau batasan tambahan terkait rambu utama, seperti jarak berlakunya rambu, jenis kendaraan yang dikenai, atau waktu berlaku."
    },
    {
        id: 14,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Rambu peringatan tikungan tajam ke kanan menandakan?",
        options: [
            "Dilarang belok kanan",
            "Wajib belok kanan",
            "Hati-hati, ada tikungan tajam ke kanan di depan",
            "Jalan bercabang ke kanan"
        ],
        correctIndex: 2,
        explanation: "Rambu peringatan tikungan tajam memberi tahu pengemudi bahwa di depan terdapat tikungan tajam. Pengemudi harus mengurangi kecepatan dan bersiap menghadapi tikungan."
    },
    {
        id: 15,
        category: "Rambu Lalu Lintas",
        simType: "semua",
        question: "Apa arti rambu lingkaran merah dengan garis horizontal putih di tengah?",
        options: [
            "Dilarang parkir",
            "Dilarang masuk / jalan tertutup untuk semua kendaraan",
            "Jalan satu arah",
            "Dilarang berhenti"
        ],
        correctIndex: 1,
        explanation: "Rambu lingkaran merah dengan garis horizontal putih berarti dilarang masuk. Rambu ini melarang semua kendaraan memasuki jalan dari arah tersebut."
    },

    // ==========================================
    // KATEGORI: MARKA JALAN & APILL (8 Soal)
    // ==========================================
    {
        id: 16,
        category: "Marka Jalan",
        simType: "semua",
        question: "Apa arti garis putih putus-putus di tengah jalan dua arah?",
        options: [
            "Kendaraan dilarang mendahului",
            "Kendaraan boleh melintas untuk mendahului dengan memperhatikan keamanan",
            "Batas dilarang parkir",
            "Penanda jalur khusus kendaraan darurat"
        ],
        correctIndex: 1,
        explanation: "Marka garis putih putus-putus menunjukkan batas lajur yang boleh dilintasi. Kendaraan diperbolehkan berpindah lajur atau mendahului jika situasi aman."
    },
    {
        id: 17,
        category: "Marka Jalan",
        simType: "semua",
        question: "Marka jalan berupa garis putih ganda utuh (tidak putus-putus) di tengah jalan berarti?",
        options: [
            "Boleh mendahului dari kedua arah",
            "Dilarang melintas atau mendahului dari kedua arah",
            "Hanya boleh dilintasi kendaraan darurat",
            "Batas kecepatan rendah"
        ],
        correctIndex: 1,
        explanation: "Garis putih ganda utuh (double solid line) berarti kedua arah dilarang melintas garis tersebut. Pengemudi dari kedua sisi tidak boleh menyeberang garis untuk mendahului."
    },
    {
        id: 18,
        category: "Marka Jalan",
        simType: "semua",
        question: "Lampu lalu lintas berwarna kuning menyala berarti?",
        options: [
            "Boleh jalan cepat sebelum menjadi merah",
            "Hati-hati, bersiaplah untuk berhenti",
            "Prioritas untuk kendaraan dari arah lain",
            "Lampu rusak"
        ],
        correctIndex: 1,
        explanation: "Lampu kuning berarti peringatan untuk bersiap-siap berhenti. Pengemudi harus mengurangi kecepatan dan bersiap berhenti dengan aman, bukan mempercepat kendaraan."
    },
    {
        id: 19,
        category: "Marka Jalan",
        simType: "semua",
        question: "Dalam suatu persimpangan terdapat lampu lalu lintas, polisi lalu lintas, dan polisi pamong praja. Isyarat siapa yang harus diikuti?",
        options: [
            "Lampu lalu lintas",
            "Polisi lalu lintas (Polantas)",
            "Polisi pamong praja (Satpol PP)",
            "Semuanya secara bersamaan"
        ],
        correctIndex: 1,
        explanation: "Berdasarkan UU LLAJ, urutan prioritas isyarat lalu lintas adalah: 1) Petugas Polisi Lalu Lintas, 2) Alat Pemberi Isyarat Lalu Lintas (APILL/lampu), 3) Rambu, 4) Marka. Jadi isyarat Polantas paling diutamakan."
    },
    {
        id: 20,
        category: "Marka Jalan",
        simType: "semua",
        question: "Marka jalan berupa garis kuning pada tepi jalan berarti?",
        options: [
            "Boleh parkir sembarangan",
            "Dilarang parkir di area tersebut",
            "Jalur khusus sepeda",
            "Area pejalan kaki"
        ],
        correctIndex: 1,
        explanation: "Garis kuning pada tepi jalan menandakan larangan parkir di area tersebut. Kendaraan tidak boleh diparkir di sepanjang garis kuning."
    },
    {
        id: 21,
        category: "Marka Jalan",
        simType: "semua",
        question: "Garis marka melintang berupa garis putih putus-putus di persimpangan berfungsi sebagai?",
        options: [
            "Tanda wajib berhenti",
            "Batas berhenti kendaraan saat lampu merah",
            "Tanda boleh parkir",
            "Batas area pejalan kaki"
        ],
        correctIndex: 1,
        explanation: "Garis marka melintang putus-putus di persimpangan menandakan batas tempat kendaraan harus berhenti saat lampu merah atau saat harus memberi prioritas kepada kendaraan lain."
    },
    {
        id: 22,
        category: "Marka Jalan",
        simType: "semua",
        question: "Lampu lalu lintas berkedip kuning secara terus-menerus menandakan?",
        options: [
            "Lampu sedang rusak, abaikan saja",
            "Hati-hati, pelan-pelan dan waspada (perhatikan lalu lintas sekitar)",
            "Wajib berhenti total sebelum melanjutkan",
            "Jalan sedang ditutup"
        ],
        correctIndex: 1,
        explanation: "Lampu kuning berkedip menunjukkan bahwa pengendara harus berhati-hati dan waspada terhadap kondisi lalu lintas sekitar. Biasanya dipasang pada persimpangan kecil atau di malam hari."
    },
    {
        id: 23,
        category: "Marka Jalan",
        simType: "semua",
        question: "Marka berupa gambar panah di permukaan jalan berfungsi sebagai?",
        options: [
            "Hiasan jalan",
            "Penunjuk arah pergerakan lalu lintas yang harus diikuti kendaraan di lajur tersebut",
            "Tanda jalan utama",
            "Tanda jalur darurat"
        ],
        correctIndex: 1,
        explanation: "Marka panah di jalan berfungsi sebagai penunjuk arah yang wajib diikuti kendaraan di lajur tersebut, misalnya lurus saja, belok kiri, belok kanan, atau kombinasinya."
    },

    // ==========================================
    // KATEGORI: ATURAN & UNDANG-UNDANG (12 Soal)
    // ==========================================
    {
        id: 24,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Berdasarkan UU No. 22 Tahun 2009, berapakah batas usia minimal untuk memiliki SIM C?",
        options: [
            "15 tahun",
            "16 tahun",
            "17 tahun",
            "18 tahun"
        ],
        correctIndex: 2,
        explanation: "Berdasarkan UU No. 22 Tahun 2009 tentang LLAJ, usia minimal untuk memiliki SIM C (sepeda motor) adalah 17 tahun."
    },
    {
        id: 25,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Berdasarkan UU No. 22 Tahun 2009, berapakah batas usia minimal untuk memiliki SIM A?",
        options: [
            "16 tahun",
            "17 tahun",
            "18 tahun",
            "21 tahun"
        ],
        correctIndex: 1,
        explanation: "Berdasarkan UU No. 22 Tahun 2009 Pasal 81, usia minimal untuk memiliki SIM A (kendaraan roda empat perseorangan) adalah 17 tahun."
    },
    {
        id: 26,
        category: "Aturan Lalu Lintas",
        simType: "A",
        question: "SIM A dapat digunakan untuk mengemudikan kendaraan jenis apa?",
        options: [
            "Mobil penumpang dan sepeda motor",
            "Mobil penumpang perseorangan dan mobil barang dengan berat tidak melebihi 3.500 kg",
            "Semua jenis kendaraan bermotor",
            "Hanya mobil penumpang pribadi"
        ],
        correctIndex: 1,
        explanation: "SIM A berlaku untuk mengemudikan kendaraan bermotor untuk mobil penumpang perseorangan dan mobil barang perseorangan dengan jumlah berat yang diperbolehkan tidak melebihi 3.500 kg."
    },
    {
        id: 27,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Yang TIDAK termasuk dalam golongan SIM untuk kendaraan roda 4 atau lebih adalah?",
        options: [
            "SIM A",
            "SIM B1",
            "SIM B2",
            "SIM C"
        ],
        correctIndex: 3,
        explanation: "SIM C adalah SIM untuk kendaraan bermotor roda dua (sepeda motor), bukan untuk kendaraan roda 4 atau lebih. SIM A, B1, dan B2 adalah untuk kendaraan roda 4 atau lebih."
    },
    {
        id: 28,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Masa berlaku SIM di Indonesia adalah berapa tahun?",
        options: [
            "3 tahun",
            "5 tahun",
            "10 tahun",
            "Seumur hidup"
        ],
        correctIndex: 1,
        explanation: "SIM di Indonesia memiliki masa berlaku 5 tahun sejak tanggal diterbitkan. Setelah itu harus diperpanjang sebelum masa berlakunya habis."
    },
    {
        id: 29,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Bagi pengemudi yang terlibat kecelakaan lalu lintas dengan korban luka berat atau meninggal dunia, apa yang berwenang dilakukan oleh Polri terhadap SIM-nya?",
        options: [
            "Membatalkan SIM-nya secara permanen",
            "Mencabut SIM-nya",
            "Melakukan uji ulang terhadap SIM-nya",
            "Tidak ada tindakan pada SIM"
        ],
        correctIndex: 2,
        explanation: "Berdasarkan UU LLAJ, Polri berwenang melakukan uji ulang terhadap SIM pengemudi yang terlibat kecelakaan lalu lintas dengan korban luka berat atau meninggal dunia."
    },
    {
        id: 30,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Batas kecepatan maksimum kendaraan bermotor di kawasan permukiman atau pemukiman menurut aturan yang berlaku adalah?",
        options: [
            "20 km/jam",
            "25-30 km/jam",
            "50 km/jam",
            "80 km/jam"
        ],
        correctIndex: 1,
        explanation: "Di kawasan permukiman/pemukiman, kecepatan kendaraan bermotor dibatasi maksimum 25-30 km/jam untuk menjaga keselamatan warga, terutama anak-anak dan pejalan kaki."
    },
    {
        id: 31,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Saat berkendara, dokumen apa saja yang wajib dibawa oleh pengemudi?",
        options: [
            "SIM dan KTP saja",
            "SIM, STNK, dan bukti lulus uji berkala (untuk kendaraan wajib uji)",
            "SIM saja sudah cukup",
            "STNK dan KTP saja"
        ],
        correctIndex: 1,
        explanation: "Pengemudi wajib membawa SIM sesuai golongan kendaraan, STNK atau STCK yang masih berlaku, dan bukti kelulusan uji berkala bagi kendaraan yang wajib uji."
    },
    {
        id: 32,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Dalam hal apa pengemudi TIDAK diperbolehkan memasuki persimpangan jalan walaupun lampu hijau menyala?",
        options: [
            "Saat hujan deras",
            "Apabila terjadi kemacetan di persimpangan sehingga kendaraan berpotensi terkunci di tengah",
            "Saat jalanan sepi",
            "Saat malam hari"
        ],
        correctIndex: 1,
        explanation: "Pengemudi tidak boleh memasuki persimpangan meskipun lampu hijau jika kemacetan di persimpangan dapat menyebabkan kendaraan terhenti di tengah persimpangan (blocking the box), yang akan mengganggu arus lalu lintas dari arah lain."
    },
    {
        id: 33,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Di jalan tol, kendaraan apa yang TIDAK diperbolehkan masuk?",
        options: [
            "Mobil sedan",
            "Bus besar",
            "Sepeda motor dan kendaraan tidak bermotor",
            "Truk kontainer"
        ],
        correctIndex: 2,
        explanation: "Jalan tol hanya diperuntukkan bagi kendaraan bermotor roda empat atau lebih. Sepeda motor, kendaraan tidak bermotor, pejalan kaki, dan kendaraan bermotor roda tiga dilarang masuk jalan tol."
    },
    {
        id: 34,
        category: "Aturan Lalu Lintas",
        simType: "semua",
        question: "Pengemudi kendaraan bermotor yang akan berbelok atau berbalik arah wajib memberikan isyarat berapa meter sebelum persimpangan?",
        options: [
            "10 meter",
            "25 meter",
            "30 meter (minimum)",
            "50 meter"
        ],
        correctIndex: 2,
        explanation: "Pengemudi wajib memberikan isyarat dengan lampu penunjuk arah atau isyarat tangan minimal 30 meter sebelum berbelok atau berbalik arah, agar pengemudi lain dapat mengantisipasi."
    },
    {
        id: 35,
        category: "Aturan Lalu Lintas",
        simType: "C",
        question: "Pengendara sepeda motor wajib menyalakan lampu utama kapan?",
        options: [
            "Hanya saat malam hari",
            "Hanya saat hujan",
            "Sepanjang waktu (siang dan malam)",
            "Hanya di luar kota"
        ],
        correctIndex: 2,
        explanation: "Berdasarkan UU LLAJ, pengendara sepeda motor wajib menyalakan lampu utama pada siang maupun malam hari. Ini untuk meningkatkan visibilitas sepeda motor di jalan."
    },

    // ==========================================
    // KATEGORI: KESELAMATAN & PERSEPSI BAHAYA (10 Soal)
    // ==========================================
    {
        id: 36,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Anda berkendara dan melihat kendaraan parkir di sisi jalan dengan lampu rem menyala. Apa tindakan yang paling tepat?",
        options: [
            "Tetap melaju dengan kecepatan konstan",
            "Mengurangi kecepatan dan mengantisipasi kemungkinan pintu terbuka atau kendaraan bergerak tiba-tiba",
            "Membunyikan klakson berkali-kali",
            "Menambah kecepatan untuk segera melewati"
        ],
        correctIndex: 1,
        explanation: "Lampu rem menyala menandakan kemungkinan pengemudi masih di dalam kendaraan. Pintu bisa terbuka tiba-tiba atau kendaraan bisa bergerak. Tindakan paling aman adalah mengurangi kecepatan dan waspada."
    },
    {
        id: 37,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Saat berkendara, Anda melihat seorang anak kecil berlari ke arah jalan di depan Anda. Apa yang harus dilakukan?",
        options: [
            "Membunyikan klakson panjang tanpa mengerem",
            "Segera mengurangi kecepatan dan melakukan pengereman dengan aman",
            "Berpindah jalur dengan cepat tanpa melihat spion",
            "Tetap melaju dan berharap anak tersebut berhenti"
        ],
        correctIndex: 1,
        explanation: "Tindakan utama saat menghadapi bahaya dari pejalan kaki (terutama anak-anak) adalah segera mengurangi kecepatan dan mengerem dengan aman. Anak-anak cenderung tidak bisa memprediksi lalu lintas."
    },
    {
        id: 38,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Apa yang harus dilakukan jika lampu lalu lintas berubah menjadi kuning saat Anda mendekati persimpangan?",
        options: [
            "Mempercepat kendaraan agar tidak terkena lampu merah",
            "Mengurangi kecepatan dan bersiap berhenti dengan aman",
            "Tetap berjalan seperti biasa",
            "Berhenti mendadak di tempat"
        ],
        correctIndex: 1,
        explanation: "Saat lampu berubah kuning, tindakan yang benar adalah mengurangi kecepatan dan bersiap untuk berhenti dengan aman, bukan mempercepat. Berhenti mendadak juga berbahaya."
    },
    {
        id: 39,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Saat memasuki tikungan yang tidak terlihat ujungnya (blind corner), apa yang harus dilakukan pengemudi?",
        options: [
            "Mempercepat agar cepat melewati tikungan",
            "Membunyikan klakson panjang lalu tetap dengan kecepatan sama",
            "Mengurangi kecepatan, tetap di lajur, dan siap berhenti jika ada halangan",
            "Berpindah ke lajur tengah jalan untuk melihat lebih jelas"
        ],
        correctIndex: 2,
        explanation: "Di tikungan yang tidak terlihat ujungnya, pengemudi harus mengurangi kecepatan, tetap pada lajur sendiri, dan siap berhenti jika ada kendaraan atau halangan dari arah berlawanan."
    },
    {
        id: 40,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Saat hujan deras, jarak pengereman kendaraan akan?",
        options: [
            "Tetap sama seperti kondisi normal",
            "Menjadi lebih pendek karena ban menyerap air",
            "Menjadi lebih panjang karena permukaan jalan licin",
            "Tidak berpengaruh terhadap pengereman"
        ],
        correctIndex: 2,
        explanation: "Saat hujan, jarak pengereman meningkat secara signifikan karena permukaan jalan menjadi licin dan daya cengkeram ban berkurang. Pengemudi harus menjaga jarak lebih jauh dari kendaraan di depan."
    },
    {
        id: 41,
        category: "Keselamatan",
        simType: "A",
        question: "Apakah sabuk keselamatan (seat belt) bermanfaat saat terjadi benturan keras?",
        options: [
            "Ya, sabuk keselamatan menahan badan agar tidak terlempar saat terjadi benturan",
            "Tidak, sabuk keselamatan tidak berpengaruh saat benturan",
            "Sabuk keselamatan hanya berguna saat kendaraan berjalan pelan",
            "Sabuk keselamatan justru berbahaya saat benturan"
        ],
        correctIndex: 0,
        explanation: "Sabuk keselamatan sangat penting untuk menahan tubuh pengemudi dan penumpang agar tidak terlempar ke depan atau keluar kendaraan saat terjadi benturan keras. Ini secara signifikan mengurangi risiko cedera dan kematian."
    },
    {
        id: 42,
        category: "Keselamatan",
        simType: "C",
        question: "Standar keselamatan helm SNI untuk pengendara sepeda motor harus memenuhi syarat apa?",
        options: [
            "Cukup menutupi kepala bagian atas saja",
            "Menutupi kepala dan memiliki tali pengikat dagu yang terkunci dengan baik",
            "Boleh menggunakan helm proyek sebagai pengganti",
            "Tidak ada standar khusus untuk helm"
        ],
        correctIndex: 1,
        explanation: "Helm SNI harus menutupi kepala dengan baik dan dilengkapi tali pengikat dagu yang terkunci. Helm harus ber-SNI dan terpasang dengan benar. Helm proyek atau helm bukan SNI tidak memenuhi standar keselamatan."
    },
    {
        id: 43,
        category: "Keselamatan",
        simType: "semua",
        question: "Apa yang dimaksud dengan 'jarak aman' saat mengikuti kendaraan di depan?",
        options: [
            "Jarak 1 meter di belakang kendaraan di depan",
            "Jarak minimal 2-3 detik dari kendaraan di depan untuk memberikan waktu reaksi dan pengereman",
            "Selalu menempel di belakang kendaraan di depan",
            "Hanya diperlukan di jalan tol"
        ],
        correctIndex: 1,
        explanation: "Jarak aman menggunakan konsep waktu (2-3 detik) dari kendaraan di depan. Ini memberikan waktu yang cukup untuk bereaksi dan mengerem jika kendaraan di depan berhenti mendadak. Jarak harus diperbesar saat hujan atau kecepatan tinggi."
    },
    {
        id: 44,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Saat berkendara di malam hari dan ada kendaraan dari arah berlawanan yang menyalakan lampu jauh (high beam), apa yang harus dilakukan?",
        options: [
            "Menyalakan lampu jauh juga untuk membalas",
            "Mengalihkan pandangan ke tepi kiri jalan dan mengurangi kecepatan",
            "Menutup mata sesaat lalu melanjutkan berkendara",
            "Membunyikan klakson berulang-ulang"
        ],
        correctIndex: 1,
        explanation: "Saat disilau lampu kendaraan dari arah berlawanan, pandangan harus dialihkan ke tepi kiri jalan (bukan menatap langsung lampu) dan kurangi kecepatan. Jangan membalas dengan lampu jauh karena akan membahayakan kedua pihak."
    },
    {
        id: 45,
        category: "Persepsi Bahaya",
        simType: "semua",
        question: "Mengapa berkendara di bawah pengaruh alkohol sangat berbahaya?",
        options: [
            "Karena alkohol membuat mesin kendaraan cepat panas",
            "Karena alkohol menurunkan konsentrasi, waktu reaksi, dan kemampuan penilaian terhadap situasi",
            "Karena alkohol membuat bahan bakar cepat habis",
            "Tidak berbahaya jika hanya sedikit"
        ],
        correctIndex: 1,
        explanation: "Alkohol secara signifikan menurunkan konsentrasi, memperlambat waktu reaksi, mengurangi koordinasi motorik, dan merusak kemampuan menilai jarak serta situasi. Berkendara di bawah pengaruh alkohol dilarang keras oleh UU LLAJ."
    },

    // ==========================================
    // KATEGORI: PENGENALAN KENDARAAN (5 Soal)
    // ==========================================
    {
        id: 46,
        category: "Pengenalan Kendaraan",
        simType: "A",
        question: "Apa fungsi utama kopling (clutch) pada mobil bertransmisi manual?",
        options: [
            "Mempercepat laju kendaraan",
            "Menghubungkan dan memutuskan tenaga mesin ke transmisi saat perpindahan gigi",
            "Mengerem kendaraan",
            "Menyalakan lampu"
        ],
        correctIndex: 1,
        explanation: "Kopling berfungsi untuk menghubungkan dan memutuskan tenaga mesin ke transmisi. Kopling diinjak (memutus) saat memindahkan gigi, dan dilepas perlahan (menghubungkan) setelah gigi masuk."
    },
    {
        id: 47,
        category: "Pengenalan Kendaraan",
        simType: "semua",
        question: "Apa yang harus dilakukan jika lampu indikator oli menyala saat kendaraan sedang berjalan?",
        options: [
            "Abaikan dan terus berkendara",
            "Segera berhenti di tempat aman dan periksa level oli mesin",
            "Tambah kecepatan agar mesin lebih lancar",
            "Matikan lampu indikator secara manual"
        ],
        correctIndex: 1,
        explanation: "Lampu indikator oli yang menyala menandakan tekanan oli mesin rendah. Jika diabaikan, mesin bisa rusak parah. Segera berhenti di tempat aman dan periksa level oli. Jangan melanjutkan perjalanan sebelum masalah teratasi."
    },
    {
        id: 48,
        category: "Pengenalan Kendaraan",
        simType: "semua",
        question: "Kondisi ban yang baik dan aman untuk berkendara harus memiliki?",
        options: [
            "Ban gundul lebih baik karena lebih grippy",
            "Kedalaman alur ban (kembangan) yang masih memadai dan tekanan angin yang sesuai",
            "Ukuran ban yang berbeda-beda di setiap roda tidak masalah",
            "Ban tidak perlu diperiksa secara rutin"
        ],
        correctIndex: 1,
        explanation: "Ban yang aman harus memiliki kedalaman alur (kembangan) yang memadai untuk mengalirkan air dan mencengkeram jalan, serta tekanan angin sesuai rekomendasi pabrikan. Ban gundul sangat berbahaya terutama saat hujan."
    },
    {
        id: 49,
        category: "Pengenalan Kendaraan",
        simType: "semua",
        question: "Apa fungsi spion pada kendaraan?",
        options: [
            "Sebagai hiasan kendaraan",
            "Untuk melihat kondisi lalu lintas di belakang dan samping kendaraan",
            "Untuk melihat penumpang di kursi belakang",
            "Hanya untuk mempermudah parkir"
        ],
        correctIndex: 1,
        explanation: "Spion berfungsi untuk melihat kondisi lalu lintas di belakang dan samping kendaraan, sangat penting saat akan berpindah lajur, berbelok, mendahului, atau mundur. Pengemudi wajib mengecek spion secara berkala."
    },
    {
        id: 50,
        category: "Pengenalan Kendaraan",
        simType: "A",
        question: "Apa fungsi rem tangan (handbrake/parking brake) pada mobil?",
        options: [
            "Digunakan saat berkendara di jalan menurun untuk mengurangi kecepatan",
            "Mengunci roda agar kendaraan tidak bergerak saat parkir",
            "Menggantikan fungsi rem kaki kapan saja",
            "Untuk mempercepat laju kendaraan"
        ],
        correctIndex: 1,
        explanation: "Rem tangan berfungsi mengunci roda (biasanya roda belakang) agar kendaraan tetap diam saat parkir, terutama di permukaan miring. Rem tangan bukan pengganti rem kaki saat berkendara normal."
    },

    // ==========================================
    // KATEGORI: ETIKA BERKENDARA (10 Soal)
    // ==========================================
    {
        id: 51,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Saat ambulans dengan sirene menyala mendekati dari belakang, apa yang harus dilakukan?",
        options: [
            "Abaikan dan terus berkendara seperti biasa",
            "Mempercepat untuk mendahului ambulans",
            "Memberikan jalan dengan menepi ke kiri dan membiarkan ambulans lewat",
            "Ikuti ambulans dari belakang agar jalanan terbuka"
        ],
        correctIndex: 2,
        explanation: "Semua pengguna jalan wajib memberikan prioritas kepada kendaraan darurat (ambulans, pemadam kebakaran, polisi) yang sedang dalam tugas. Menepi ke kiri dan berhenti sementara agar kendaraan darurat bisa lewat."
    },
    {
        id: 52,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Saat ingin mendahului kendaraan di depan, hal yang HARUS diperhatikan adalah?",
        options: [
            "Langsung mendahului tanpa perlu melihat kondisi",
            "Memastikan jalur sepi dari lalu lintas berlawanan, memberi isyarat, dan mendahului dari sisi kiri",
            "Memastikan jalur aman dari arah berlawanan, memberi isyarat, dan mendahului dari sisi kanan",
            "Mendahului kapan saja asal cepat"
        ],
        correctIndex: 2,
        explanation: "Mendahului dilakukan dari sisi kanan (di Indonesia, lalu lintas jalur kiri). Sebelum mendahului, pastikan lajur sebelah kanan aman dari kendaraan berlawanan arah, beri isyarat, dan kembali ke lajur semula setelah mendahului."
    },
    {
        id: 53,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Di persimpangan yang tidak ada lampu lalu lintas dan tidak ada rambu, kendaraan dari arah mana yang harus didahulukan?",
        options: [
            "Kendaraan yang lebih besar",
            "Kendaraan dari arah kanan",
            "Kendaraan dari arah kiri",
            "Kendaraan yang lebih cepat"
        ],
        correctIndex: 1,
        explanation: "Di persimpangan tanpa lampu dan rambu, berlaku aturan prioritas: kendaraan dari arah kanan harus didahulukan (right-hand rule). Ini adalah aturan universal yang berlaku di Indonesia."
    },
    {
        id: 54,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Kapan penggunaan klakson yang dibenarkan?",
        options: [
            "Kapan saja pengemudi mau membunyikannya",
            "Hanya saat keadaan darurat atau perlu memperingatkan pengguna jalan lain",
            "Saat macet untuk mengekspresikan ketidaksabaran",
            "Saat melewati tempat ibadah atau rumah sakit"
        ],
        correctIndex: 1,
        explanation: "Klakson hanya boleh digunakan seperlunya untuk memperingatkan pengguna jalan lain demi keselamatan. Dilarang membunyikan klakson berlebihan, di dekat tempat ibadah, rumah sakit, atau area yang ditandai dilarang membunyikan klakson."
    },
    {
        id: 55,
        category: "Etika Berkendara",
        simType: "C",
        question: "Berapa jumlah penumpang maksimal yang diperbolehkan pada sepeda motor?",
        options: [
            "Tidak ada batasan",
            "1 orang penumpang (selain pengemudi)",
            "2 orang penumpang",
            "3 orang penumpang"
        ],
        correctIndex: 1,
        explanation: "Sepeda motor hanya diperbolehkan membawa 1 penumpang selain pengemudi. Membawa penumpang lebih dari satu sangat berbahaya karena mempengaruhi keseimbangan dan kemampuan mengendalikan kendaraan."
    },
    {
        id: 56,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Mengapa pengemudi dilarang menggunakan handphone (telepon genggam) saat berkendara?",
        options: [
            "Karena dapat merusak handphone",
            "Karena mengurangi konsentrasi, waktu reaksi, dan pengendalian kendaraan",
            "Karena sinyal bisa mengganggu mesin kendaraan",
            "Sebenarnya boleh asalkan hati-hati"
        ],
        correctIndex: 1,
        explanation: "Menggunakan handphone saat berkendara sangat berbahaya karena mengalihkan perhatian mata, tangan, dan pikiran. Ini secara drastis mengurangi waktu reaksi dan pengendalian kendaraan. UU LLAJ melarang penggunaan telepon genggam saat berkendara."
    },
    {
        id: 57,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Saat berkendara di jalan menanjak dan ada kendaraan dari arah berlawanan, siapa yang harus memberi prioritas?",
        options: [
            "Kendaraan yang menanjak harus berhenti",
            "Kendaraan yang menurun harus memberikan prioritas kepada yang menanjak",
            "Tidak ada aturan khusus",
            "Kendaraan yang lebih kecil harus mengalah"
        ],
        correctIndex: 1,
        explanation: "Kendaraan yang menurun harus memberikan prioritas kepada kendaraan yang menanjak. Hal ini karena kendaraan yang menanjak lebih sulit untuk berhenti dan melanjutkan perjalanan dibanding kendaraan yang menurun."
    },
    {
        id: 58,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Apa yang harus dilakukan pengemudi saat melewati penyeberangan (zebra cross) dan ada pejalan kaki yang akan menyeberang?",
        options: [
            "Membunyikan klakson agar pejalan kaki menunggu",
            "Menghentikan kendaraan dan memberi kesempatan pejalan kaki menyeberang",
            "Mempercepat kendaraan agar cepat lewat",
            "Pejalan kaki yang harus menunggu kendaraan lewat"
        ],
        correctIndex: 1,
        explanation: "Di area penyeberangan (zebra cross), pejalan kaki memiliki hak prioritas. Pengemudi wajib menghentikan kendaraan dan memberikan kesempatan kepada pejalan kaki untuk menyeberang dengan aman."
    },
    {
        id: 59,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Saat kendaraan Anda mogok di tengah jalan, apa tindakan pertama yang harus dilakukan?",
        options: [
            "Meninggalkan kendaraan dan pergi mencari bantuan",
            "Menyalakan lampu hazard, pasang segitiga pengaman, dan pindahkan kendaraan ke bahu jalan jika memungkinkan",
            "Menunggu di dalam kendaraan sampai ada yang membantu",
            "Membunyikan klakson terus-menerus"
        ],
        correctIndex: 1,
        explanation: "Langkah pertama saat mogok: nyalakan lampu hazard sebagai peringatan, pasang segitiga pengaman di belakang kendaraan (minimal 30 meter), dan jika memungkinkan dorong kendaraan ke bahu jalan agar tidak menghalangi lalu lintas."
    },
    {
        id: 60,
        category: "Etika Berkendara",
        simType: "semua",
        question: "Apa tujuan utama pengemudi mengurangi kecepatan saat melewati genangan air di jalan?",
        options: [
            "Agar tidak memercikkan air ke pejalan kaki atau kendaraan lain",
            "Untuk menghindari aquaplaning (kendaraan mengapung di atas air) dan kehilangan kendali",
            "Kedua jawaban A dan B benar",
            "Tidak perlu mengurangi kecepatan saat melewati genangan air"
        ],
        correctIndex: 2,
        explanation: "Mengurangi kecepatan saat melewati genangan air bertujuan ganda: mencegah aquaplaning (ban kehilangan kontak dengan permukaan jalan karena lapisan air) dan sebagai etika agar tidak memercikkan air ke pengguna jalan lain."
    }
];

// Fungsi untuk mendapatkan soal berdasarkan jenis SIM
function getQuestionsBySimType(simType) {
    let filtered;
    if (simType === "umum") {
        filtered = [...QUESTION_BANK];
    } else {
        filtered = QUESTION_BANK.filter(q => q.simType === "semua" || q.simType === simType);
    }
    // Acak urutan
    return shuffleArray(filtered);
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
