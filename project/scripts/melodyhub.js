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

const renderSongs = (filteredSongs) => {
    const songsGrid = document.querySelector(".songs-grid");
    if (!songsGrid) {
        console.error("Element with class 'songs-grid' not found.");
        return;
    }

    songsGrid.innerHTML = "";
    filteredSongs.forEach((song) => {
        const songItem = document.createElement("div");
        songItem.className = "song-item";
        songItem.innerHTML = `
        <img src = "${song.imageUrl}"  loading = "lazy" alt = "${song.songName}" >
            <div class="song-info">
                <h2>${song.songName}</h2>
                <p><strong>⋆ Artist:</strong> ${song.artist}</p>
                <p><strong>⋆ Album:</strong> ${song.album}</p>
                <p><strong>⋆ Producer:</strong> ${song.producer}</p>
                <p><strong>⋆ Genre(s):</strong> ${song.genre}</p>
                <p><strong>⋆ Released:</strong> ${song.released}</p>
                <p><strong>⋆ Streamed:</strong> ${song.streamed.toLocaleString()}</p>
                <a href=${linkURL} class="read-more">Read More</a>
             </div>
        `;
        songsGrid.appendChild(songItem);
    });
};

const songsGrid = document.querySelector(".songs-grid");
if (songsGrid) {
    const song = [
        {
            songName: "Gabriela",
            artist: "Katseye",
            album: "Beautiful Chaos",
            producer: "Andrew Watt, John Ryan",
            genre: "Pop, Latin, R&B",
            released: "2025, June 7",
            streams: 126954293,
            linkURL: "https://www.youtube.com/watch?v=CjnB56tSCQI",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
        },

        {
            songName: "Gabriela",
            artist: "Katseye",
            album: "Beautiful Chaos",
            producer: "Andrew Watt, John Ryan",
            genre: "Pop, Latin, R&B",
            released: "2025, June 7",
            streams: 126954293,
            linkURL: "https://www.youtube.com/watch?v=CjnB56tSCQI",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
        }
    ];

    renderReviews(song);

    const genreSelect = document.getElementById("genre");
    const releasedSelect = document.getElementById("released");

    if (genreSelect && releasedSelect) {
        const applyFilters = () => {
            let filteredSongs = [...songs];

            const selectedGenre = genreSelect.value;
            if (selectedGenre !== "all") {
                filteredReviews = filteredReviews.filter(
                    (review) => review.genre === selectedGenre
                );
            }

            if (sortSelect.value === "rating") {
                filteredSongs.sort((a, b) => b.rating - a.rating);
            }

            renderReviews(filteredReviews);
        };

        genreSelect.addEventListener("change", applyFilters);
        sortSelect.addEventListener("change", applyFilters);
    }
}


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