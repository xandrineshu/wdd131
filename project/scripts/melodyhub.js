// For the menu button and navigation toggle

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-links');
    const titleHeader = document.querySelector('.title');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
        titleHeader.classList.toggle('hidden');
    });
});


////////////////////////////////////////////////////////////////////////////////////////

// Contact Form

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const contact = {
            name: userName,
            email: userEmail,
            subject: subject,
            message: message,
        };

        localStorage.setItem("contact", JSON.stringify(contact));

        alert("Your Contact Form has been submitted successfully! Thank you for reaching out.");
    });
}

// Load Contact data
window.addEventListener("load", () => {
    const contactData = localStorage.getItem("contact");
    if (contactData) {
        const contact = JSON.parse(contactData);
        console.log("Saved Contact:", contact);
    }
});


////////////////////////////////////////////////////////////////////////////////////////

// For footer and date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `⋆౨ৎ˚⟡ Last update: ${lastModified}`;