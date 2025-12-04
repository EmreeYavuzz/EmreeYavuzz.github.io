/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Emre Yavuz",
  title: "Merhaba, Ben Emre Yavuz",
  subTitle: 
  "Mobil, web ve backend tarafında projeler geliştirdim; yapay zeka, görüntü işleme ve gerçek zamanlı sistemler üzerine çalışmalar yaptım. Son dönemde ağırlıklı olarak gömülü sistemler, C programlama ve mikrodenetleyici tabanlı düşük seviye yazılımla ilgileniyorum.",
	
  resumeLink: "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rlueer",
  linkedin: "https://www.linkedin.com/in/emre-yavuz-4b849a18b",
  gmail: "emreyavuzz2001@gmail.com",
  instagram:  "https://www.instagram.com/mr_yvz01/",
  letterboxd: "http://boxd.it/ewOy9",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Neler yapıyorum",
  subTitle: "Gömülü sistemler, FPGA tabanlı dijital tasarım ve düşük seviye yazılım",
  skills: [
    emoji("⚡ VHDL/Verilog ile FPGA üzerinde sayısal tasarım ve testbench doğrulama"),
    emoji("⚡ UART / SPI / I²C gibi protokollerle düşük seviye haberleşme"),
    emoji("⚡ Gerçek zamanlı (RTOS) ve gömülü C/C++ ile sürücü/ara katman geliştirme"),
    emoji("⚡ Vivado, ModelSim ve logic analyzer ile donanım–yazılım debug")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gebze Teknik Üniversitesi",
      logo: require("./assets/images/gtulogo.png"),
      subHeader: "Bilgisayar Mühendisliği (İngilizce)",
      duration: "Eylül 2020 - Eylül 2025",
      desc:
		  "GTÜ’de İngilizce bilgisayar mühendisliği eğitimi alarak algoritmalar, yazılım geliştirme prensipleri ve donanım temelli derslerde güçlü bir temel oluşturdum.",
		descBullets: [
		  "C, C++, Java ve Python ile projeler,uygulamalar geliştirdim",
		  "Mobil, web ve backend alanlarında proje deneyimleri edindim",
		  "Yapay zeka ve bilgisayarla görme, gömülü sistemlerle ilgili çalışmalar yaptım"
		]
    },
    {
      schoolName: "Esenyurt Anadolu lisesi",
      logo: require("./assets/images/eal.png"),
      subHeader: "",
      duration: "Eylül 2015 - Haziran 2019",
      desc: "YKS 2020 Sayısal Sıralaması: 8.438.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
	{
      Stack: "İngilizce",
      progressPercentage: "80%"
    },
    {
      Stack: "Programlama / Algoritma",
      progressPercentage: "90%"
    },
    {
      Stack: "İletişim ve Ekip Çalışması",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "FPGA Tasarım Stajyeri",
      company: "TÜBİTAK BİLGEM",
      companylogo: require("./assets/images/tubitaklogo.png"),
      date: "Temmuz 2025 – Ağustos 2025",
      desc: "VHDL kullanarak DO-254 uyumlu UART IP çekirdeği tasarladım, doğruladım ve MicroBlaze tabanlı gömülü sisteme entegre ettim.",
      descBullets: [
        "VHDL kullanarak UART tabanlı bir dijital modül tasarladım ve FSM yapısını ModelSim’de testbench ile doğruladım",
		"Modülü Vivado’da geliştirdim; oversampling ve senkronizatör ekleyerek daha kararlı ve güvenilir çalışmasını sağladım.",
		"Daha sonra tasarımı AXI4-Lite arayüzüyle paketleyip MicroBlaze işlemcili sisteme entegre ettim.",
		"SDK’da C ile kontrol yazılımı yazıp loopback testlerini tamamlayarak sistemi FPGA üzerinde çalışır hale getirdim.",
      ]
    },
    {
      role: "Mobil Uygulama / Haberleşme Stajyeri",
      company: "ORTEM Electronics",
      companylogo: require("./assets/images/ortemlogo.png"),
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
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projeler",
  subtitle: "SOME",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]	
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("İletişim"),
  subtitle:
  "Proje, iş fırsatı veya herhangi bir konuda iletişime geçebilirsiniz.",
  number: "",
  email_address: "emreyavuzz2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
