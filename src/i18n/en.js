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
      "I develop projects across various layers from mobile applications to backend services, from real-time systems to hardware-interfacing software. I enjoy working on both the visible side of systems and the details behind the scenes.",
    resumeButton: "Download Resume",
    contactButton: "Contact Me"
  },

  // Skills Section
  skills: {
    title: "What I Do",
    subTitle:
      "I build performant, scalable, and real-world solutions by combining hardware, system, and software layers.",
    skillsList: [
      "⚡ Mobile App Development: Flutter-based applications with device communication and real-time interaction",
      "⚡ Backend Development: RESTful APIs, database integration, and server architecture design",
      "⚡ System Programming: Multi-threaded applications with C/C++, synchronization, and performance optimization",
      "⚡ Embedded Systems: Microcontroller development, low-level programming, and hardware integration",
      "⚡ FPGA Digital Design: Module development with Verilog/VHDL, verification, and HW-SW integration",
      "⚡ Data & ML: Data processing, image processing, and machine learning projects with Python",
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
        desc: "Built a strong foundation in algorithms, software development principles, and hardware-based courses through English-medium computer engineering education at GTU.",
        descBullets: [
          "Developed projects and applications with C, C++, Java, and Python",
          "Gained project experience in mobile, web, and backend areas",
          "Worked on artificial intelligence, computer vision, and embedded systems"
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
    title: "Work Experience",
    experiences: [
      {
        role: "FPGA Design Intern",
        company: "TÜBİTAK BİLGEM",
        date: "July 2025 – August 2025",
        desc: "Designed, verified, and integrated a DO-254 compliant UART IP core using VHDL into a MicroBlaze-based embedded system.",
        descBullets: [
          "Designed a UART-based digital module using VHDL and verified the FSM structure with testbenches in ModelSim.",
          "Developed the module in Vivado; added oversampling and synchronizer for improved stability and reliability.",
          "Packaged the design with AXI4-Lite interface and integrated it into the MicroBlaze processor system.",
          "Wrote control software in C using SDK and completed loopback tests to validate the system on FPGA."
        ]
      },
      {
        role: "Mobile App / Communication Intern",
        company: "ORTEM Electronics",
        date: "January 2025 – February 2025",
        desc: "Developed a vehicle status simulation system that processes serial communication (UART/CAN) data through a Flutter-based mobile application.",
        descBullets: [
          "Implemented real-time connection and reconnection mechanisms on Android devices using the usb_serial library.",
          "Designed CAN frame parsing, data buffering, and packet integrity validation algorithms.",
          "Synchronized dashboard UI components (speed, odometer, gear, lights) with incoming CAN messages.",
          "Developed fault-tolerant algorithms to handle interruptions, packet loss, and data integrity issues.",
          "Structured the application following Flutter Clean Architecture principles for modularity and scalability."
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
        projectName: "OPIUM – Social Media / Event Application",
        projectDesc:
          "Developed a cross-platform social media application where users can create and join events, share posts, and chat in real-time."
      },
      {
        projectName: "Smart Environmental Monitoring and Control System (Verilog, C)",
        projectDesc:
          "Designed a monitoring system that processes multiple sensor data in real-time between FPGA and MCU through bidirectional communication. Implemented visual and auditory warning mechanisms for real-time status tracking."
      },
      {
        projectName: "Student Management System",
        projectDesc:
          "Developed a full-stack student management system for handling student, course, and exam data; featuring multi-criteria search, exam management, GPA calculation, and course history tracking."
      },
      {
        projectName: "Operating System and CPU Simulator (Assembly, Python)",
        projectDesc:
          "Developed a CPU simulator based on a custom instruction set and a basic operating system kernel. Implemented memory management, user/kernel mode separation, and syscall mechanisms."
      },
      {
        projectName: "Pide Shop Simulation (C, Multi-Threading)",
        projectDesc:
          "Built a restaurant simulation managing real-time order flow. Implemented mutex and condition variables to coordinate shared resources (oven, delivery) in a multi-threaded environment with cooks and couriers."
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
