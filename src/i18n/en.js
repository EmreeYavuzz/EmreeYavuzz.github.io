/* English translation file */

export const en = {
  // Header Menu
  menu: {
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    openSource: "Open Source",
    achievements: "Achievements",
    blogs: "Blogs",
    talks: "Talks",
    resume: "Resume",
    contact: "Contact"
  },

  // Greeting Section
  greeting: {
    title: "Hi, I'm Emre 👋",
    subTitle:
      "I build end-to-end products across mobile applications, backend services, and real-time systems. My core focus is mobile client development, API design, reliable data flow, and operationally sustainable systems.",
    resumeButton: "Download Resume",
    contactButton: "Contact Me"
  },

  // Skills Section
  skills: {
    title: "What I Do",
    subTitle:
      "I build production-ready mobile and backend solutions focused on reliability, scalability, and real users.",
    skillsList: [
      "⚡ Mobile Development with Flutter: scalable UI architecture and maintainable app structure",
      "⚡ Backend Development with Node.js/Express: REST APIs, validation, authorization, and service-layer design",
      "⚡ MongoDB-Centric Data Design: indexing, query optimization, and consistency in concurrent operations",
      "⚡ Real-Time Data Flows: queue management patterns and robust mobile-backend integration",
      "⚡ CI/CD and Container Delivery: Docker-based deployment pipelines with automated testing",
      "⚡ Production Observability: MongoDB metrics, Grafana dashboards, logs, and trace-friendly monitoring",
      "⚡ Firebase Integrations: notifications, auth, and real-time service integrations",
      "⚡ Tailscale Networking: secure service access across development and deployment environments",
      "⚡ System Integration: Building end-to-end solutions by combining different technologies"
    ]
  },

  // Education Section
  education: {
    title: "Education",
    schools: [
      {
        schoolName: "Gebze Technical University",
        subHeader: "Computer Engineering (English)",
        duration: "September 2020 - September 2025",
        desc: "Built a strong foundation in algorithms, software architecture, data structures, and system design through the English-medium computer engineering program at GTU, while turning theory into practical products in team projects.",
        descBullets: [
          "Developed both individual and team-based software projects with C, C++, Java, and Python.",
          "Gained end-to-end product development experience across mobile, web, and backend domains.",
          "Applied database design, API architecture, and test-driven engineering practices in coursework and projects.",
          "Worked on model development and evaluation pipelines in AI and computer vision classes.",
          "Strengthened my understanding of real-time systems, concurrency, and performance-oriented software design.",
          "Improved technical communication, documentation, and project planning through multidisciplinary teamwork."
        ]
      },
      {
        schoolName: "Esenyurt Anatolian High School",
        subHeader: "",
        duration: "September 2015 - June 2019",
        desc: "YKS 2020 Quantitative Ranking: 8,438.",
        descBullets: []
      }
    ]
  },

  // Tech Stack / Proficiency
  techStack: {
    experience: [
      {Stack: "English", progressPercentage: "80%"},
      {Stack: "Programming / Algorithm", progressPercentage: "90%"},
      {Stack: "Communication & Teamwork", progressPercentage: "100%"}
    ]
  },

  // Work Experience
  workExperience: {
    title: "Experience",
    workTitle: "Work Experience",
    internshipTitle: "Internship Experience",
    workItems: [
      {
        role: "Mobile & Backend Developer",
        company: "SyncTaxi",
        date: "2025 – Present",
        desc: "Contributed to a real-time taxi queue platform across mobile app, backend APIs, and operator-facing workflows.",
        descBullets: [
          "Developed Node.js/Express + MongoDB services for driver queue flow, reservations, and role-based access.",
          "Implemented concurrency-safe queue operations using lock/atomic-operation approaches under high traffic.",
          "Improved Flutter mobile flows for real-time queue tracking and synchronized app behavior with backend services.",
          "Contributed to Google Play testing, release readiness checks, and production rollout support.",
          "Supported CI/CD stages including build, test, container publish, and controlled deployments."
        ]
      }
    ],
    internshipItems: [
      {
        role: "Mobile App / Communication Intern",
        company: "ORTEM Electronics",
        date: "January 2025 – February 2025",
        desc: "Developed a Flutter-based communication application on Android capable of reading CAN data over USB-Serial.",
        descBullets: [
          "Tested multiple libraries for baud-rate handling and endpoint configuration to ensure hardware-software compatibility.",
          "Designed CAN frame parsing, byte-level processing, buffering, and packet integrity validation algorithms.",
          "Separated the app into Clean Architecture layers to build a testable and maintainable structure.",
          "Used Docklight and CAN Debugger for troubleshooting and achieved more reliable real-time CAN flow with reduced data loss."
        ]
      },
      {
        role: "FPGA Design Intern",
        company: "TÜBİTAK BİLGEM",
        date: "July 2025 – August 2025",
        desc: "Designed scalable digital architectures using VHDL and Vivado; developed state machines and automated testbenches.",
        descBullets: [
          "Built a UART module with oversampling and metastability protection for reliable real-time data transmission.",
          "Integrated the module into a MicroBlaze-based embedded system over AXI4-Lite, completing hardware-software integration.",
          "Optimized end-to-end data processing pipelines in embedded environments to improve fault tolerance and sustainability."
        ]
      }
    ]
  },

  // Projects
  projects: {
    title: "Projects",
    subtitle: "Some of the technical projects I've completed",
    projectsList: [
      {
        projectName: "FleetRent – High-Concurrency Rental Reservation System",
        projectDesc:
          "Developed a high-concurrency vehicle rental system using ASP.NET Core and PostgreSQL. Implemented database-level pessimistic locking with SELECT FOR UPDATE to handle overlapping reservation requests and ensure transaction safety."
      },
      {
        projectName: "Real-Time Notification System",
        projectDesc:
          "Developed a real-time notification system using React, Node.js, and WebSockets. Implemented automatic reconnection with exponential backoff, a server-side event replay buffer, and custom hook-based connection lifecycle management."
      },
      {
        projectName: "Advanced Identity Auth API",
        projectDesc:
          "Developed a production-oriented authentication API built on ASP.NET Core Identity and PostgreSQL. Features JWT-based auth, role-based authorization, refresh token rotation, rate limiting, and OpenAPI/Scalar documentation."
      },
      {
        projectName: "Advanced Offline Sync Service API",
        projectDesc:
          "Developed an offline-first service request application using React Native and Express. Persists data locally with AsyncStorage during offline periods and automatically synchronizes records when connectivity is restored."
      },
      {
        projectName: "LLM-Based Cybersecurity Maturity Assessment Tool",
        projectDesc:
          "Developed an AI-powered assessment tool that evaluates organizational cybersecurity maturity. The system dynamically generates questions, analyzes responses, determines next steps automatically, and produces a comprehensive report with actionable tasks."
      },
      {
        projectName: "AI-Powered Resume Platform OzBuild",
        projectDesc:
          "Developed an AI-powered platform enabling users to create resumes in real-time. Enhanced user experience through dynamic content generation and instant preview updates."
      },
      {
        projectName: "OPIUM – Social Media / Event Application",
        projectDesc:
          "Developed a cross-platform social media application where users can create and join events, share posts, and chat in real-time."
      },
      {
        projectName: "Student Management System",
        projectDesc:
          "Developed a full-stack student management system for handling student, course, and exam data; featuring multi-criteria search, exam management, GPA calculation, and course history tracking."
      },
      {
        projectName: "Pseudo-Labeled Keypoint Detection & Feature Extraction (ML)",
        projectDesc:
          "Developed an AI model for automatic keypoint detection and feature extraction in images. Optimized the system for image matching and scene analysis applications."
      },
      {
        projectName: "Gebze – Multiplayer 3D Survival Game",
        projectDesc:
          "Contributed to a team-developed 3D survival game, implementing combat mechanics, enemy AI behavior, and level designs."
      },
      {
        projectName: "Smart Environmental Monitoring and Control System (Verilog, C)",
        projectDesc:
          "Designed a monitoring system that processes multiple sensor data in real-time between FPGA and MCU through bidirectional communication. Implemented visual and auditory warning mechanisms for real-time status tracking."
      },
      {
        projectName: "Operating System and CPU Simulator (Assembly, Python)",
        projectDesc:
          "Developed a CPU simulator based on a custom instruction set and a basic operating system kernel. Implemented memory management, user/kernel mode separation, and syscall mechanisms."
      }
    ]
  },

  // Contact
  contact: {
    title: "Contact",
    subtitle: "Feel free to reach out for projects, job opportunities, or any inquiries!"
  },

  // Proficiency
  proficiency: {
    title: "Proficiency"
  },

  // GitHub Profile
  github: {
    openForOpportunities: "Open for opportunities",
    yes: "Yes",
    no: "No"
  },

  // Splash Screen
  splash: {
    loading: "Loading..."
  },

  // 404 Page
  notFound: {
    title: "404",
    subtitle: "Page Not Found",
    description: "The page you are looking for doesn't exist or has been moved.",
    button: "Go to Home"
  },

  // Projects (GitHub)
  openSourceProjects: {
    title: "Open Source Projects",
    moreProjects: "More Projects"
  },

  // Footer
  footer: {
    madeWith: "Made with ❤️",
    by: "by Emre Yavuz"
  }
};
