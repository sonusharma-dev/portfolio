const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if(aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        document.getElementById(tab.dataset.section).classList.add("active");

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experiencelist = [
                {
                    id: 1,
                    date: "2026 - Present",
                    position: "Frontend Developer",
                    company: "Self Learning & Projects",
                    details: "Developing responsive and user-friendly websites using HTML, CSS, and JavaScript. Focused on improving UI design and creating smooth user experiences."
                },
                {
                    id: 2,
                    date: "2026 - Present",
                    position: "Personal Projects",
                    company: "Portfolio & Practice Work",
                    details: "Built multiple projects including a personal portfolio website and practice layouts. Gained hands-on experience in responsive design and modern web development."
                },
            ];

            const experienceContent = experiencelist.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `
            })
            .join("");

            if(experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "Passed 2081 - 2082 BS",
                    degree: "Class 10",
                    institution: "Shree Satyanarayan Secondary School, Biratnagar",
                    details: "Completed Schooling"
                },
                {
                    id: 1,
                    date: "2082 BS - Present",
                    degree: "Class 11 (Management Stream)",
                    institution: "Shree Kantipur Secondary School, Biratnagar",
                    details: "Focused on Management studies and academics"
                },
            ];

            const educationContent = educationList.map((ele) => {
                return`
                <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.institution}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `;
            })
            .join("");

            if(education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector(".skill-list");

            const skillList = [
                {
                    id: 1,
                    name: "HTML - Hyper Text Markup Language",
                    icon: "assets/skills/html.png"
                },
                {
                    id: 2,
                    name: "CSS",
                    icon: "assets/skills/css.png"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "assets/skills/js.png"
                },
                {
                    id: 4,
                    name: "Bootstrap",
                    icon: "assets/skills/bootstrap.png"
                },{
                    id: 5,
                    name: "MongoDB",
                    icon: "assets/skills/mongodb.png"
                },
                {
                    id: 6,
                    name: "Node.js",
                    icon: "assets/skills/node.png"
                },
                {
                    id: 7,
                    name: "React.js",
                    icon: "assets/skills/react.png"
                }
            ];

            const skillContent = skillList.map((ele) => {
                return`
                <div class="skill-box" key=${ele?.id}>
                    <img src=${ele?.icon} 
                    alt=${ele?.name} 
                    title=${ele?.name} loading="lazy"/>
                </div>
                `;
            })
            .join("");

            if(skills) {
                skills.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me") {
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key: "Name :",
                    value: "Sonu Sharma"
                },
                {
                    id: 2,
                    key: "Country :",
                    value: "Nepal"
                },
                {
                    id: 3,
                    key: "Industry :",
                    value: "Web Development"
                },
                {
                    id: 4,
                    key: "Experience :",
                    value: "Fresher"
                },
                {
                    id: 5,
                    key: "Address :",
                    value: "Biratnagar, Koshi Province, Nepal"
                }
            ];

            const infoContent = infoList.map((ele) => {
                return`
                <div class="info-box" key=${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                </div>
                `;
            })
            .join("");

            if(myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }    
    });
});