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
      "⚡ Üretim izleme: MongoDB metrikleri, Grafana panelleri, loglama ve hata ayıklama odaklı gözlemlenebilirlik",
      "⚡ Firebase ile bildirim/kimlik/gerçek zamanlı veri ihtiyaçlarına yönelik servis entegrasyonları",
      "⚡ Tailscale ile güvenli servis erişimi ve geliştirme/dağıtım ortamları arasında güvenli ağ bağlantısı",
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
        role: "Mobil & Backend Geliştirici",
        company: "Synctaxi",
        date: "2025 – Devam Ediyor",
        desc: "Gerçek zamanlı taksi sıra yönetim platformunda mobil uygulama, backend API ve operasyon paneli taraflarında geliştirme yaptım.",
        descBullets: [
          "Node.js/Express ve MongoDB ile sürücü sırası, rezervasyon ve rol bazlı erişim için API servisleri geliştirdim.",
          "Yük altında tutarlılık için kuyruk işlemlerinde yarış durumlarını azaltan kilit/atomik işlem yaklaşımını uyguladım.",
          "Flutter mobil istemcide gerçek zamanlı sıra takibi ve kullanıcı akışlarını backend ile uyumlu hale getirdim.",
          "Google Play test, sürüm doğrulama ve release süreçlerinde yayın öncesi kalite adımlarına katkı sağladım.",
          "CI/CD hattında build, test, container publish ve güvenli deployment adımlarına katkı sağladım."
        ]
      }
    ],
    internshipItems: [
      {
        role: "Mobil Uygulama / Haberleşme Stajyeri",
        company: "ORTEM Electronics",
        date: "Ocak 2025 – Şubat 2025",
        desc: "Flutter tabanlı mobil uygulamada UART/CAN veri akışını işleyen araç durumu simülasyon sistemi geliştirdim.",
        descBullets: [
          "usb_serial ile Android tarafında gerçek zamanlı bağlantı ve otomatik yeniden bağlanma akışlarını yönettim.",
          "CAN frame ayrıştırma, byte-level parsing, veri tamponlama ve paket bütünlüğü kontrol algoritmaları geliştirdim.",
          "Gösterge paneli (hız, odometre, vites, far) bileşenlerini CAN mesajlarıyla eş zamanlı senkronize ettim.",
          "Paket kaybı ve kesinti durumlarında sistemin kararlı kalması için hata toleranslı veri işleme yapısı kurdum.",
          "Uygulamayı Clean Architecture prensipleriyle modüler, test edilebilir ve sürdürülebilir hale getirdim."
        ]
      },
      {
        role: "FPGA Tasarım Stajyeri",
        company: "TÜBİTAK BİLGEM",
        date: "Temmuz 2025 – Ağustos 2025",
        desc: "Dijital tasarım geliştirme, doğrulama ve entegrasyon süreçlerinde ekip içinde aktif görev aldım.",
        descBullets: [
          "VHDL ve Vivado kullanarak testbench destekli modül doğrulama süreçlerinde çalıştım.",
          "AXI4-Lite tabanlı entegrasyon ve gömülü sistem bağlantı adımlarında geliştirme ekibine destek oldum.",
          "SDK tarafındaki kontrol akışları ve loopback testleriyle modül davranışının doğrulanmasına katkı sağladım."
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
