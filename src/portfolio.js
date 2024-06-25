/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nicolas Caillet Bois Portfolio",
  description:
    "Motivated to tackle any professional challenge. Vital, practical, highly motivated project developer. Open minded, I really want to learn and grow professionally. Cheerful and positive, I try to find solutions, working as a team and creating a good working atmosphere.",
  og: {
    title: "Nicolas Caillet Bois Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Nicolas Caillet Bois",
  logo_name: "Nicolas Caillet Bois",
  nickname: "Nico",
  subTitle:
    "Motivated to tackle any professional challenge. Vital, practical, highly motivated project developer. I try to find solutions, working as a team and creating a good working atmosphere.",
  resumeLink: "",
  portfolio_repository: "https://github.com/NicoCaillet/personalPagePortfolio",
  githubProfile: "https://github.com/NicoCaillet",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NicoCaillet",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nicolas-caillet-bois-0554ba1b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nicolascailletbois3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nico_caillet/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Fullstack App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux and Next Js",
        "⚡ Developing mobile applications using React Native",
        "⚡ Implementing modern and scalable user interfaces following best development practices.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "simple-icons:prisma",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northlands School ",
      subtitle: "Art and literature baccalaureate",
      logo_path: "northlands.png",
      alt_name: "IIITDM Kurnool",
      duration: "2013 - 2019",
      descriptions: [
        "⚡ IB & Cambridge education.",
        "⚡ Bilingual Baccalaureate.",
        "⚡ Rugby, soccer, music band, community and service projects.",
      ],
      website_link: "https://www.northlands.edu.ar/en/home-slide-i/",
    },
    {
      title: "Henry",
      subtitle: "Fullstack web developer bootcamp.",
      logo_path: "henry.png",
      alt_name: "Henry bootcamp",
      duration: "2020 - 2020",
      descriptions: [
        "⚡ Intensive Javascript Fullstack Web Course.",
        "⚡ +600 hours with real life projects.",
      ],
      website_link: "https://www.soyhenry.com/",
    },
    {
      title: "ISEC",
      subtitle: "Audiovisual Media Host / Locution",
      logo_path: "isec.jpeg",
      alt_name: "ISEC Loc",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Training my voice with techniques in all disciplines related to voiceover: commercial, informative, artistic, dubbing, neutral Spanish, hosting, and general entertainment.",
        "⚡ The curriculum content is 60% practical, and the integration of knowledge takes place in professional TV and radio studios.",
        "⚡ I am also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.isec.edu.ar/locucion/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with various dynamic startups as a Front-End Developer specializing in React, NEXT.js, and React Native. I've collaborated with design teams and managers on e-commerce and other web projects, ensuring responsive user interfaces and converting mockups into functional applications. I have also contributed to established companies, focusing on scalable user interfaces using REACT and VTEX, optimizing performance, and resolving technical issues.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fullstack Developer",
          company: "Wirall",
          company_url: "https://www.wirall.com/",
          logo_path: "wirall.jpeg",
          duration: "Jun 2021 - Jun 2022",
          location: "Buenos Aires, Argentina",
          description:
            "As a React Native Front-End Developer, I built robust, user-friendly mobile applications, ensuring seamless and responsive interfaces. I collaborated with designers to turn mockups into functional apps and implemented key features for an optimal user experience. Additionally, i worked in other team as a Fullstack Developer, using Python and Lua in a scraping project. I developed scripts to extract and process data from various sources, managed databases, and integrated the data into applications, ensuring efficient and reliable data handling.",
          color: "#0879bf",
        },
        {
          title: "Front-End Developer",
          company: "Balloon Group",
          company_url: "https://www.balloon-group.com/",
          logo_path: "balloon.png",
          duration: "Jun 2022 - Mar 2023",
          location: "Buenos Aires, Argentina",
          description:
            "I implemented modern and scalable user interfaces using REACT and VTEX, following best development practices. I participated in code reviews, optimized application performance, and resolved technical issues, ensuring high-quality deliveries within established deadlines.",
          color: "#9b1578",
        },

        {
          title: "Front-End developer",
          company: "Chiper",
          company_url: "https://landing.chiper.co/",
          logo_path: "chiper.png",
          duration: "Nov 2020 - Jun 2021",
          location: "COLOMBIA",
          description:
            "As a front-end web application developer specializing in React and NEXT JS, I worked on an e-commerce project, collaborating closely with design teams, clients, and managers. I implemented key components and functionalities, ensuring intuitive and responsive user interfaces. I converted mockups into functional web applications, gathered requirements, and adjusted development based on feedback received",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front-end / Fullstack projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "logo.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
