/* Türkçe çeviri dosyası */

export const tr = {
  // Header Menu
  menu: {
    skills: "Yetenekler",
    education: "Eğitim",
    experience: "İş Tecrübeleri",
    projects: "Projeler",
    openSource: "Açık Kaynak",
    achievements: "Başarılar",
    blogs: "Bloglar",
    talks: "Konuşmalar",
    resume: "Özgeçmiş",
    contact: "İletişim"
  },

  // Greeting Section
  greeting: {
    title: "Merhaba, ben Emre 👋",
    subTitle:
      "Gömülü ve aviyonik sistemlerde yazılım doğrulama ve test otomasyonu üzerine çalışırken, SıraTaksi'nin kurucu ekibinde ürün geliştirmeye devam ediyorum. Deneyimim Python tabanlı test otomasyonu, haberleşme protokolleri, gerçek zamanlı sistemler ve backend/mobil geliştirmeyi kapsıyor.",
    resumeButton: "Özgeçmişimi İncele",
    contactButton: "İletişime Geç"
  },

  // Skills Section
  skills: {
    title: "Neler yapıyorum",
    subTitle:
      "Gömülü yazılımları doğruluyor, güvenilir test otomasyonları geliştiriyor ve üretime hazır ürünler geliştirmeye devam ediyorum.",
    skillsList: [
      "⚡ Gereksinim bazlı yazılım doğrulama, test prosedürü geliştirme ve sonuç analizi",
      "⚡ Python tabanlı test otomasyonu, regresyon ve entegrasyon testleri",
      "⚡ FPGA ve ARM SoC platformlarında Embedded Linux ve gerçek zamanlı/gömülü sistemler",
      "⚡ RS-232/RS-422, CAN, Ethernet ve ICD tabanlı haberleşme testleri",
      "⚡ Kök neden analizi için Linux, Wireshark, log analizi ve kaynak kod seviyesinde hata ayıklama",
      "⚡ Node.js, MongoDB ve Flutter ile backend ve mobil ürün geliştirme",
      "⚡ CI/CD, container tabanlı teslimat, sürüm yönetimi ve production deployment"
    ]
  },

  // Education Section
  education: {
    title: "Eğitim",
    schools: [
      {
        schoolName: "Gebze Teknik Üniversitesi",
        subHeader: "Bilgisayar Mühendisliği (İngilizce)",
        duration: "Eylül 2020 - Eylül 2025",
        desc: "GTÜ Bilgisayar Mühendisliği programında algoritmalar, yazılım mimarisi, veri yapıları ve sistem tasarımı alanlarında güçlü bir temel oluşturdum; takım projeleriyle teoriyi üretime dönüştürme fırsatı buldum.",
        descBullets: [
          "C, C++, Java ve Python ile hem bireysel hem ekip bazlı yazılım projeleri geliştirdim.",
          "Mobil, web ve backend alanlarında uçtan uca ürün geliştirme deneyimi kazandım.",
          "Veri tabanı modelleme, API tasarımı ve test odaklı geliştirme pratiklerini proje çalışmalarında uyguladım.",
          "Yapay zeka ve bilgisayarla görme dersleri kapsamında model geliştirme ve değerlendirme süreçlerinde çalıştım.",
          "Gerçek zamanlı sistemler, eşzamanlılık ve performans odaklı tasarım konularında akademik ve pratik deneyim edindim.",
          "Farklı disiplinlerden ekiplerle çalışarak teknik iletişim, dokümantasyon ve proje planlama becerilerimi geliştirdim."
        ]
      },
      {
        schoolName: "Esenyurt Anadolu Lisesi",
        subHeader: "",
        duration: "Eylül 2015 - Haziran 2019",
        desc: "YKS 2020 Sayısal Sıralaması: 8.438.",
        descBullets: []
      }
    ]
  },

  // Tech Stack / Proficiency
  techStack: {
    experience: [
      {Stack: "İngilizce", progressPercentage: "80%"},
      {Stack: "Programlama / Algoritma", progressPercentage: "90%"},
      {Stack: "İletişim ve Ekip Çalışması", progressPercentage: "100%"}
    ]
  },

  // Work Experience
  workExperience: {
    title: "Tecrübeler",
    workTitle: "İş Tecrübeleri",
    internshipTitle: "Staj Tecrübeleri",
    workItems: [
      {
        role: "Yazılım Test Mühendisi",
        company: "ASELSAN (BİTES üzerinden) — MEOS",
        date: "Haziran 2026 – Devam Ediyor",
        desc: "ASELSAN MEOS bünyesinde, BİTES üzerinden gömülü ve aviyonik yazılımların gereksinim bazlı doğrulama ve test faaliyetlerinde çalışıyorum.",
        descBullets: [
          "Python tabanlı otomatik testler geliştiriyor, mevcut test altyapısında regresyon ve entegrasyon testleri yürütüyorum.",
          "RS-232/422, CAN ve Ethernet tabanlı haberleşme arayüzleri ile ICD mesajlarının doğrulamasını gerçekleştiriyorum.",
          "Linux, Wireshark, log analizi ve gerektiğinde kaynak kod incelemesi kullanarak test ve haberleşme problemlerini analiz ediyorum."
        ]
      },
      {
        role: "Kurucu Ortak & Yazılım Geliştirici (Part-time)",
        company: "SıraTaksi",
        date: "Eylül 2025 – Devam Ediyor",
        website: "https://sirataksi.com/",
        desc: "Taksi durakları için canlı sıra, sürücü durumu, rezervasyon ve bildirim yönetimi sağlayan SıraTaksi platformunun kurucu ekibinde ürün geliştirmeye devam ediyorum.",
        descBullets: [
          "Backend servisleri, mobil uygulama ve operasyon akışlarının geliştirilmesinde aktif rol alıyorum.",
          "Node.js/Express, MongoDB ve Flutter tabanlı sistemde gerçek zamanlı sıra ve rezervasyon süreçleri üzerinde çalışıyorum.",
          "CI/CD, sürüm, test ve production deployment süreçlerine katkı sağlıyorum."
        ]
      }
    ],
    internshipItems: [
      {
        role: "Mobil Uygulama / Haberleşme Stajyeri",
        company: "ORTEM Electronics",
        date: "Ocak 2025 – Şubat 2025",
        desc: "Android tarafında USB-Serial portu üzerinden CAN verilerini okuyabilen Flutter tabanlı bir haberleşme uygulaması geliştirdim.",
        descBullets: [
          "Baud rate yönetimi ve endpoint yapılandırması için farklı kütüphaneleri test ederek donanım-yazılım uyumunu sağladım.",
          "CAN frame ayrıştırma, byte-level parsing, veri tamponlama ve paket bütünlüğü kontrol algoritmaları tasarladım.",
          "Uygulamayı Clean Architecture prensiplerine göre katmanlara ayırarak test edilebilir ve sürdürülebilir bir yapı oluşturdum.",
          "Docklight, CAN Debugger araçlarıyla debugging yaparak veri kayıplarını azaltan, güvenilir gerçek zamanlı CAN akışı sağladım."
        ]
      },
      {
        role: "FPGA Tasarım Stajyeri",
        company: "TÜBİTAK BİLGEM",
        date: "Temmuz 2025 – Ağustos 2025",
        desc: "VHDL ve Vivado kullanarak ölçeklenebilir dijital mimariler tasarladım; durum makineleri ve otomatik testbench'ler geliştirdim.",
        descBullets: [
          "Oversampling ve metastabilite koruması uygulayarak güvenilir gerçek zamanlı veri aktarımı sağlayan UART modülü oluşturdum.",
          "Modülü AXI4-Lite üzerinden MicroBlaze tabanlı gömülü sisteme entegre ederek donanım-yazılım bütünleşmesini tamamladım.",
          "Gömülü ortamlarda hata toleransını artırmak ve sürdürülebilirliği geliştirmek için uçtan uca veri işleme hatlarını optimize ettim."
        ]
      }
    ]
  },

  // Projects
  projects: {
    title: "Projeler",
    subtitle: "Gerçekleştirdiğim teknik projelerden bazıları",
    projectsList: [
      {
        projectName: "FleetRent – Yüksek Eşzamanlı Araç Kiralama ve Rezervasyon Sistemi",
        projectDesc:
          "ASP.NET Core ve PostgreSQL üzerinde yüksek eşzamanlılığa dayanıklı araç kiralama sistemi geliştirdim. Veritabanı seviyesinde SELECT FOR UPDATE ile pessimistic locking uygulayarak çakışan rezervasyon isteklerini engelledim ve concurrency kontrolü sağladım."
      },
      {
        projectName: "Gerçek Zamanlı Bildirim Sistemi",
        projectDesc:
          "React, Node.js ve WebSocket kullanarak gerçek zamanlı bir bildirim paneli geliştirdim. Exponential backoff otomatik yeniden bağlanma, server-side replay buffer ve lifecycle yönetimini custom hook mimarisiyle tasarladım."
      },
      {
        projectName: "Advanced Identity Auth API",
        projectDesc:
          "ASP.NET Core Identity ve PostgreSQL üzerine kurulu kimlik doğrulama API’si geliştirdim. Sistem; JWT auth, role-based yetki, refresh token rotation, token blacklisting, rate limiting ve OpenAPI/Scalar dokümantasyonunu içeriyor."
      },
      {
        projectName: "Advanced Offline Sync Service API",
        projectDesc:
          "React Native ve Express kullanarak çevrimdışı çalışabilen (offline-first) bir servis talep uygulaması geliştirdim. AsyncStorage ile verileri yerelde tutup, bağlantı geldiğinde otomatik arka plan senkronizasyonu sağladım."
      },
      {
        projectName: "LLM Tabanlı Siber Güvenlik Olgunluk Değerlendirme Aracı",
        projectDesc:
          "Kuruluşların siber güvenlik olgunluğunu ölçen yapay zekâ destekli bir değerlendirme aracı geliştirdim. Sistem, kullanıcıya dinamik sorular yönelterek cevapları analiz ediyor, sonraki adımları otomatik belirliyor ve sürecin sonunda görev listesi ile kapsamlı bir rapor üretiyor."
      },
      {
        projectName: "Yapay Zekâ Destekli Özgeçmiş Platformu OzBuild",
        projectDesc:
          "Kullanıcıların gerçek zamanlı olarak özgeçmiş oluşturmasını sağlayan yapay zekâ destekli bir platform geliştirdim. Sistem, dinamik içerik üretimi ve anlık güncellemeyle kullanıcı deneyimini önemli ölçüde kolaylaştırıyor."
      },
      {
        projectName: "OPIUM – Sosyal Medya / Etkinlik Uygulaması",
        projectDesc:
          "Kullanıcıların etkinlik oluşturup katılabildiği, gönderi paylaşabildiği ve gerçek zamanlı sohbet edebildiği çok platformlu bir sosyal medya uygulaması geliştirdim."
      },
      {
        projectName: "Öğrenci Yönetim Sistemi",
        projectDesc:
          "Öğrenci, ders ve sınav bilgilerinin yönetildiği; çok kriterli arama, sınav ekleme, ortalama hesaplama ve tamamlanan derslerin gösterimini sağlayan full-stack bir öğrenci yönetim sistemi geliştirdim."
      },
      {
        projectName: "Pseudo Etiketli Anahtar Nokta Tespiti & Feature Extraction (ML)",
        projectDesc:
          "Görüntülerde anahtar noktaları otomatik tespit edip anlamlı özellikler çıkaran bir yapay zekâ modeli geliştirdim. Sistem, görüntü eşleştirme ve sahne analizinde kullanılmak üzere optimize edildi."
      },
      {
        projectName: "Gebze – Çok Oyunculu 3D Hayatta Kalma Oyunu",
        projectDesc:
          "Takım çalışmasıyla geliştirilen bir 3D hayatta kalma oyununda, dövüş mekanikleri, düşman yapay zekâsı ve bölüm tasarımlarının oluşturulmasında görev aldım."
      },
      {
        projectName: "Akıllı Çevresel İzleme ve Kontrol Sistemi (Verilog, C)",
        projectDesc:
          "FPGA–MCU arasında çoklu sensör verilerini gerçek zamanlı işleyen ve çift yönlü haberleşmeyle kontrol sağlayan bir izleme sistemi tasarladım. Görsel ve işitsel uyarı mekanizmalarıyla gerçek zamanlı durum takibi sağlandı."
      },
      {
        projectName: "İşletim Sistemi ve CPU Simülatörü (Assembly, Python)",
        projectDesc:
          "Custom bir komut seti üzerinde çalışan bir CPU simülatörü ve temel bir işletim sistemi çekirdeği geliştirdim. CPU tarafında bellek yönetimi, kullanıcı/çekirdek modları ve syscall yapısını oluşturdum."
      }
    ]
  },

  // Contact
  contact: {
    title: "İletişim",
    subtitle: "Proje, iş fırsatı veya herhangi bir konuda iletişime geçebilirsiniz."
  },

  // Proficiency
  proficiency: {
    title: "Uzmanlık Düzeylerim"
  },

  // GitHub Profile
  github: {
    openForOpportunities: "İş fırsatlarına açık",
    yes: "Evet",
    no: "Hayır"
  },

  // Splash Screen
  splash: {
    loading: "Yükleniyor..."
  },

  // 404 Page
  notFound: {
    title: "404",
    subtitle: "Sayfa Bulunamadı",
    description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    button: "Ana Sayfaya Dön"
  },

  // Projects (GitHub)
  openSourceProjects: {
    title: "Açık Kaynak Projeler",
    moreProjects: "Daha Fazla Proje"
  },

  // Footer
  footer: {
    madeWith: "❤️ ile yapıldı",
    by: "Emre Yavuz tarafından"
  }
};
