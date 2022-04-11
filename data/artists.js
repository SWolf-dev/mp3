var listArtist = [
    {
        name: "Chi Dân",
        followers: "916K",
        image: "./assets/img/artists/artist10.jpg"
    },
    {
        name: "Phương Ly",
        followers: "77K",
        image: "./assets/img/artists/artist2.jpg"
    },
    {
        name: "Sơn Tùng M-TP",
        followers: "3.1M",
        image: "./assets/img/artists/artist5.jpg"
    },
    {
        name: "AMEE",
        followers: "117K",
        image: "./assets/img/artists/artist3.jpg"
    },
    {
        name: "MCK",
        followers: "56K",
        image: "./assets/img/artists/artist4.jpg"
    },

    {
        name: "Mr. Siro",
        followers: "935K",
        image: "./assets/img/artists/artist6.jpg"
    },
    {
        name: "Han Sara",
        followers: "58K",
        image: "./assets/img/artists/artist7.jpg"
    },
    {
        name: "Bích Phương",
        followers: "648K",
        image: "./assets/img/artists/artist8.jpg"
    },
    {
        name: "Soobin",
        followers: "335K",
        image: "./assets/img/artists/artist9.jpg"
    },
];

const ARTIST_STORAGE_KEY = 'ARTIST';

localStorage.setItem(ARTIST_STORAGE_KEY, JSON.stringify(listArtist));