// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hoang",
  middleName: "Manh",
  lastName: "Duc",
  message: "Software Developer full time, musician part time",
  icons: [
    {
      image: "github",
      url: "https://github.com/hmanhduc2k/",
    },
    {
      image: "facebook",
      url: "https://www.facebook.com/manhduc.hoang.71/",
    },
    {
      image: "instagram",
      url: "https://www.instagram.com/hoangmanh_ducc/",
    },
    {
      image: "linkedin",
      url: "https://www.linkedin.com/in/hoang-manh-duc-7599b61ba/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/manhducc.jpg"),
  imageSize: 375,
  message:
    `I'm Hoang Manh Duc - a Computer Science undergraduate at the National University of Singapore. I like code and play piano.
    To have a better understanding of myself, please read my transformation story here`,
  resume: "https://drive.google.com/file/d/1n5YheBSXjiYMDRAnPqnkUYQYtcG8ZvWN/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hmanhduc2k", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['Classical-Collection', 'Academy-Directory', 'ConCat', 'Chess-Bot']
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Volunteering and Leaderships",
  message:`Ah yes, who does not love extra-curricular activity? 
  I'm a CS student and I touch grass like crazy
  For coding and programming is not just my priority
  But so is contributing my presence to humanity`,
  images: [
    { 
      img: require("../assets/img/nuspe3.jpg"), 
      label: "NUS Piano Ensemble", 
      paragraph: "I play piano duo" 
    },
    { 
      img: require("../assets/img/vnc2.jpg"), 
      label: "VNCNUS", 
      paragraph: "I spread Viet culture" 
    },
    { 
      img: require("../assets/img/viva1.jpg"), 
      label: "VivaLatiNUS",
      paragraph: "I dance" 
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript/TypeScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "PostgreSQL", value: 80 },
  ],
  softSkills: [
    { name: "Public Speaking", value: 80 },
    { name: "Leadership", value: 90 },
    { name: "Management", value: 75 },
    { name: "Artistic Design", value: 85 },
    { name: "Teamwork", value: 75 },
    { name: "Flexibility", value: 90 },
    { name: "Perseverance", value: 70 },
    { name: "Research", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Are you interested or want to connect with me? Please send me an email here at",
  email: "hmanhduc2k@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/sentient.png'),
      date: 'Dec 2021 to Aug 2022',
      tasks: [
        'Develop frontend features with Vue and TypeScripts',
        'Develop backend microservices and routing using SQLAlchemy, Python, and FAST-API',
        'Develop models schemas and migration with PostgreSQL and Alembic',
        'Deployed and managed systems with Docker and Google Cloud Platform'
      ],
      technologies: [
        { name: "Vue", logo: "../assets/logos/vue.png" },
        { name: "SQLAlchemy", logo: "../assets/logos/sqlalchemy.jpg" },
        { name: "Google Cloud", logo: "../assets/logos/gcpd.png" },
        { name: "GitHub Actions", logo: "../assets/logos/gitact.png" },
      ]
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/enterprise.png'),
      date: 'Aug 2022 to Nov 2022',
      tasks: [
        
      ],
      technologies: [
        { name: "ReactJS", logo: "../assets/logos/react.png" },
        { name: "C#", logo: "../assets/logos/csharp.png" }
      ]
    },
    {
      role: 'Artificial Intelligence Intern',
      companylogo: require('../assets/img/mindreader.jpeg'),
      date: 'May 2023 to Aug 2023',
      tasks: [
        
      ],
      technologies: [
        { name: "OpenCV", logo: "../assets/logos/opencv.png" },
        { name: "Torch", logo: "../assets/logos/pytorch.png" }
      ]
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/ESI.jpg'),
      date: 'Aug 2023 to Oct 2023',
      tasks: [
        
      ],
      technologies: [
        { name: "Figma", logo: "../assets/logos/figma.png" },
        { name: "SQL", logo: "/path/to/pgsql.png" }
      ]
    }
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      schoolName: "National University of Singapore",
      logoUrl: require('../assets/img/NUS.jpg'),
      description: `The leading university of Singapore and Asia, ranked 8th of the world according to the QS Ranking and 19th according to Times Higher Education. I was fortunate to be an undergraduate student of the prestigious Bachelor of Computing program and one of the few Vietnamese students to study her, where the brightest minds of Asia congregate. \n
As a Computer Science undergrad, I specialized in Artificial Intelligence and Database System, both with a Certificate of Merits for excellent performance. I was also tasked with being a teaching assistant for 3 modules - CS2100 (Computer Organization), IT5002 (Computer Systems and Applications), and CP2106 (Independent Software Engineering Projects). \n
I worked in various research projects (mostly on software development sides) and I helped significantly with transforming idea to products. I was a developer for various Singapore-based startups and helped deivering innovative solutions to the public. I am also an active leader of various student societies in NUS, all of which lasted impacts to youth society here.
      `,
      elaborate: [

      ]
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { education, navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
