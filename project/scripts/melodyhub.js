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
        genre: "Pop, Latin & R&B",
        released: "June 7, 2025",
        length: "3:17",
        streams: 126954293,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
    },
    
    {
        songName: "APT.",
        artist: "Rosé & Bruno Mars",
        album: "Rosie",
        producer: "Bruno Mars, Cirkut, Omer Fedi & Rogét Chahayed",
        genre: "Pop, Pop Rock, Pop-Punk & New Wave",
        released: "18 October, 2024",
        length: "2:49",
        streams: 1863375071,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ros%C3%A9_and_Bruno_Mars_-_Apt..png/250px-Ros%C3%A9_and_Bruno_Mars_-_Apt..png"
    },

    {
        songName: "Birds of a Feather",
        artist: "Billie Eilish",
        album: "Hit Me Hard and Soft",
        producer: "Finneas O'Connell",
        genre: "Pop & New Wave",
        released: "July 2, 2024",
        length: "3:30",
        streams: 2903129414,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Billie_Eilish_-_Birds_of_a_Feather_7%22_Vinyl_cover.png/250px-Billie_Eilish_-_Birds_of_a_Feather_7%22_Vinyl_cover.png"
    },

    {
        songName: "Back to Friends",
        artist: "Sombr",
        album: "I Barely Know Her",
        producer: "Sombr",
        genre: "Indie-Pop",
        released: "December 27, 2024",
        length: "3:19",
        streams: 620525194,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg/250px-Official_single_cover_of_%22Back_to_Friends%22_by_Sombr.jpeg"
    },

    {
        songName: "Manchild",
        artist: "Sabrina Carpenter",
        album: "Man's Best Friend",
        producer: "Jack Antonoff & Sabrina Carpenter",
        genre: "Synth-Pop & Pop",
        released: "June 5, 2025",
        length: "3:33",
        streams: 263183711,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Sabrina_Carpenter_-_Manchild.png/250px-Sabrina_Carpenter_-_Manchild.png"
    },

    {
        songName: "Worthy",
        artist: "The Home Team",
        album: "The Crucible Of Life",
        producer: "Zach Jones & Brian Butcher",
        genre: "Alternative/Indie, Pop & Rock",
        released: "May 16, 2025",
        length: "3:11",
        streams: 6084135,
        imageUrl:
            "https://t2.genius.com/unsafe/180x180/https%3A%2F%2Fimages.genius.com%2F197dc616e5081f7ee4c1967e5dc76bd1.1000x1000x1.png"
    },

    {
        songName: "R U Mine?",
        artist: "Arctic Monkeys",
        album: "AM",
        producer: "Ross Orton",
        genre: "Rock, Indie Rock, Hard Rock, Garage Rock, Psychedelic Rock & Stoner Rock",
        released: "27 February 2012",
        length: "3:21",
        streams: 1253353473,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Arctic_Monkeys_-_R_U_Mine.png/250px-Arctic_Monkeys_-_R_U_Mine.png"
    },

    {
        songName: "Back in Black",
        artist: "AC/DC",
        album: "Back in Black",
        producer: "Robert John 'Mutt' Lange",
        genre: "Rock, Hard Rock & Heavy Metal",
        released: "25 July, 1980",
        length: "4:15",
        streams: 1928553795,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/ACDC_Back_in_Black.png/250px-ACDC_Back_in_Black.png"
    },

    {
        songName: "Good Morning World!",
        artist: "BURNOUT SYNDROMES",
        album: "Good Morning World!",
        producer: "Kumagai Kazuumi & Ishiwatari Junji",
        genre: "Rock, Japanese Rock & J-Pop",
        released: "August 21, 2019",
        length: "4:09",
        streams: 46899077,
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b273198a764a4e8201af4f294f2a"
    },

    {
        songName: "Still Into You",
        artist: "Paramore",
        album: "Paramore",
        producer: "Justin Meldal-Johnsen",
        genre: "Rock, Power Pop, Pop Rock, New Wave, Alternative Rock & Pop-Punk",
        released: "March 14, 2013",
        length: "3:36",
        streams: 1014107214,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Cover_paramore%27s_song_still_into_you.jpg/250px-Cover_paramore%27s_song_still_into_you.jpg"
    },

    {
        songName: "What Did I Miss?",
        artist: "Drake",
        album: "Iceman",
        producer: "London Cyr, O Lil Angel, DJ Lewis, Tay Keith, Oz, FnZ, Elyas, Gyz & Patron",
        genre: "Hip-Hop & Trap",
        released: "July 5, 2025",
        length: "3:14",
        streams: 64916480,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Drake_-_What_Did_I_Miss.png/250px-Drake_-_What_Did_I_Miss.png"
    },

    
    // {
    //    songName: "",
    //    artist: "",
    //    album: "",
    //    producer: "",
    //    genre: "",
    //    released: "",
    //    length: "",
    //    streams: ,
    //    imageUrl:
    //        ""
    // },

    // {
    //    songName: "",
    //    artist: "",
    //    album: "",
    //    producer: "",
    //    genre: "",
    //    released: "",
    //    length: "",
    //    streams: ,
    //    imageUrl:
    //        ""
    // },


];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const divLinks = document.querySelectorAll('.song-search option');

    const displaySongs = (filteredSongs) => {
        container.innerHTML = '';
        filteredSongs.forEach(song => {
            const card = document.createElement('div');
            card.className = 'song-card';
            card.innerHTML = `
                <img src="${song.imageUrl}"  loading="lazy" alt="${song.songName} by ${song.artist}">
                <div class="song-box">
                    <div class="song-title">
                        <h1>${song.songName}</h1>
                        <h2> 01:43 ━━━━●───── ${song.length}</h2>
                        <h2>⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻</h2>
                    </div>

                    <div class="song-info">
                        <p><strong>✮ Artist:</strong> ${song.artist}</p>
                        <p><strong>✮ Album:</strong> ${song.album}</p>
                        <p><strong>✮ Producer:</strong> ${song.producer}</p>
                        <p><strong>✮ Genre:</strong> ${song.genre}</p>
                        <p><strong>✮ Released:</strong> ${song.released}</p>
                        <p><strong>✮ Streams:</strong> +${song.streams.toLocaleString()}</p>
                    </div>
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
                filteredSongs = song.filter(song => song.genre = "Hip-Hop");
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