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

const song = [
    {
        songName: "Gabriela",
        artist: "Katseye",
        album: "Beautiful Chaos",
        producer: "Andrew Watt & John Ryan",
        genre: "Pop, Latin, R&B",
        released: "2025, June 7",
        streams: 126954293,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
    },
    
    {
        songName: "Gabriela",
        artist: "Katseye",
        album: "Beautiful Chaos",
        producer: "Andrew Watt & John Ryan",
        genre: "Pop, Latin, R&B",
        released: "2025, June 7",
        streams: 126954293,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.song.container');
    const divLinks = document.querySelectorAll('.song-search option');

    const displaySongs = (filteredSongs) => {
        container.innerHTML = '';
        filteredSongs.forEach(song => {
            const card = document.createElement('div');
            card.className = 'song-card';
            card.innerHTML = `
                <img src="${song.imageUrl}"  loading="lazy" alt="${song.songName} by ${song.artist}">
                <div class="song-info">
                    <h2>${song.songName}</h2>
                    <p><strong>⋆ Artist:</strong> ${song.artist}</p>
                    <p><strong>⋆ Album:</strong> ${song.album}</p>
                    <p><strong>⋆ Producer:</strong> ${song.producer}</p>
                    <p><strong>⋆ Genre:</strong> ${song.genre}</p>
                    <p><strong>⋆ Released:</strong> ${song.released}</p>
                    <p><strong>⋆ Streams:</strong> +${songs.streams.toLocaleString()}</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterSongs = (criteria) => {
        let filteredSongs = song;
        
        switch (criteria) {
            case 'Pop':
                filteredSongs = song.filter(song => song.genre = "Pop");
                break;
            case 'Rock':
                filteredSongs = song.filter(song => song.genre = "Rock");
                break;
            case 'Hip-Hop':
                filteredTemples = song.filter(song => song.genre = "Hip-Hop");
                break;
            default:
                filteredSongs = song;
                break;
        }
        displaySongs(filteredSongs);
    };

    divLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            divLinks.forEach(div => div.classList.remove('all-nav'));
            e.target.classList.add('all-nav');
            filterSongs(e.target.div);
        });
    });

    filterSongs('all');
});





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