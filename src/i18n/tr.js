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
      "Mobil uygulamalar, backend servisler ve gerçek zamanlı sistemler üzerinde uçtan uca ürünler geliştiriyorum. Özellikle mobil istemci, API tasarımı, veri akışı ve operasyonel olarak sürdürülebilir sistemler kurmaya odaklanıyorum.",
    resumeButton: "Özgeçmişimi İncele",
    contactButton: "İletişime Geç"
  },

  // Skills Section
  skills: {
    title: "Neler yapıyorum",
    subTitle:
      "Mobil ve backend odaklı, üretime çıkabilen ve gerçek kullanıcıya dokunan uygulamalar geliştiriyorum.",
    skillsList: [
      "⚡ Flutter ile mobil uygulama geliştirme, ölçeklenebilir ekran mimarisi ve sürdürülebilir kod yapısı",
      "⚡ Node.js/Express ile RESTful API geliştirme, doğrulama, yetkilendirme ve servis katmanı tasarımı",
      "⚡ MongoDB odaklı veri modelleme, sorgu optimizasyonu ve eş zamanlı işlem senaryolarında tutarlılık",
      "⚡ Gerçek zamanlı veri akışı, kuyruk yönetimi ve mobil-backend entegrasyonu",
      "⚡ CI/CD süreçleri, Docker tabanlı dağıtım ve otomatik test odaklı geliştirme",
      "⚡ Üretim izleme: loglama, metrik takibi ve hata ayıklamayı kolaylaştıran gözlemlenebilirlik altyapıları",
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
        role: "Mobil & Backend Geliştirici",
        company: "Synctaxi",
        date: "2025 – Devam Ediyor",
        desc: "Gerçek zamanlı taksi sıra yönetim platformunda mobil uygulama, backend API ve operasyon paneli taraflarında geliştirme yaptım.",
        descBullets: [
          "Node.js/Express ve MongoDB ile sürücü sırası, rezervasyon ve rol bazlı erişim için API servisleri geliştirdim.",
          "Yük altında tutarlılık için kuyruk işlemlerinde yarış durumlarını azaltan kilit/atomik işlem yaklaşımını uyguladım.",
          "Flutter mobil istemcide gerçek zamanlı sıra takibi ve kullanıcı akışlarını backend ile uyumlu hale getirdim.",
          "CI/CD hattında build, test, container publish ve güvenli deployment adımlarına katkı sağladım."
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
        projectName: "Akıllı Çevresel İzleme ve Kontrol Sistemi (Verilog, C)",
        projectDesc:
          "FPGA–MCU arasında çoklu sensör verilerini gerçek zamanlı işleyen ve çift yönlü haberleşmeyle kontrol sağlayan bir izleme sistemi tasarladım. Görsel ve işitsel uyarı mekanizmalarıyla gerçek zamanlı durum takibi sağlandı."
      },
      {
        projectName: "Öğrenci Yönetim Sistemi",
        projectDesc:
          "Öğrenci, ders ve sınav bilgilerinin yönetildiği; çok kriterli arama, sınav ekleme, ortalama hesaplama ve tamamlanan derslerin gösterimini sağlayan full-stack bir öğrenci yönetim sistemi geliştirdim."
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
