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

// Search Bar according to genre

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
        linkURL:
            "https://www.youtube.com/watch?v=CjnB56tSCQI&list=RDCjnB56tSCQI&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Katseye_-_Gabriela.jpg/250px-Katseye_-_Gabriela.jpg"
    },
    
    {
        songName: "APT.",
        artist: "Rosé & Bruno Mars",
        album: "Rosie",
        producer: "Bruno Mars, Cirkut, Omer Fedi & Rogét Chahayed",
        genre: "Pop, Pop-Rock, Pop-Punk & New Wave",
        released: "18 October, 2024",
        length: "2:49",
        streams: 1863375071,
        linkURL:
            "https://www.youtube.com/watch?v=ekr2nIex040&list=RDekr2nIex040&start_radio=1",
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
        linkURL:
            "https://www.youtube.com/watch?v=V9PVRfjEBTI&list=RDV9PVRfjEBTI&start_radio=1",
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
        linkURL:
            "https://www.youtube.com/watch?v=c8zq4kAn_O0&list=RDc8zq4kAn_O0&start_radio=1",
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
        linkURL:
            "https://www.youtube.com/watch?v=aSugSGCC12I&list=RDaSugSGCC12I&start_radio=1",
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
        linkURL:
            "https://www.youtube.com/watch?v=wdKk2Qt5RKQ&list=RDwdKk2Qt5RKQ&start_radio=1",
        imageUrl:
            "https://i.scdn.co/image/ab67616d00001e022a2a603db22e07db8c15271c"
    },

    {
        songName: "R U Mine?",
        artist: "Arctic Monkeys",
        album: "AM",
        producer: "Ross Orton",
        genre: "Rock, Indie-Rock, Hard-Rock, Garage Rock, Psychedelic Rock & Stoner Rock",
        released: "27 February 2012",
        length: "3:21",
        streams: 1253353473,
        linkURL:
            "https://www.youtube.com/watch?v=VQH8ZTgna3Q&list=RDVQH8ZTgna3Q&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg/250px-%22AM%22_%28Arctic_Monkeys%29.jpg"
    },

    {
        songName: "Back in Black",
        artist: "AC/DC",
        album: "Back in Black",
        producer: "Robert John 'Mutt' Lange",
        genre: "Rock, Hard-Rock & Heavy Metal",
        released: "25 July, 1980",
        length: "4:15",
        streams: 1928553795,
        linkURL:
            "https://www.youtube.com/watch?v=pAgnJDJN4VA&list=RDpAgnJDJN4VA&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/ACDC_Back_in_Black.png/250px-ACDC_Back_in_Black.png"
    },

    {
        songName: "Good Morning World!",
        artist: "BURNOUT SYNDROMES",
        album: "Good Morning World!",
        producer: "Kumagai Kazuumi & Ishiwatari Junji",
        genre: "Rock, J-Rock & J-Pop",
        released: "August 21, 2019",
        length: "4:09",
        streams: 46899077,
        linkURL:
            "https://www.youtube.com/watch?v=yQEUGxngQN4&list=RDyQEUGxngQN4&start_radio=1",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b273198a764a4e8201af4f294f2a"
    },

    {
        songName: "Still Into You",
        artist: "Paramore",
        album: "Paramore",
        producer: "Justin Meldal-Johnsen",
        genre: "Rock, Power-Pop, Pop-Rock, New Wave, Alternative Rock & Pop-Punk",
        released: "March 14, 2013",
        length: "3:36",
        streams: 1014107214,
        linkURL:
            "https://www.youtube.com/watch?v=OblL026SvD4&list=RDOblL026SvD4&start_radio=1",
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
        linkURL:
            "https://www.youtube.com/watch?v=weU76DGHKU0&list=RDweU76DGHKU0&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Drake_-_What_Did_I_Miss.png/250px-Drake_-_What_Did_I_Miss.png"
    },
    
    {
        songName: "California Love",
        artist: " 2Pac ft. Dr. Dre",
        album: "All Eyez on Me",
        producer: "Dr. Dre",
        genre: "West Coast Hip-Hop, Gangsta-Rap & G-funk",
        released: "December 3, 1995",
        length: "6:29",
        streams: 982901356,
        linkURL:
            "https://www.youtube.com/watch?v=N0VdRLdg2ng",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/California_Love_%281995%29%2C_by_Tupac_Shakur.png/250px-California_Love_%281995%29%2C_by_Tupac_Shakur.png"
    },

    {
        songName: "Luther",
        artist: " Kendrick Lamar & SZA",
        album: "GNX",
        producer: "Sounwave, Antonoff, Bridgeway, Washington, M-Tech & roselilah",
        genre: "R&B and Hip-Hop",
        released: "November 29, 2024",
        length: "2:57",
        streams: 1113252465,
        linkURL:
            "https://www.youtube.com/watch?v=sNY_2TEmzho&list=RDsNY_2TEmzho&start_radio=1",
        imageUrl:
            "https://i1.sndcdn.com/artworks-jZ93rCn38aCM3smD-Uyy2sQ-t500x500.jpg"
    },

    {
        songName: "No Diggity",
        artist: "Blackstreet ft. Dr. Dre & Queen Pen",
        album: " Another Level",
        producer: "Teddy Riley & William 'Skylz' Stewart",
        genre: "R&B, Hip-Hop & Hip-Hop Soul",
        released: "July 29, 1996",
        length: "5:04",
        streams: 954657655,
        linkURL:
            "https://www.youtube.com/watch?v=3KL9mRus19o&list=RD3KL9mRus19o&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/No_Diggity.jpg/250px-No_Diggity.jpg"
    },

    {
        songName: "The Real Slim Shady",
        artist: "Eminem",
        album: "The Marshall Mathers LP",
        producer: "Dr. Dre & Mel-Man",
        genre: "Comedy Hip-Hop",
        released: "	April 18, 2000",
        length: "4:44",
        streams: 2235626713,
        linkURL:
            "https://www.youtube.com/watch?v=eJO5HU_7_1w&list=RDeJO5HU_7_1w&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Eminem_-_The_Real_Slim_Shady_CD_cover.jpg/250px-Eminem_-_The_Real_Slim_Shady_CD_cover.jpg"
    },

    {
        songName: "Sticky",
        artist: "Tyler, the Creator ft. GloRilla, Sexyy Red & Lil Wayne",
        album: "Chromakopia",
        producer: "Tyler, the Creator",
        genre: "Southern Hip-Hop & Trap",
        released: "November 12, 2024",
        length: "4:15",
        streams: 408346855,
        linkURL:
            "https://www.youtube.com/watch?v=16KSivdIGjQ&list=RD16KSivdIGjQ&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/5/5b/Chromakopia_CD_cover.jpg"
    },

    {
        songName: "10,000 Hours",
        artist: "Dan + Shay & Justin Bieber",
        album: "Good Things",
        producer: "Dan Smyers",
        genre: "Country-Pop",
        released: "October 4, 2019",
        length: "2:47",
        streams: 1165457632,
        linkURL:
            "https://www.youtube.com/watch?v=Y2E71oe0aSM&list=RDY2E71oe0aSM&start_radio=1",
        imageUrl:
            "https://i1.sndcdn.com/artworks-000656776837-qtfghs-t500x500.jpg"
    },

    {
        songName: "Before He Cheats",
        artist: "Carrie Underwood",
        album: "Some Hearts",
        producer: "Mark Bright",
        genre: "Country & Country-Rock",
        released: "August 2006",
        length: "3:19",
        streams: 740578275,
        linkURL:
            "https://www.youtube.com/watch?v=WaSy8yy-mr8&list=RDWaSy8yy-mr8&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Before_He_Cheats.jpg/250px-Before_He_Cheats.jpg"
    },

    {
        songName: "Tim McGraw",
        artist: " Taylor Swift",
        album: "Taylor Swift (Deluxe Edition",
        producer: "Nathan Chapman",
        genre: "Country",
        released: "June 19, 2006",
        length: "3:52",
        streams: 156636519,
        linkURL:
            "https://www.youtube.com/watch?v=GkD20ajVxnY&list=RDGkD20ajVxnY&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Taylor_Swift_-_Tim_McGraw.png/250px-Taylor_Swift_-_Tim_McGraw.png"
    },

    {
        songName: "Slim Pickins",
        artist: "Sabrina Carpenter",
        album: "Short n' Sweet",
        producer: "Jack Antonoff",
        genre: "Country, Country-Pop & Folk",
        released: "August 23, 2024",
        length: "2:32",
        streams: 158008334,
        linkURL:
            "https://www.youtube.com/watch?v=TmP-d1KQqQo&list=RDTmP-d1KQqQo&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Short_n%27_Sweet_-_Sabrina_Carpenter.png/250px-Short_n%27_Sweet_-_Sabrina_Carpenter.png"
    },

    {
        songName: "Take Me Home, Country Roads",
        artist: "John Denver",
        album: "Poems, Prayers & Promises",
        producer: "Milt Okun & Susan Ruskin",
        genre: "Country & Folk",
        released: "April 12, 1971",
        length: "3:10",
        streams: 675870628,
        linkURL:
            "https://www.youtube.com/watch?v=1vrEljMfXYo&list=RD1vrEljMfXYo&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/6/6b/Poems%2C_Prayers_and_Promises.jpg"
    },

    {
        songName: "Folded",
        artist: "Kehlani",
        album: "Folded",
        producer: "Andre Harris, D.K. The Punisher, Don Mills & Riddick-Tynes",
        genre: "R&B",
        released: "June 11, 2025",
        length: "3:58",
        streams: 68418745,
        linkURL:
            "https://www.youtube.com/watch?v=KFMYx1TibeQ&list=RDKFMYx1TibeQ&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Kehlani_-_Folded.jpg/250px-Kehlani_-_Folded.jpg"
    },

    {
        songName: "Use Your Heart",
        artist: "SWV",
        album: "New Beginning",
        producer: "The Neptunes",
        genre: "R&B",
        released: "July 23, 1996",
        length: "4:50",
        streams: 32373260,
        linkURL:
            "https://www.youtube.com/watch?v=7H_o5whdCQA&list=RD7H_o5whdCQA&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/SWVuseyourheart.jpg/250px-SWVuseyourheart.jpg"
    },

    {
        songName: "Best Part",
        artist: "Daniel Caesar ft. H.E.R.",
        album: "Freudian & H.E.R",
        producer: "Jordan Evans & Matthew Burnett",
        genre: "Acoustic, Indie-Pop & R&B",
        released: "August 25, 2017",
        length: "3:29",
        streams: 1844053559,
        linkURL:
            "https://www.youtube.com/watch?v=vBy7FaapGRo&list=RDvBy7FaapGRo&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/4/4f/H.E.R._%282017%29_album_cover.jpg"
    },

    {
        songName: "Don't Forget About Us",
        artist: "Mariah Carey",
        album: "The Emancipation of Mimi: Ultra Platinum Edition",
        producer: "Mariah Carey, Jermaine Dupri & Bryan- Michael Cox",
        genre: "Hip-Hop Soul & R&B",
        released: "October 10, 2005",
        length: "3:53",
        streams: 61765120,
        linkURL:
            "https://www.youtube.com/watch?v=8tZkzL4j3BU&list=RD8tZkzL4j3BU&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/1/11/Don%27t_Forget_About_Us_Mariah_Carey.png"
    },

    {
        songName: "Stickwitu ft. Avant",
        artist: "The Pussycat Dolls",
        album: "PCD",
        producer: "Ron Fair",
        genre: "Pop & R&B",
        released: "September 26, 2005",
        length: "3:27",
        streams: 434779855,
        linkURL:
            "https://www.youtube.com/watch?v=K1uNjmxJQUo&list=RDK1uNjmxJQUo&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Pussycat_Dolls_-_Stickwitu.png/250px-The_Pussycat_Dolls_-_Stickwitu.png"
    },

    {
        songName: "Clarity",
        artist: "Zedd ft. Foxes",
        album: "Clarity",
        producer: "Zedd & Jonny 'Ghostwriter' Harris",
        genre: "Progressive House, Electro House, Dance-Pop & EDM",
        released: "14 November 2012",
        length: "4:31",
        streams: 711201349,
        linkURL:
            "https://www.youtube.com/watch?v=IxxstCcJlsc&list=RDIxxstCcJlsc&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Zedd_-_%22Clarity%22_%28Single%29.png/250px-Zedd_-_%22Clarity%22_%28Single%29.png"
    },

    {
        songName: "Closer",
        artist: "The Chainsmokers ft. Halsey",
        album: "Collage",
        producer: "The Chainsmokers",
        genre: "Future Bass, Electro-Pop & EDM",
        released: "July 29, 2016",
        length: "4:04",
        streams: 3373952073,
        linkURL:
            "https://www.youtube.com/watch?v=0zGcUoRlhmw&list=RD0zGcUoRlhmw&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png/250px-Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
    },

    {
        songName: "Timber",
        artist: "Pitbull ft. Kesha",
        album: "Meltdown",
        producer: "Dr.Luke, Cirkut & Sermstyle",
        genre: "Dance-Pop, EDM & Folktronica",
        released: "October 7, 2013",
        length: "3:24",
        streams: 1909428616,
        linkURL:
            "https://www.youtube.com/watch?v=hHUbLv4ThOo&list=RDhHUbLv4ThOo&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Pitbull_featuring_Kesha_-_Timber.jpg/250px-Pitbull_featuring_Kesha_-_Timber.jpg"
    },

    {
        songName: "In the Name of Love",
        artist: "Martin Garrix & Bebe Rexha",
        album: "none",
        producer: "Martin Garrix, Matt Rad, Steve James, Simon Says & DJ Isis",
        genre: "EDM & Future Bass",
        released: "July 29, 2016",
        length: "3:18",
        streams: 1626171112,
        linkURL:
            "https://www.youtube.com/watch?v=RnBT9uUYb1w&list=RDRnBT9uUYb1w&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/In_the_Name_of_Love_Cover_Art_by_Bebe_Rexha_and_Martin_Garrix.jpeg/250px-In_the_Name_of_Love_Cover_Art_by_Bebe_Rexha_and_Martin_Garrix.jpeg"
    },

    {
        songName: "Rather Be",
        artist: "Clean Bandit ft. Jess Glynne",
        album: "New Eyes",
        producer: "Grace Chatto & Jack Patterson",
        genre: "EDM, House, Dance-Pop, Euro House & Deep House",
        released: "January 17, 2014",
        length: "3:47",
        streams: 1600016388,
        linkURL:
            "https://www.youtube.com/watch?v=m-M1AtrxztU",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Rather_Be_single_cover.jpg/250px-Rather_Be_single_cover.jpg"
    },

    {
        songName: "Tchaikovsky: Swan Lake, Op. 20, Act 2: No.10, Scene.Moderato",
        artist: "Pyotr Ilyich Tchaikovsky",
        album: "Tchaikovsky: Swan Lake",
        producer: "Julius Reisinger ",
        genre: "Classical Ballet",
        released: "March 4, 1877",
        length: "2:46",
        streams: 166829958,
        linkURL:
            "https://www.youtube.com/watch?v=LiGjvEq0QHA&list=RDLiGjvEq0QHA&start_radio=1",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b2731d9c6602aa95abd8c5b146da"
    },

    {
        songName: "Tchaikovsky: The Nutcracker, Op. 71, Act 2: No.13, Waltz of the Flowers",
        artist: "Pyotr Ilyich Tchaikovsky",
        album: "Tchaikovsky: The Nutcracker",
        producer: "George Balanchine's",
        genre: "Classical Ballet",
        released: "December 18, 1892",
        length: "6:55",
        streams: 58960605,
        linkURL:
            "https://www.youtube.com/watch?v=ZTD8lYZ4oJM",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b273f1972145094112a1268035f1"
    },

    {
        songName: "Cry Me a River",
        artist: "Julie London",
        album: "none",
        producer: "Bobby Troup",
        genre: "Jazz",
        released: "October 1955",
        length: "2:58",
        streams: 80060051,
        linkURL:
            "https://www.youtube.com/watch?v=gCGNYJOrebA",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b273320b023f0b74149959eb8069"
    },

    {
        songName: "La Vie en rose",
        artist: "Édith Piaf",
        album: "Édith Piaf",
        producer: "Édith Piaf",
        genre: "Jazz & French Indie-Pop",
        released: "May 1, 1947",
        length: "3:06",
        streams: 200373220,
        linkURL:
            "https://www.youtube.com/watch?v=qPU8mENUBXk&list=RDqPU8mENUBXk&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Edith_Piaf_La_Vie_en_rose_7-inch_single.png/250px-Edith_Piaf_La_Vie_en_rose_7-inch_single.png"
    },

    {
        songName: "Fly Me to the Moon",
        artist: "Kaye Ballard",
        album: "none",
        producer: "Kaye Ballard",
        genre: "Jazz",
        released: "April 1954",
        length: "2:14",
        streams: "none",
        linkURL:
            "https://www.youtube.com/watch?v=vpC_N19UlIk&list=RDvpC_N19UlIk&start_radio=1",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kaye_Ballard_In_Other_Words_Decca_Records_Inc._Catalog_Number_9_29114_Photographed_15_April_2014.JPG/250px-Kaye_Ballard_In_Other_Words_Decca_Records_Inc._Catalog_Number_9_29114_Photographed_15_April_2014.JPG"
    },

    {
        songName: "Valentine",
        artist: "Laufey",
        album: "Everything I Know About Love",
        producer: "Laufey & Spencer Stewart",
        genre: "Traditional-Pop & Classical-Jazz",
        released: "February 14, 2022",
        length: "2:48",
        streams: 326479523,
        linkURL:
            "https://www.youtube.com/watch?v=tyKu0uZS86Q",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Laufey_Valentine_single_cover.jpeg/250px-Laufey_Valentine_single_cover.jpeg"
    },

    {
        songName: "Stormy Weather",
        artist: "Etta James",
        album: "At Last!",
        producer: "Phil Chess and Leonard Chess",
        genre: "Jazz and R&B",
        released: "November 15, 1960",
        length: "3:07",
        streams: 133429639,
        linkURL:
            "https://www.youtube.com/watch?v=9jDpI5-NzXI&list=RD9jDpI5-NzXI&start_radio=1",
        imageUrl:
            "https://static.qobuz.com/images/covers/mc/uh/x0mmvjfieuhmc_600.jpg"
    },

    {
        songName: "Nobody",
        artist: "Wonder Girls",
        album: "The Wonder Years: Trilogy",
        producer: "Park Jin-young",
        genre: "K-Pop, Dance-Pop & Electropop",
        released: "September 22, 2008",
        length: "3:34",
        streams: 24464171,
        linkURL:
            "https://www.youtube.com/watch?v=QZBn1e9pr2Q",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Wonder_Girls_Nobody_Single.jpg/250px-Wonder_Girls_Nobody_Single.jpg"
    },

    {
        songName: "Boy with Luv ft. Halsey",
        artist: "BTS",
        album: " Map of the Soul: Persona",
        producer: "Pdogg",
        genre: "K-Pop, Funk, Pop, Nu-Disco & Electropop",
        released: "April 12, 2019",
        length: "3:50",
        streams: 1295198869,
        linkURL:
            "https://www.youtube.com/watch?v=XsX3ATc3FbA&list=RDXsX3ATc3FbA&start_radio=1",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f"
    },

    {
        songName: "Ddu-Du Ddu-Du",
        artist: "Blackpink",
        album: "Square Up",
        producer: "Teddy Park, 24, Bekuh Boom & R.Tee",
        genre: "K-Pop, Pop-Rap & EDM Trap",
        released: "June 15, 2018",
        length: "3:31",
        streams: 796043287,
        linkURL:
            "https://www.youtube.com/watch?v=IHNzOHi8sJs",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Black_Pink_-_Ddu-Du_Ddu-Du_%28Japanese_version%29_artwork.png/250px-Black_Pink_-_Ddu-Du_Ddu-Du_%28Japanese_version%29_artwork.png"
    },

    {
        songName: "Cupid",
        artist: "Fifty Fifty",
        album: "The Beginning",
        producer: "SIAHN, von Mentzer, Felländer-Tsai & Udin",
        genre: "K-Pop, Disco-Pop, Synth-Pop & Bubblegum Pop",
        released: "February 24, 2023",
        length: "2:54",
        streams: 259430636,
        linkURL:
            "https://www.youtube.com/watch?v=Qc7_zRjH808",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Fifty_Fifty_-_The_Beginning_Cupid.png/250px-Fifty_Fifty_-_The_Beginning_Cupid.png"
    },

    {
        songName: "Gangnam Style",
        artist: "Psy",
        album: "Psy 6 (Six Rules), Part 1",
        producer: "Park Jae-sang (Psy), Yoo Gun-hyung & Yang Hyun-suk",
        genre: "K-Pop, Hip-Hop, Dance-Pop & EDM",
        released: "July 15, 2012",
        length: "3:39",
        streams: 583133188,
        linkURL:
            "https://www.youtube.com/watch?v=9bZkp7q19f0",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Gangnam_Style_Official_Cover.png/250px-Gangnam_Style_Official_Cover.png"
    },

    {
        songName: "Growl",
        artist: "EXO",
        album: "XOXO",
        producer: "Seo Ji-eum & Wang Yajun",
        genre: "K-Pop",
        released: "August 5, 2013",
        length: "3:27",
        streams: 144171894,
        linkURL:
            "https://www.youtube.com/watch?v=I3dezFzsNss&list=RDI3dezFzsNss&start_radio=1",
        imageUrl:
            "https://images.genius.com/572982ca9df7e91c9422b497021330b2.1000x1000x1.jpg"
    },

    {
        songName: "No Doubt",
        artist: "ENHYPEN",
        album: "ROMANCE : UNTOLD -daydream-",
        producer: "Johnny Goldstein, Armadillo, & Ranga",
        genre: "K-Pop, R&B & Synth-Pop",
        released: "November 11, 2024",
        length: "2:47",
        streams: 92386679,
        linkURL:
            "https://www.youtube.com/watch?v=rDolt3jJRsM",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b273ac9d6ee9be9186ff1a28c900"
    },

    {
        songName: "Rude",
        artist: "Magic!",
        album: "Don't Kill the Magic",
        producer: "Adam Messinger",
        genre: "Reggae Fusion",
        released: "October 11, 2013",
        length: "3:44",
        streams: 1876628822,
        linkURL:
            "https://www.youtube.com/watch?v=PIh2xe4jnpk",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Magic%21_-_Rude.png/250px-Magic%21_-_Rude.png"
    },

    {
        songName: "Could You Be Loved",
        artist: "Bob Marley and the Wailers",
        album: "Uprising",
        producer: "Bob Marley & Chris Blackwell",
        genre: "Reggae & Disco",
        released: "16 May 1980",
        length: "3:56",
        streams: 1233757634,
        linkURL:
            "https://www.youtube.com/watch?v=1ti2YCFgCoI",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/CouldYouBeLoved.jpg/250px-CouldYouBeLoved.jpg"
    },

    {
        songName: "Mahal Kita ",
        artist: "tropical Depression",
        album: "Kapayapaan",
        producer: "F. Fernandez & D. Gamboa",
        genre: "Reggae",
        released: "January 1, 1994",
        length: "3:48",
        streams: 4667873,
        linkURL:
            "https://www.youtube.com/watch?v=yu6tBy4u_DI&list=RDyu6tBy4u_DI&start_radio=1",
        imageUrl:
            "https://i.scdn.co/image/ab67616d0000b2734dc05f732005e872ef29e9e1"
    }

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
                        <h2>⇆ㅤ ㅤ◁<a href="${song.linkURL}"><p>Play</p></a>▷ ㅤㅤ↻</h2>
                    </div>

                    <div class="song-info">
                        <p><strong>✮ Artist:</strong> ${song.artist}</p>
                        <p><strong>✮ Album:</strong> ${song.album}</p>
                        <p><strong>✮ Producer(s):</strong> ${song.producer}</p>
                        <p><strong>✮ Genre:</strong> ${song.genre}</p>
                        <p><strong>✮ Released:</strong> ${song.released}</p>
                        <p><strong>✮ Streams:</strong> +${song.streams.toLocaleString()}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const genreSelect = document.getElementById('genreSelect');
    if (genreSelect) {
        genreSelect.addEventListener('change', function () {
            filterSongs(this.value);
        });
    }

    function filterSongs(selectedGenre) {
        const filteredSongs = selectedGenre === 'All'
            ? song
            : song.filter(s => typeof s.genre === 'string' && s.genre.toLowerCase().includes(selectedGenre.toLowerCase()));
        displaySongs(filteredSongs);
    }

    divLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            divLinks.forEach(div => div.classList.remove('all-nav'));
            e.target.classList.add('all-nav');
            filterSongs(e.target.div);
        });
    });

    filterSongs('All');
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