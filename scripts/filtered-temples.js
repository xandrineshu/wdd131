
// Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Maryland, US",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },

    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Chihuahua, Mexico",
        dedicated: "1999, March, 6",
        area: 6800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },

    {
        templeName: "Bern Switzerland",
        location: " Münchenbuchsee, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },

    {
        templeName: "Brisbane Australia",
        location: "Queensland, Australia",
        dedicated: "2003, June, 15",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-62132-main.jpg"
    },

    {
        templeName: "St. George Utah",
        location: "St. George, Utah",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },

    {
        templeName: "Paris France",
        location: "Paris, Temple",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },

    {
        templeName: "Seoul Korean",
        location: "Seoul, Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22314.jpg"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                titleName.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                titleName.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                titleName.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                titleName.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                titleName.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('home-nav');
});