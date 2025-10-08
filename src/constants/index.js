const navLinks = [
  
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
 {
    name: "Resume",
    id: "resume-trigger", // Use a special ID to trigger the modal
    link: "/images/project/resumesuyog.pdf", // The path is still needed for the PDF source
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Learning React Native" }, // your learning experience
  { value: 11, suffix: "+", label: "Projects Built" }, // personal or practice projects
  { value: 2, suffix: "+", label: "Internship Completed" }, // The Skill Guru Foundation
  { value: 3, suffix: "+", label: "Technologies Learned" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Native Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },

  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Native Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, -Math.PI / 1, 0],
  },
  {
    name: "Flutter Developer",
    modelPath: "/models/Flutter.glb",
    scale: 23.5,

    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,

    rotation: [0, -Math.PI / 4, 0],
  },

  // {
  //   name: "Backend Developer",
  //   modelPath: "/models/node-transformed.glb",
  //   scale: 5,
  //   rotation: [0, -Math.PI / 2, 0],
  // },
  {
    name: "iOS Developer",
    modelPath: "/models/ios.glb",
    scale: 3.05,
    rotation: [0, 0, 0],
    position: [0, -2.6, 0], // 👈 Move it down (try -1.2 to -2)
  },
  {
    name: "Android Developer",
    modelPath: "/models/android.glb",
    scale: 2.5,
    rotation: [0, Math.PI / 8, 0],
    position: [0, -2.3, 0],
  },
  {
    name: "Web APP Developer",
    modelPath: "/models/web.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Project Manager",
  //   modelPath: "/models/git-svg-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, -Math.PI / 4, 0],
  // },
];

const expCards = [
  // {
  //   review:
  //     "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  //   imgPath: "/images/exp1.png",
  //   logoPath: "/images/logo1.png",
  //   title: "Frontend Developer",
  //   date: "January 2023 - Present",
  //   responsibilities: [
  //     "Developed and maintained user-facing features for the Hostinger website.",
  //     "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
  //     "Optimized web applications for maximum speed and scalability.",
  //   ],
  // },
  // {
  //   review:
  //     "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review:
  //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },

  {
    review:
      "Currently interning at Hastern Solution as a React Native Developer, contributing to real mobile apps and mastering advanced React Native skills.",
    imgPath: "/images/hastern.png", // Company/project image
    logoPath: "/images/REACTNATIVE.png", // Hastern Solution logo
    title: "React Native Developer (Internship)",
    date: "July 2025 - Present",
    responsibilities: [
      "Developing professional mobile applications using React Native for Android and iOS.",
      "Implementing interactive UI components and animations.",
      "Collaborating with senior developers to follow best practices.",
      "Focusing on mastering advanced React Native techniques.",
    ],
  },
  {
    review:
      "Completed internship at Skill Guru Foundation, building UI screens using Jetpack Compose & Kotlin, gaining hands-on mobile app experience.",
    imgPath: "/images/skillguru.png",
    logoPath: "/images/Android.png",
    title: "Mobile App Developer (Internship)",
    date: "Aug 2024 - Sep 2024",
    responsibilities: [
      "Built UI screens and layouts using Jetpack Compose & Kotlin.",
      "Learned mobile app architecture and component reusability.",
      "Assisted in testing and refining app features.",
    ],
  },
  {
    review:
      "Developed open-source React Native library and personal projects to enhance skills in mobile development, Flutter, and iOS development.",
    logoPath: "/images/ios.png",
    imgPath: "/images/github.png",
    title: "React Native & Flutter Projects",
    date: "2024 - Present",
    responsibilities: [
      "Published 'react-native-granular-date-picker' library on NPM.",
      "Built personal projects using React Native and Flutter for Android and iOS.",
      "Focused on mastering React Native & Flutter concepts and advanced features.",
      "Experimenting with UI, state management, and animations in real projects.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Varun R. Shastri",
    mentions: "Mentor @Skill Guru Foundation",
    review:
      "Suyog showed great enthusiasm during his internship. He quickly grasped Jetpack Compose & Kotlin and built clean, functional UI screens.",
    imgPath: "/images/skillguru.png",
  },

  {
    name: "AquaAlert Users",
    mentions: "Play Store App",
    review:
      "AquaAlert is a well-designed and useful app. The notifications and reminders work perfectly, and the app interface is smooth and user-friendly. Great work by Suyog!",
    imgPath: "/images/aquaalert.png", // App logo or screenshot
  },
  {
    name: "Suyog’s College Project Guide",
    mentions: "Web App Development",
    review:
      "Suyog consistently demonstrates curiosity and dedication. His projects show strong understanding of React Native, Flutter, and web development basics.",
    imgPath: "/images/amritaa.png",
  },
  {
    name: "NPM Community",
    mentions: "react-native-granular-date-picker",
    review:
      "Suyog’s library is well-documented, easy to integrate, and helped us implement a custom date picker quickly in our apps. Very professional work!",
    imgPath: "/images/npm.png",
  },
  {
    name: "AquaAlert Beta Users",
    mentions: "Early Access Feedback",
    review:
      "The app is very intuitive and reliable. Notifications and reminders never miss, and the design is clean. Great work by Suyog in making it user-friendly!",
    imgPath: "/images/aquaalert.png",
  },
  {
    name: "Flutter Mini Projects Users",
    mentions: "Learning & Practice",
    review:
      "Suyog’s Flutter projects are fun, interactive, and smooth. The animations and responsive UI make them enjoyable to use. Shows strong understanding of cross-platform development.",
    imgPath: "/images/flutter.png",
  },
  {
    name: "Professional Recognition",
    mentions: "Tutedude – React Native & Flutter",
    review:
      "Suyog is an exceptionally talented and dedicated developer. He has strengthened his skills through hands-on learning from Tutedude, in addition to practical experience building React Native and Flutter apps. His work demonstrates a rare combination of creativity, technical skill, and attention to detail. From polished mobile apps to open-source contributions, Suyog consistently delivers high-quality, user-friendly solutions. His ability to learn quickly, adapt to new technologies, and tackle complex problems makes him stand out as a rising star in the development community.",
    imgPath: "/images/star.png",
  },

  // {
  //   name: "Hastern Solution Team",
  //   mentions: "React Native Internship",
  //   review:
  //     "Suyog has been contributing effectively to our React Native projects. He is learning quickly, writing clean code, and implementing UI features efficiently.",
  //   imgPath: "/images/client1.png",
  // },
  // {
  //   name: "Esther Howard",
  //   mentions: "@estherhoward",
  //   review:
  //     "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  //   imgPath: "/images/client1.png",
  // },
  // {
  //   name: "Wade Warren",
  //   mentions: "@wadewarren",
  //   review:
  //     "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  //   imgPath: "/images/client3.png",
  // },
  // {
  //   name: "Guy Hawkins",
  //   mentions: "@guyhawkins",
  //   review:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   imgPath: "/images/client2.png",
  // },
  // {
  //   name: "Marvin McKinney",
  //   mentions: "@marvinmckinney",
  //   review:
  //     "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "Floyd Miles",
  //   mentions: "@floydmiles",
  //   review:
  //     "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "Albert Flores",
  //   mentions: "@albertflores",
  //   review:
  //     "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
  //   imgPath: "/images/client6.png",
  // },
];

const socialImgs = [
  {
    name: "git",
    imgPath: "/images/github.png",
    url: "https://github.com/suyogshejal2004",
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/suyog-shejal-8637a3316",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

export const projects = [
  {
    id: 1,
    title: "React Native Granular Date Picker",
    description:
      "A highly customizable date picker component for React Native apps, supporting day, month, and year selection with full styling options.",
    image: "/images/project/GranularDatePicker.png", // Updated with your actual screenshot
    category: "npm",
    tech: ["React Native", "TypeScript", "NPM"],
    date: "2025",
    featured: true,
    priority: 1,
    responsibilities: [
      "Published and maintained the NPM package react-native-granular-date-picker",
      "Created reusable date picker components with full TypeScript support",
      "Implemented customization options for colors, fonts, and layouts",
      "Provided callbacks for select, confirm, and cancel actions",
      "Wrote detailed documentation and usage examples",
    ],
    githubLink:
      "https://github.com/suyogshejal2004/react-native-granular-date-picker",
    npmLink: "https://www.npmjs.com/package/react-native-granular-date-picker",
  },
   {
    id: 10,
    title: "AquaAlert",

    description:
      "A mobile app to monitor and manage water quality and usage alerts. Built with React Native for cross-platform support and features push notifications to keep users informed.",
    image: "/images/project/AquaAlert.png", // Replace with your actual screenshot
    category: "react-native",
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "Push Notifications",
      "AsyncStorage",
    ],
    date: "2025",
    featured: true,
    priority: 1,
    responsibilities: [
      "Developed a cross-platform mobile app using React Native and Expo",
      "Integrated Firebase for push notifications and real-time updates",
      "Designed intuitive UI for monitoring water quality and usage alerts",
      "Implemented local storage using AsyncStorage for offline data caching",
      "Tested the app thoroughly and published on Google Play Store",
    ],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.suyogshejal.aquaalert",
  },{
    id: 2,
    title: "Ujjwalgram",
    description:
      "A privacy-focused company mobile app built with React Native. The app prioritizes user data security and features multiple modules. Frontend developed entirely by me. Code is private due to company confidentiality.",
    image: "/images/project/Ujjwalgram.png", // Replace with your actual screenshot
    category: "react-native",
    tech: [
      "React Native",
      "Expo",
      "React Navigation",
      "AsyncStorage",
      "LinearGradient",
      "Responsive UI",
    ],
    date: "2025",
    featured: true,
    responsibilities: [
      "Developed the complete frontend of the app using React Native",
      "Implemented multiple modules with secure navigation and responsive UI",
      "Designed interactive screens keeping user experience intuitive",
      "Optimized app performance across multiple devices",
      "Ensured privacy and data security in all functionalities",
    ],
    githubLink:
      "https://github.com/suyogshejal2004/ujjwalgram_hastern2/blob/main/README.md", // No public code due to privacy
    // playStoreLink: "" // No link as app is private / internal
  },
   {
    id: 11,
    title: "Pagariya",
    description:
      "A comprehensive B2B mobile app for dealers and millers. Built with React Native, featuring user authentication, product selection, inventory management, and messaging system. Frontend developed entirely by me. Code is private due to company confidentiality.",
    image: "/images/project/Pagariya.png", // Replace with your actual screenshot
    category: "react-native",
    tech: [
      "React Native",
      "Expo",
      "LinearGradient",
      "DropDownPicker",
      "FlatList",
      "Responsive UI",
    ],
    date: "2025",
    featured: true,
    responsibilities: [
      "Developed the complete frontend of the app using React Native",
      "Implemented splash screen, onboarding, login, and tab navigation",
      "Created dynamic user selection and inventory management screens",
      "Integrated editable message composer and product stock management",
      "Designed responsive and intuitive UI for multiple devices",
      "Ensured smooth navigation and interactive user experience",
    ],
    githubLink:
      "https://github.com/suyogshejal2004/pagariyahastern1/blob/main/README.md",
    // playStoreLink: "" // No link as app is private / internal
  },
  {
    id: 12,
    title: "React Native Game App",
    description:
      "A simple mobile game built using React Native and Expo, showcasing clean UI components, screen navigation, and modular code. Great for learning React Native development.",
    image: "/images/project/ReactNativeGame.png", // Add a screenshot of your app
    category: "react-native",
    tech: ["React Native", "Expo", "React Navigation"],
    date: "2025",
    featured: false,
    responsibilities: [
      "Developed modular and reusable components for gameplay screens",
      "Implemented navigation between start, gameplay, and game-over screens",
      "Applied consistent color theme using centralized constants",
      "Optimized performance using React Native core components",
    ],
    githubLink: "https://github.com/suyogshejal2004/Guess_The_Number",
  },
  {
    id: 3,
    title: "React Native Expense Tracker",
    description:
      "A simple React Native Expense Tracker built with Expo. Keep track of your daily expenses with an easy-to-use interface. No backend required — all data is stored locally using AsyncStorage.",
    image: "/images/project/ExpenseTracker.png", // Add a screenshot of your app
    category: "react-native",
    tech: [
      "React Native",
      "Expo",
      "AsyncStorage",
      "React Native Elements",
      "Lottie",
    ],
    date: "2025",
    featured: false,
    responsibilities: [
      "Implemented local storage with AsyncStorage to store expenses",
      "Created screens to add, edit, and delete expenses",
      "Categorized expenses for easier tracking",
      "Designed a clean and responsive UI for mobile devices",
    ],
    githubLink: "https://github.com/suyogshejal2004/expense_Tracker_Tutedude_3",
    sampleLogin: {
      email: "test@example.com",
      password: "123456",
      note: "No Firebase or backend required — login is purely for demo purposes.",
    },
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built using React Native and JavaScript. Play against a friend on the same device with a clean, interactive UI.",
    image: "/images/project/FirebaseAuthApp.png", // Replace with your actual screenshot path
    category: "react-native",
    tech: ["React Native", "JavaScript"],
    featured: false,
    responsibilities: [
      "Developed interactive Tic Tac Toe gameplay with win/draw detection",
      "Implemented two-player mode on the same device",
      "Designed clean and responsive UI with visual feedback",
      "Maintained game state using React state hooks",
      "Optimized for both Android and iOS devices",
    ],
    date: "2024",
    githubLink: "https://github.com/suyogshejal2004/Tutedude-tic-tac-toe",
  },
  {
    id: 5,
    title: "Job Search App",
    description:
      "A modern React Native app for browsing, viewing, and bookmarking job listings with an intuitive UI.",
    image: "/images/project/JobSearchApp.png", // Add a screenshot of your app
    category: "react-native",
    tech: [
      "React Native",
      "Expo",
      "React Navigation",
      "AsyncStorage",
      "Axios",
      "React Native Paper",
    ],
    date: "2024",
    featured: false,
    responsibilities: [
      "Implemented paginated job listings from an external API",
      "Created detailed job info screens (location, salary, shift, etc.)",
      "Added local bookmark functionality using AsyncStorage",
      "Integrated bottom tab navigation for Jobs and Bookmarks",
      "Added shimmer loading placeholders and graceful error handling",
      "Enabled direct contact with employers via phone or WhatsApp",
    ],
    githubLink: "https://github.com/suyogshejal2004/Job-App/tree/main",
  },
  {
    id: 6,
    title: "MovieFlix – Movie Booking App",
    description:
      "A feature-rich React Native application for exploring, booking, and managing movie tickets, integrated with Firebase and OMDB API for real-time data.",
    image: "/images/project/MovieFlix.png", // Add a main screenshot of your app
    category: "react-native",
    tech: [
      "React Native",
      "Firebase",
      "React Navigation",
      "Axios",
      "AsyncStorage",
      "Lottie",
      "React Native Linear Gradient",
      "React Native Vector Icons",
      "React Native WebView",
    ],
    date: "2025",
    featured: true,
    responsibilities: [
      "Implemented Firebase authentication (Email/Password and Google Sign-In)",
      "Integrated Firestore for user profiles and booking data",
      "Fetched dynamic movie data from the OMDB API",
      "Developed onboarding flow with genre-based personalization",
      "Designed sleek dark-themed UI with gradients and animations",
      "Added in-app YouTube trailer playback using react-native-webview",
      "Created interactive seat selection and booking flow",
      "Built responsive layouts using react-native-responsive-ui",
      "Used Lottie animations for smooth transitions and loaders",
      "Managed session persistence with AsyncStorage",
    ],
    githubLink: "https://github.com/suyogshejal2004/movie-booking-app",
    youtubeLink: "https://youtu.be/-GLg-MrkIT4?si=q0PZ602e4vZBm5_E",
  },
  {
    id: 7,
    title: "Coding Learning App",
    description:
      "A mobile application built with React Native CLI for learning coding. Currently includes onboarding and authentication UI screens.",
    image: "/images/project/CodingLearningApp.png", // Add a screenshot/banner of your app
    category: "react-native",
    tech: [
      "React Native CLI",
      "JavaScript / TypeScript",
      "React Navigation",
      "Vector Icons",
      "Async Storage",
    ],
    date: "2025",
    featured: false,
    responsibilities: [
      "Designed Splash Screen, Onboarding screens, and Authentication UI",
      "Implemented Login, Signup, and Forgot Password flows (UI only)",
      "Structured project for scalability and reusable components",
      "Set up navigation between screens using React Navigation",
      "Prepared AsyncStorage for future local data persistence",
    ],
    githubLink: "https://github.com/suyogshejal2004/Zero2CodePRoject",
  },
  {
    id: 9,
    title: "Grocery App",
    description:
      "A modern, cross-platform React Native app for online grocery shopping. Browse products, manage your cart, and track orders with a smooth UI and hidden gesture-based delivery login.",
    image: "/images/project/GroceryApp.png", // Replace with your actual screenshot
    category: "react-native",
    tech: [
      "React Native",
      "React Navigation",
      "Axios",
      "React Context API / Redux",
      "Lottie",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    date: "2025",
    featured: true,
    responsibilities: [
      "Developed a cross-platform mobile app with React Native",
      "Built a backend API using Node.js, Express, and MongoDB",
      "Implemented product listing, search, cart, checkout, and order tracking features",
      "Integrated Lottie animations for smooth UI effects",
      "Added gesture-based cheat code to unlock delivery partner login",
      "Managed app state using React Context API / Redux",
      "Ensured responsive design and theme support for light/dark mode",
    ],
    githubLink: "https://github.com/suyogshejal2004/Grocery_App",
    demoVideoLink: "https://youtu.be/your-demo-video-link",
  },
 
 
  
];
