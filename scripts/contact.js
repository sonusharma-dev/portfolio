const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+9779702004788",
        href: "tel:+9779702004788",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-Mail",
        value: "sonukumar970200@gmail.com",
        href: "mailto:sonukumar970200@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "Nepal",
        href: "#",
    }
];

const contactContent = contactList.map((ele) => {
    return `
    <div class="media" key=${ele?.id}>
        <span>
        <i class="${ele?.icon}"></i>
        </span>

        <div class="contact-value">
            <p>${ele?.name}</p>
            <a href=${ele?.href}>${ele?.value}</a>
        </div>
    </div>
    `;
})
.join("");

if(media) media.innerHTML = contactContent;

// Send content message

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;

const originalStyle = {
    backgroundColor: getComputedStyle(sendBtn).backgroundColor,
    color: getComputedStyle(sendBtn).color,
    border: getComputedStyle(sendBtn).border,
    boxShadow: getComputedStyle(sendBtn).boxShadow,
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style,originalStyle);

        sendBtn.disabled = false;

        return Toastify({
            text: "All Fields are Mandatory!",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)"
                },
        }).showToast();

    }

    emailjs.send("service_37fqy4m", "template_iue7tur", {
        name, 
        email, 
        phone, 
        message,
    }).then(
        () => {
            Toastify({
                text: "Message Sent Successfully!",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true,
                style: {
                    background: "rgb(9,222,38)",
                },
            }).showToast();

            setTimeout(() => {
                sendBtn.innerHTML = originalText;

                Object.assign(sendBtn.style, originalStyle);

                sendBtn.disabled = false;
            }, 2000);
        }, 
        (error) => {
            Toastify({
                text: "Failed to Send Message!",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true,
                style: {
                    background: "rgb(206,16,16)",
                },
            }).showToast();

            setTimeout(() => {
                sendBtn.innerHTML = originalText;

                Object.assign(sendBtn.style, originalStyle);

                sendBtn.disabled = false;
            }, 2000);
            console.log('FAILED...', error);
        });
});