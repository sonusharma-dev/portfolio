const toggle = document.getElementById("menu-toggle");

if(toggle && toggle.checked){
    document.body.classList.add("no-scroll");
} else {
    document.body.classList.remove("no-scroll");
}

const words = [
    "Youtuber",
    "Creator",
    "Freelancer",
    "Developer",
    "Video Editor",
];

const typingText = document.
getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextwordDelay =1000;

const type = () => {
    const currentword = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentword.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentword.length) {
            isDeleting = true;
            setTimeout(type, nextwordDelay);
        }else {
            setTimeout(type, typingDelay);
        }
    }else {
        typingText.textContent = currentword.substring(0, charIndex-1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) %
            words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        };
    };
};

document.addEventListener
("DOMContentLoaded",()=>{
    if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if(l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName) {
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }
        });

        if(tabName === "services") {
            const servicelist = [
                {
                   id: 1,
                   icon: "ph-code",
                   text: "Web Development",
                   para: "I create responsive and modern websites using HTML, CSS, and JavaScript. My goal is to build fast, user-friendly, and visually appealing websites.",
                },
                {
                   id: 2,
                   icon: "ph-desktop",
                   text: "Frontend Development",
                   para: "I design and develop clean user interfaces with smooth layouts, animations, and responsive design for mobile and desktop devices.",
                },
                {
                   id: 3,
                   icon: "ph-user-circle",
                   text: "Portfolio Sites",
                   para: "I build personal portfolio websites for students, freelancers, and professionals to showcase their skills and projects online.",
                },
                {
                   id: 4,
                   icon: "ph-palette",
                   text: "Website Design",
                   para: "I design simple and modern website layouts focusing on user experience and clean design.",
                },
                {
                   id: 5,
                   icon: "ph-gear",
                   text: "Website Customization",
                   para: "I help customize existing websites by improving design, fixing layout issues, and adding new features.",
                },
                {
                   id: 6,
                   icon: "ph-rocket-launch",
                   text: "Site Launch",
                   para: "I help publish websites online using GitHub Pages and other hosting platforms.",
                }
            ];

            const services = document.getElementsByClassName("service-list");

            const innerContent = servicelist.map((l) => {
                return `
                <div class="box" key${l?.id}>
                    <div class="head-icons">
                        <i class="ph ${l?.icon}"></i>

                        <span>
                            <i class="ph ph-arrow-down-right"></i>
                        </span>
                    </div>

                    <h3>${l?.text}</h3>
                    
                    <span class="spacer"></span>

                    <p>${l?.para}</p>
                </div>
                `;
            }).join("");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
            });
            
        }

        toggle.checked = false;
    });
});
