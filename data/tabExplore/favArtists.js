var listFavArtist = [
    {
        explication: "Từ thư viện của bạn",
        name: "Chi Dân",
        songs: [
            "./assets/img/tabExplore/singer/singer1_1.jpg",
            "./assets/img/tabExplore/singer/singer1_2.jpg",
            "./assets/img/tabExplore/singer/singer1_3.jpg",
            "./assets/img/tabExplore/singer/singer1_4.jpg"
        ],
        image: "./assets/img/tabExplore/singer/singer1.jpg",
    },
    {
        explication: "Vì bạn nghe nhiều",
        name: "Alan Walker",
        songs: [
            "./assets/img/tabExplore/specialList/alan1.jpg",
            "./assets/img/tabExplore/specialList/alan2.jpg",
            "./assets/img/tabExplore/specialList/alan3.jpg",
            "./assets/img/tabExplore/specialList/alan4.jpg"
        ],
        image: "./assets/img/tabExplore/specialList/alan5.jpg",
    },
    {
        explication: "Từ thư viện của bạn",
        name: "Sơn Tùng M-TP",
        songs: [
            "./assets/img/tabExplore/singer/singer2_1.jpg",
            "./assets/img/tabExplore/singer/singer2_2.jpg",
            "./assets/img/tabExplore/singer/singer2_3.jpg",
            "./assets/img/tabExplore/singer/singer2_4.jpg"
        ],
        image: "./assets/img/tabExplore/singer/singer2.jpg",
    },
    {
        explication: "Có thể bạn thích",
        name: "Hương Ly",
        songs: [
            "./assets/img/tabExplore/singer/singer3_1.jpg",
            "./assets/img/tabExplore/singer/singer3_2.jpg",
            "./assets/img/tabExplore/singer/singer3_3.jpg",
            "./assets/img/tabExplore/singer/singer3_4.jpg"
        ],
        image: "./assets/img/tabExplore/singer/singer3.jpg",
    },
    {
        explication: "Bạn đã quan tâm",
        name: "Khánh Phương",
        songs: [
            "./assets/img/tabExplore/singer/singer4_1.jpg",
            "./assets/img/tabExplore/singer/singer4_2.jpg",
            "./assets/img/tabExplore/singer/singer4_3.jpg",
            "./assets/img/tabExplore/singer/singer4_4.jpg"
        ],
        image: "./assets/img/tabExplore/singer/singer4.jpg",
    },
    {
        explication: "Vì bạn nghe nhiều",
        name: "Bích Phương",
        songs: [
            "./assets/img/tabExplore/singer/singer5_1.jpg",
            "./assets/img/tabExplore/singer/singer5_2.jpg",
            "./assets/img/tabExplore/singer/singer5_3.jpg",
            "./assets/img/tabExplore/singer/singer5_4.jpg",
        ],
        image: "./assets/img/tabExplore/singer/singer5.jpg",
    },
    {
        explication: "Vì bạn ưa thích",
        name: "Vĩnh Thuyền Kim",
        songs: [
            "./assets/img/tabExplore/singer/singer6_1.jpg",
            "./assets/img/tabExplore/singer/singer6_2.jpg",
            "./assets/img/tabExplore/singer/singer6_3.jpg",
            "./assets/img/tabExplore/singer/singer6_4.jpg",
        ],
        image: "./assets/img/tabExplore/singer/singer6.jpg",
    },
    {
        explication: "Bạn nghe gần đây",
        name: "SOOBIN",
        songs: [
            "./assets/img/tabExplore/singer/singer7_1.jpg",
            "./assets/img/tabExplore/singer/singer7_2.jpg",
            "./assets/img/tabExplore/singer/singer7_3.jpg",
            "./assets/img/tabExplore/singer/singer7_4.jpg",
        ],
        image: "./assets/img/tabExplore/singer/singer7.jpg",
    },
    {
        explication: "Có lẽ bạn thích",
        name: "Khởi My",
        songs: [
            "./assets/img/tabExplore/singer/singer8_1.jpg",
            "./assets/img/tabExplore/singer/singer8_2.jpg",
            "./assets/img/tabExplore/singer/singer8_3.jpg",
            "./assets/img/tabExplore/singer/singer8_4.jpg",
        ],
        image: "./assets/img/tabExplore/singer/singer8.jpg",
    },
];


const FAVORITE_ARTIST_STORAGE_KEY = 'FAVORITE_ARTIST';

localStorage.setItem(FAVORITE_ARTIST_STORAGE_KEY, JSON.stringify(listFavArtist));