document.documentElement.classList.remove("no-js");

const education = [
  {
    qualification: "Bachelor of Computer Science (Hons.) Multimedia Computing",
    institution: "Universiti Teknologi MARA (UiTM) Shah Alam, Selangor",
    date: "Currently Pursuing",
    type: "Bachelor's Degree",
    description: "Currently pursuing my bachelor's degree, exploring software development, mobile applications, multimedia technologies, game development and computer graphics.",
    image: ""
  },
  {
    qualification: "Diploma in Computer Science",
    institution: "Universiti Teknologi MARA (UiTM) Perak Branch, Tapah Campus",
    date: "Graduated November 2025",
    type: "Diploma",
    description: "Built a foundation in programming, database management, software development and problem-solving through coursework and practical projects.",
    image: "assets/images/diploma-graduation.jpeg"
  },
  {
    qualification: "Sijil Pelajaran Malaysia (SPM)",
    institution: "SMK Sultan Abdullah, Chenderong Balai, Perak",
    date: "Year of Completion: 2021",
    type: "Secondary Education",
    description: "Completed my secondary education before continuing my studies in Computer Science.",
    image: "assets/images/spm.jpeg"
  }
];

const skills = [
  { category: "Programming languages", icon: "<//>", items: ["Java", "Python", "JavaScript", "HTML","HTML5", "CSS", "Dart", "C++", "SQL", "PHP", "C#", "R"] },
  { category: "Development tools", icon: "⌘", items: ["VS Code", "Android Studio", "Git", "GitHub", "Firebase","PhpMyAdmin", "XAMPP", "Unity", "Blender", "Figma","Construct 2", "Blender","Ubuntu", "Sublime Text", "MySQL Workbench", "Visual Studio"] },
  { category: "Other skills", icon: "✳", items: ["Mobile application development", "Web development", "UI/UX design", "Database management", "3D modelling", "Game development", "Multimedia Development", "Object-oriented programming", "Machine Learning Fundamentals"]}
];

const projects = [
  { title: "Spendly - Personal Expense Tracker", subtitle: "UI/UX Design & Frontend Web Development", category: "Mobile", image: "assets/images/spendly.png", description: "A responsive personal finance web application designed to help users manage their money through income and expense tracking, wallet management, monthly budget monitoring and spending analytics.", technologies: ["React.js", "JavaScript", "Vite", "CSS", "Figma", "localStorage"], repository: "https://github.com/amnihudzori/Spendly.git", demo: "https://amnihudzori.github.io/Spendly/" },
  { title: "Recyclo – Smart Waste Classification with Upcycling Application", subtitle: "Smart Waste Classification and Upcycling App | Final Year Project", category: "Mobile", image: "assets/images/project-recyclo.svg", description: "An AI-powered mobile application developed for my Final Year Project, combining CNN-based waste classification, upcycling recommendations and recycling centre information to promote sustainable waste management.", technologies: ["Flutter", "Dart", "Firebase"], repository: "https://github.com/your-username/recyclo", demo: "" },
  { title: "SolarShare AI – Smart Community Solar Energy Management", subtitle: "Solar Energy Management Prototype for Sime Darby Property", category: "Web", image: "assets/images/project-solarshare.png", description: "A team-developed web prototype created for the Sime Darby Property Open Innovation Challenge 2026, exploring smart solar energy management through rooftop potential estimation, community participation and township planning.", technologies: ["JavaScript", "HTML", "CSS"], repository: "https://github.com/amnihudzori/solarshare-ai.git", demo: "https://amnihudzori.github.io/solarshare-ai/" },
  { title: "Bakery Stall - 3D Modelling", subtitle: "Individual | Computer Graphics", category: "Design", image: "assets/images/project-bakery.png", description: "An individual 3D modelling project created using Blender, featuring a bakery stall with individually modelled donuts, pastries and other bakery elements. The project focuses on object modelling, materials, lighting, and scene arrangement to create a detailed bakery environment.", technologies: ["Blender", "3D Modelling", "Computer Graphics"], repository: "https://github.com/amnihudzori/Blender-Projects/tree/3ae996759e54f45bd68d6126e77c9e93738e8692/meamo-bakery",demo: ""},
  { title: "Event Space - 3D Modelling", subtitle: "Group Project | Computer Graphics",category: "Design", image: "assets/images/project-event-space.png", description: "A group 3D modelling project created using Blender, featuring an outdoor event space with various stalls, a performance stage, seating areas, decorative elements and human figures. The project focuses on teamwork, object modelling, materials, lighting and scene arrangement to create a lively event environment.", technologies: ["Blender", "3D Modelling", "Computer Graphics"], repository: "https://github.com/amnihudzori/Blender-Projects/tree/3ae996759e54f45bd68d6126e77c9e93738e8692/event-space", demo: ""},
  { title: "Digi Run - 2D Platformer Game", subtitle: "Individual | Game Design & Development", category: "Game", image: "assets/images/project-platformer.png", description: "A colourful 2D platformer built with Construct 2, featuring desert-themed levels, floating platforms, interactive obstacles, enemies and collectibles.", technologies: ["HTML5","Construct 2", "Game development"], repository: "https://github.com/amnihudzori/Construct2-Games/tree/7be358ae6592d3a50d00c38f145bb0c709146090/Platformer%20Game", demo: "https://amnihudzori.github.io/Construct2-Games/Platformer%20Game/" },
  { title: "Mimimini – 2D Platformer Game", subtitle: "Individual | Game Design & Development", category: "Game", image: "assets/images/project-miniminigame.png", description: "A 2D platformer game built with Construct 2, featuring colourful environments, challenging obstacles, enemies and collectible gems.", technologies: ["HTML5","Construct 2", "Game development"], repository: "https://github.com/amnihudzori/Construct2-Games/tree/7be358ae6592d3a50d00c38f145bb0c709146090/Minimini", demo: "https://amnihudzori.github.io/Construct2-Games/Minimini/" },
  { title: "Aeroplane Controller – 3D Simulation Game", subtitle: "Individual | Virtual Reality", category: "Game", image: "assets/images/project-aeroplane.png", description: "A 3D Unity aeroplane simulation featuring continuous forward movement, keyboard-controlled pitching, and a following camera, demonstrating basic flight controls and object movement.", technologies: ["C#","Unity","Game development"], repository: "https://github.com/amnihudzori/Unity-Games/tree/94d7416178bfab6a3925d9aede7ed583a41caab2/plane-control", demo: "" },
  { title: "Farmer Game – 3D Arcade Game", subtitle: "Individual | Virtual Reality", category: "Game", image: "assets/images/project-farmer.png", description: "A 3D arcade-style game developed using Unity and C#, where players help a farmer catch falling balls by sending dogs to retrieve them. The game features randomized ball spawning, collision detection and keyboard-based controls. This project focuses on implementing object spawning, arrays, conditional statements and basic game mechanics in Unity.", technologies: ["C#","Unity","Game development"], repository: "https://github.com/amnihudzori/Unity-Games/tree/94d7416178bfab6a3925d9aede7ed583a41caab2/Farmer", demo:""}
];

const experience = [
  {
    role: "Internship Trainee",
    organization: "Jama'atu Shaaba Consultant (JSC) Agency Takaful · Ipoh, Perak",
    date: "October 2024 — February 2025",
    description: "Assisted with website development using Wix, created promotional posters for social media and supported daily customer service operations. Gained hands-on experience in website management, digital content creation and professional communication."
  },
  {
    role: "Secretary — Jawatankuasa Sukan Pelajar (JSP)",
    organization: "Universiti Teknologi MARA (UiTM) · Tapah Campus",
    date: "October 2023 — February 2024",
    description: "Handled administrative documentation, prepared paperwork and assisted in coordinating student sports and recreational activities. Worked with committee members to support events such as badminton tournaments, fitness programmes and the JSP Colour Run 5KM."
  },
  {
    role: "Secretariat",
    organization: "Jawatankuasa Sukan Pelajar (JSP), UiTM  Tapah Campus",
    date: "2022 – 2023",
    description: "Served as part of the JSP secretariat, supporting administrative tasks, programme documentation and coordination of student sports activities. Gained experience in teamwork, communication and organizational responsibilities."
  },
];


const activities = [
  {
  title: "Sime Darby Property Universities Hackathon 2026 — SolarShare AI",
  organization: "UiTM Open Innovation Challenge · Team Project",
  date: "October 2026",
  role: "Hackathon Participant",
  category: "Competition",
  description: "Collaborated with teammates to develop SolarShare AI, a web-based prototype focused on community solar energy participation and township management. Explored practical solutions through application development, creative problem-solving and teamwork.",
  image: "assets/images/hackathon.png"
  },
  {
    title: "Opereta Diraja: Raja dan Rakyat Berpisah Tiada",
    organization: "Universiti Teknologi MARA (UiTM) · Shah Alam",
    date: "October 2026",
    role: "Attendee",
    category: "Cultural & University Event",
    description: "Attended a royal musical theatre performance at Dewan Konsert Seri Budiman, UiTM Shah Alam. The performance explored the history and heritage of the Malay royal institution through music, storytelling and performing arts.",
    image: "assets/images/opereta-diraja.jpeg"
  },
  {
    title: "Putrajaya Festival of Ideas (FOI) 2025",
    organization: "Ministry of Higher Education Malaysia (MOHE)",
    date: "2025",
    role: "Attendee",
    category: "Conference & Exhibition",
    description: "Attended the Putrajaya Festival of Ideas 2025, where I had the opportunity to explore innovative projects, creative ideas and exhibitions showcasing developments in technology, education and innovation.",
    image: "assets/images/foi2025.jpeg"
  },
  {
    title: "3R Interclub Innovation Challenge 2023",
    organization: "Universiti Teknologi MARA (UiTM) · Perak Branch",
    date: "July 2023",
    role: "Participant",
    category: "Competition",
    description: "Participated in the 3R Interclub Innovation Challenge, a university-level competition focused on innovation and creativity.",
    image: "assets/images/3r-innovation.jpeg"
  },
  {
    title: "JSP Colour Run 5KM",
    organization: "UiTM Perak · Tapah Campus",
    date: "June 2024",
    role: "Committee Member",
    category: "Student Leadership",
    description: "Supported the organization of a 5KM colour run through event preparation, documentation and coordination with fellow committee members.",
    image: "assets/images/colour-run.jpeg"
  },
  {
    title: "Walk-in Career Talk with Esports by PUBG Caster & Analyst Sir Cloud",
    organization: "UiTM Perak · Tapah Campus",
    date: "April 2024",
    role: "Organizing Committee",
    category: "Campus Event",
    description: "Contributed to the organization of a career talk featuring Sir Cloud, a PUBG esports caster, through collaboration with student committees.",
    image: "assets/images/career-talk.jpeg"
  },
  {
    title: "Sporting Campus: Aerobic @ Tabata",
    organization: "UiTM Perak Sports Unit · Tapah Campus",
    date: "April 2024",
    role: "Organizing Committee (JSP)",
    category: "Student Leadership",
    description: "Assisted the UiTM Perak Sports Unit in organizing its monthly Sporting Campus programme as part of the Jawatankuasa Sukan Pelajar (JSP). Helped manage student participation, coordinate activities and support event operations to ensure the programme ran smoothly.",
    image: "assets/images/tabata.jpeg"
  },
  {
    title: "Kem Kepimpinan UiTM Perak Branch",
    organization: "Universiti Teknologi MARA (UiTM) · Perak Branch",
    date: "19 - 22 January 2024",
    role: "Participant — JSP Representative",
    category: "Leadership & Development",
    description: "Grateful for the enriching experience at the Kem Kepimpinan program, held at the Institut Pembangunan dan Kepimpinan (ILD) Perak, Universiti Teknologi MARA. Four days of growth, learning and forging new connections.",
    image: "assets/images/leadership-camp.jpg"
  },
  {
    title: "Kejohanan Badminton Beregu Lelaki & Wanita UiTM Cawangan Perak Campus Tapah",
    organization: "Jawatankuasa Sukan Pelajar (JSP) & Unit Sukan UiTM Tapah",
    date: "December 2023",
    role: "Organizing Committee — Documentation",
    category: "Student Leadership",
    description: "Assisted in organizing the Men's and Women's Badminton Doubles Tournament held at Kompleks Belia dan Sukan Tapah. As part of JSP, I was responsible for preparing programme paperwork and documentation, gaining experience in event planning, administrative coordination, and teamwork.",
    image: "assets/images/badminton-tournament.jpeg"
  },
  {
    title: "SuPro: Kejohanan Sukan Antara Program",
    organization: "Universiti Teknologi MARA (UiTM) · Perak Branch",
    date: "9-11 & 16-19 June 2023",
    role: "Organizing Committee (JSP Secretariat)",
    category: "Student Leadership",
    description: "Assisted in managing SuPro, an inter-programme sports tournament at UiTM Perak, as part of the JSP Secretariat. Supported event coordination and helped ensure sporting activities ran smoothly.",
    image: "assets/images/supro.jpeg"
  }
];

const certifications = [
  { name: "Participation in AI Unplugged With Krenovator", organization: "Faculty of Computer and Mathematical Sciences UiTM", date: "June 2025", image: "assets/images/aiunpluggled.jpg", url: "assets/images/aiunpluggled.jpg" },
  { name: "Participation in Career Evolution : Adapting to the Digital Workforce", organization: "Faculty of Accountancy UiTM", date: "June 2025", image: "assets/images/careerevolution.jpg", url: "assets/images/careerevolution.jpg" },
  { name: "Google Ads Search Certification", organization: "Google Skillshop", date: "May 2026", image: "assets/images/google-ads-search.png", url: "assets/certificates/google-ads-search.pdf"},
  { name: "Google Certified Educator Level 1", organization: "Google for Education", date: "May 2026", image: "assets/images/googleeducert.png", url: "assets/certificates/google-certified-edu.pdf" },
  { name: "Gemini Certified University Student", organization: "Google for Education", date: "May 2026", image: "assets/images/geminicert.png", url: "assets/certificates/gemini-cert-stud.pdf" },
  { name: "Introduction to Generative AI", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/generativeai.jpg", url: "assets/certificates/generative-ai.pdf" },
  { name: "AI Nation 2030 : The MADANI Approach", organization: "Kementerian Digital", date: "June 2025", image: "assets/images/aination.jpg", url: "assets/certificates/ai-nation-2030.pdf" },
  { name: "CyberSAFE Untuk Rakyat", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/cybersafe.jpg", url: "assets/certificates/cybersecurity.pdf" },
  { name: "Cloud Untuk Rakyat", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/cloud.jpg", url: "assets/certificates/cloud-untuk-rakyat.pdf" },
  { name: "AI Safety", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/aisafety.jpg", url: "assets/certificates/ai-safety.pdf" },
  { name: "AI Fluency", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/aifluency.jpg", url: "assets/certificates/ai-fluency.pdf" },
  { name: "Penilaian Garis Panduan Pengadaptasian Kecerdasan Buatan (AI) Sektor Awam (GPAISA)", organization: "Kementerian Digital", date: "October 2026", image: "assets/images/gpaisa.jpg", url: "assets/certificates/ai-sektor-awam-gpaisa.pdf" }

];

const skillsGrid = document.querySelector("#skills-grid");
skillsGrid.innerHTML = skills.map((group) => `
  <article class="skill-card reveal">
    <div class="skill-card-head"><span class="skill-icon" aria-hidden="true">${group.icon}</span><h3>${group.category}</h3></div>
    <div class="skill-tags">${group.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}</div>
  </article>
`).join("");

const educationTimeline = document.querySelector("#education-timeline");
educationTimeline.innerHTML = education.map((item) => `
  <article class="education-card reveal">
    <div class="education-card-content">
      <span class="education-type"> ${item.type} </span>
      <p class="education-date">${item.date}</p>
      <h3>${item.qualification}</h3>
      <p class="education-institution">${item.institution} </p>
      <p class="education-description"> ${item.description}</p>
    </div>
    ${item.image ? `
      <div class="education-image-wrap">
        <img
          src="${item.image}"
          alt="${item.qualification}"
          loading="lazy"
        >
      </div>
    ` : ""}
  </article>
`).join("");

const projectsGrid = document.querySelector("#projects-grid");
const categories = ["All", ...new Set(projects.map((project) => project.category))];
const filters = document.querySelector("#project-filters");
filters.innerHTML = categories.map((category, index) => `<button class="filter-button" type="button" data-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join("");

function renderProjects(filter = "All") {
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter);
  projectsGrid.innerHTML = visibleProjects.map((project) => `
    <article class="project-card reveal">
      <img class="project-image" src="${project.image}" alt="${project.title} project illustration" loading="lazy">
      <div class="project-body">
        <p class="project-category">${project.category} · ${project.subtitle}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${project.technologies.map((technology) => `<span class="tech-tag">${technology}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${project.repository}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>` : '<span class="unavailable">Live demo not available</span>'}
        </div>
      </div>
    </article>
  `).join("");
  observeReveals();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  filters.querySelectorAll(".filter-button").forEach((filterButton) => {
    filterButton.setAttribute("aria-pressed", String(filterButton === button));
  });
  renderProjects(button.dataset.filter);
});

document.querySelector("#experience-timeline").innerHTML = experience.map((item) => `
  <article class="timeline-item reveal">
    <p class="timeline-date">${item.date}</p>
    <h3>${item.role}</h3>
    <p class="timeline-org">${item.organization}</p>
    <p>${item.description}</p>
  </article>
`).join("");

const activitiesGrid = document.querySelector("#activities-grid");
const showMoreActivitiesBtn = document.querySelector("#show-more-activities");

let visibleActivities = 3;

function renderActivities() {

  activitiesGrid.innerHTML = activities
    .slice(0, visibleActivities)
    .map((activity) => `
      <article class="activity-card reveal">

        <div class="activity-image-wrap">
          <img
            class="activity-image"
            src="${activity.image}"
            alt="${activity.title}"
            loading="lazy"
          >
        </div>

        <div class="activity-body">

          <div class="activity-top">
            <span class="activity-category">
              ${activity.category}
            </span>

            <span class="activity-date">
              ${activity.date}
            </span>
          </div>

          <h3>${activity.title}</h3>

          <p class="activity-role">
            ${activity.role}
          </p>

          <p class="activity-organization">
            ${activity.organization}
          </p>

          <p class="activity-description">
            ${activity.description}
          </p>

        </div>

      </article>
    `)
    .join("");

  showMoreActivitiesBtn.hidden = activities.length <= 3;

  showMoreActivitiesBtn.textContent =
    visibleActivities >= activities.length
      ? "Show Less"
      : "Show More Activities";

  observeReveals();
}

showMoreActivitiesBtn.addEventListener("click", () => {

  if (visibleActivities >= activities.length) {
    visibleActivities = 3;
  } else {
    visibleActivities = activities.length;
  }

  renderActivities();
});

document.querySelector("#certifications-grid").innerHTML = certifications.map((item) => `
  <article class="cert-card reveal">
    <img class="cert-image" src="${item.image}" alt="Certificate placeholder" loading="lazy">
    <div class="cert-body">
      <h3>${item.name}</h3>
      <p class="cert-org">${item.organization}</p>
      <p class="cert-date">${item.date}</p>
      ${item.url ? `<a class="cert-link" href="${item.url}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>` : '<span class="cert-link">Add certificate link</span>'}
    </div>
  </article>
`).join("");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !expanded);
});
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

const themeToggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("portfolio-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = storedTheme || (preferredDark ? "dark" : "light");

function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
}

updateThemeButton();
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeButton();
});

const interests = ["web development", "mobile app development", "UI/UX design", "game development", "3D modelling", "creative coding"];
const interestTarget = document.querySelector(".typed-interest");
let interestIndex = 0;
let characterIndex = interests[0].length;
let deleting = true;
function typeInterest() {
  const word = interests[interestIndex];
  characterIndex += deleting ? -1 : 1;
  interestTarget.textContent = word.slice(0, characterIndex);
  let delay = deleting ? 45 : 75;
  if (characterIndex === 0) {
    deleting = false;
    interestIndex = (interestIndex + 1) % interests.length;
    delay = 250;
  } else if (characterIndex === interests[interestIndex].length) {
    deleting = true;
    delay = 1500;
  }
  window.setTimeout(typeInterest, delay);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setTimeout(typeInterest, 1800);
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 })
  : null;

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    if (observer) observer.observe(element);
    else element.classList.add("is-visible");
  });
}
renderProjects();
renderActivities();
observeReveals();

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector(".copy-email").addEventListener("click", async (event) => {
  const status = document.querySelector(".copy-status");
  try {
    await navigator.clipboard.writeText(event.currentTarget.dataset.email);
    status.textContent = "Email address copied to clipboard.";
  } catch (error) {
    status.textContent = "Clipboard access is unavailable. Please use the email button.";
  }
});
