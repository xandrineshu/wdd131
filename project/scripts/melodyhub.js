// For the menu button and navigation toggle

document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-links');
    const nameHeader = document.querySelector('.title');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

/////////////////////////////////////////////////////////////////////////////////////////

// Search Bar



////////////////////////////////////////////////////////////////////////////////////////

// Contact Form

document.addEventListener('DOMContentLoaded', function () {
    const country = [
        { name: "Canada" },
        { name: "China" },
        { name: "France" },
        { name: "Italy" },
        { name: "Japan" },
        { name: "Korea" },
        { name: "Philippines" },
        { name: "Spain" },
        { name: "Thailand" },
        { name: "USA" },
        { name: "other" }
    ];

    const selectElement = document.getElementById('country');
    if (selectElement) {
        country.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            option.textContent = country.name;
            selectElement.appendChild(option);
        });
    }

    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', 0);
    }
});


////////////////////////////////////////////////////////////////////////////////////////

// Footer and Date

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `⋆౨ৎ˚⟡ Last update: ${lastModified}`;