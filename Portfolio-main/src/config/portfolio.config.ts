export const portfolioConfig = {
  // Basic Information
  name: "Eslam Mahmoud",
  title: "Software Engineer",
  description: "I am a Passionate Software Developer",
  location: "Egypt",

  // Contact Information
  email: "Essdev942@gmail.com",

  // Social Media Links
  socialLinks: {
    facebook: "",
    twitter: "https://twitter.com/ess942",
    linkedin: "https://www.linkedin.com/in/eslam-mahmoud-b10354409",
    external: "",
    github: "https://github.com/ess942",
  },

  // SEO Information
  seo: {
    ogImage: "/og-image.png",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wep-2.vercel.app/",
    twitterHandle: "@ess942",
    keywords: [
      "eslam",
      "mahmoud",
      "Eslam",
      "Mahmoud",
      "Eslam Mahmoud",
      "eslam mahmoud",
      "eslammahmoud",
      "portfolio",
      "web developer",
      "web",
      "web dev",
      "developer",
      "software engineer",
      "website",
      "@ess942",
    ],
    authors: [
      {
        name: "Eslam Mahmoud",
        url: "https://github.com/ess942",
      },
    ],
  },

  // About Information
  about: {
    bio: "I am a Passionate Software Developer from Egypt. I'm passionate about crafting web projects and contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to detail and efficient delivery, I build seamless web experiences that combine functionality with elegant design.",
    hobbies: [
      "Coding",
      "Playing Games",
      "Watching Anime",
      "Tech Blog Writing",
      "Creating Cool Projects",
    ],
    personalInfo: {
      language: "Arabic / English",
      nationality: "Egypt",
      gender: "Male",
    },
  },

  // Skills and Roles
  skills: {
    roles: [
      "Freelancer",
      "Blogger",
      "Gamer",
      "Creator",
      "Student",
      "Contributer",
    ],
    // Technical Skills
    programmingLanguages: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
    frameworks: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Svelte",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },

  // Education Information - TODO: replace with your real education history
  education: [] as {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
  }[],

  // Projects Information - TODO: replace with your real projects
  projects: [] as {
    title: string;
    description: string;
    tags: string[];
    link: string;
  }[],

  // More Links Information - TODO: replace with your real blog/social links
  moreLinks: [] as {
    title: string;
    description: string;
    link: string;
  }[],

  // API Keys (should be in .env but referenced here)
  apiKeys: {
    resendApiKey: process.env.RESEND_API_KEY ?? "YOUR_RESEND_API_KEY",
  },
};
