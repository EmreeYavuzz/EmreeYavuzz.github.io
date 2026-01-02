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
      "Mobil uygulamalardan backend servislerine, gerçek zamanlı sistemlerden donanımla konuşan yazılımlara kadar farklı katmanlarda projeler geliştiriyorum. Sistemlerin hem görünen tarafıyla hem de perde arkasındaki detaylarıyla ilgilenmeyi seviyorum.",
    resumeButton: "Özgeçmişimi İncele",
    contactButton: "İletişime Geç"
  },

  // Skills Section
  skills: {
    title: "Neler yapıyorum",
    subTitle:
      "Donanım, sistem ve yazılım katmanlarını birlikte ele alarak; performanslı, ölçeklenebilir ve gerçek hayatta çalışan çözümler geliştiriyorum.",
    skillsList: [
      "⚡ Mobil uygulama geliştirme: Flutter tabanlı uygulamalar, cihazlarla veri alışverişi ve gerçek zamanlı iletişim",
      "⚡ Backend geliştirme: RESTful API'ler, veri tabanı entegrasyonu ve temel sunucu mimarileri",
      "⚡ Sistem programlama: C/C++ ile çok iş parçacıklı yapılar, senkronizasyon ve performans odaklı tasarım",
      "⚡ Gömülü sistemler: Mikrodenetleyici tabanlı geliştirme, düşük seviye programlama ve donanım entegrasyonu",
      "⚡ FPGA tabanlı dijital tasarım: Verilog/VHDL ile modül geliştirme, doğrulama ve donanım–yazılım bütünleşmesi",
      "⚡ Python ile veri işleme, görüntü işleme ve makine öğrenimi temelli projeler",
      "⚡ Farklı teknolojileri bir araya getirerek uçtan uca çalışan sistemler tasarlama"
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
        desc: "GTÜ'de İngilizce bilgisayar mühendisliği eğitimi alarak algoritmalar, yazılım geliştirme prensipleri ve donanım temelli derslerde güçlü bir temel oluşturdum.",
        descBullets: [
          "C, C++, Java ve Python ile projeler, uygulamalar geliştirdim",
          "Mobil, web ve backend alanlarında proje deneyimleri edindim",
          "Yapay zeka ve bilgisayarla görme, gömülü sistemlerle ilgili çalışmalar yaptım"
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
    title: "İş Tecrübeleri",
    experiences: [
      {
        role: "FPGA Tasarım Stajyeri",
        company: "TÜBİTAK BİLGEM",
        date: "Temmuz 2025 – Ağustos 2025",
        desc: "VHDL kullanarak DO-254 uyumlu UART IP çekirdeği tasarladım, doğruladım ve MicroBlaze tabanlı gömülü sisteme entegre ettim.",
        descBullets: [
          "VHDL kullanarak UART tabanlı bir dijital modül tasarladım ve FSM yapısını ModelSim'de testbench ile doğruladım",
          "Modülü Vivado'da geliştirdim; oversampling ve senkronizatör ekleyerek daha kararlı ve güvenilir çalışmasını sağladım.",
          "Daha sonra tasarımı AXI4-Lite arayüzüyle paketleyip MicroBlaze işlemcili sisteme entegre ettim.",
          "SDK'da C ile kontrol yazılımı yazıp loopback testlerini tamamlayarak sistemi FPGA üzerinde çalışır hale getirdim."
        ]
      },
      {
        role: "Mobil Uygulama / Haberleşme Stajyeri",
        company: "ORTEM Electronics",
        date: "Ocak 2025 – Şubat 2025",
        desc: "Flutter tabanlı mobil uygulama üzerinden seri haberleşme (UART/CAN) verilerini işleyen bir araç durum simülasyon sistemi geliştirdim.",
        descBullets: [
          "usb_serial kütüphanesi ile Android cihazlarda gerçek zamanlı bağlantı ve yeniden bağlanma mekanizmaları geliştirdim.",
          "CAN frame parsing, veri tamponlama ve paket bütünlüğü kontrol algoritmaları tasarladım.",
          "Gösterge paneli UI bileşenlerini (hız, odometre, vites, farlar) CAN mesajlarıyla senkronize ettim.",
          "Kesinti, paket kaybı ve veri bütünlüğü problemleri için hata toleranslı özel algoritmalar geliştirdim.",
          "Uygulamayı Flutter Clean Architecture prensipleriyle modüler ve ölçeklenebilir hale getirdim."
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
        projectName: "Akıllı Çevresel İzleme ve Kontrol Sistemi (Verilog, C)",
        projectDesc:
          "FPGA–MCU arasında çoklu sensör verilerini gerçek zamanlı işleyen ve çift yönlü haberleşmeyle kontrol sağlayan bir izleme sistemi tasarladım. Görsel ve işitsel uyarı mekanizmalarıyla gerçek zamanlı durum takibi sağlandı."
      },
      {
        projectName: "İşletim Sistemi ve CPU Simülatörü (Assembly, Python)",
        projectDesc:
          "Custom bir komut seti üzerinde çalışan bir CPU simülatörü ve temel bir işletim sistemi çekirdeği geliştirdim. CPU tarafında bellek yönetimi, kullanıcı/çekirdek modları ve syscall yapısını oluşturdum."
      },
      {
        projectName: "Pide Dükkanı Simülasyonu (C, Multi-Threading)",
        projectDesc:
          "Gerçek zamanlı sipariş akışını yöneten bir restoran simülasyonu geliştirdim. Aşçı ve kuryelerin çoklu thread yapısıyla çalıştığı sistemde fırın ve teslimat gibi paylaşılan kaynakları mutex ve condition variable ile yönettim."
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
