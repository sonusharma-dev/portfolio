const projectList = [
    {
        id: 1,
        number: "01",
        title: "Personal Portfolio Website",
        description: "A responsive portfolio website built using HTML, CSS, and JavaScript to showcase my skills, projects, and contact information. Includes interactive elements, custom design, and smooth navigation.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "assets/projects/project1.jpg",
        liveLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        number: "02",
        title: "Amazon Clone Website",
        description: "A fully responsive e-commerce website clone of Amazon built using HTML and CSS. This project demonstrates layout structuring, responsive design, and user interface design skills by recreating the homepage, product listings, and navigation menus.",
        techStack: ["HTML", "CSS"],
        image: "assets/projects/project2.jpg",
        liveLink: "#",
        githubLink: "#"
    }
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProjects = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>${projectContent?.description}</p>
            <div class="tech-stack">
            ${
                projectContent?.techStack.map((tech , i) => {
                    return `
                    <span key=${i}>${tech}</span>
                    `;
                }).join("")
            };
            </div>
            <hr>
            <div class="links">
                <a href=${projectContent?.liveLink}>
                    <i class="ph ph-arrow-right"></i>
                </a>
                <a href=${projectContent?.githubLink}>
                    <i class="ph ph-github-logo"></i>
                </a>
            </div>
        </div>
        <div class="carousel">
            <img src=${projectContent?.image} alt=${projectContent?.title}>

                <div class="arrows">
                    <a href="#" id="previous" class=${previousDisabled? "disabled-btn":""}>
                        <i class="ph ph-caret-left"></i>
                    </a>
                    <a href="#" id="next" class=${nextDisabled? "disabled-btn":""}>
                        <i class="ph ph-caret-right"></i>
                    </a>
                </div>
        </div>
    `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();

        if(currentIndex > 0) {
            currentIndex--;
            renderProjects(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if(currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProjects(currentIndex);
        }
    });
};

renderProjects(currentIndex);





