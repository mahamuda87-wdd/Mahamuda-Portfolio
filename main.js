// ===============================
// HERO BUTTON EFFECT
// ===============================

const projectButton = document.querySelector(".hero-buttons .btn-primary");

projectButton.addEventListener("click", function () {

    console.log("User clicked View Projects");

});

// =================================
// CONTACT FORM
// =================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#ff6b6b";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "#7cfc9a";


    contactForm.reset();

});
