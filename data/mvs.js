
var listMV = [
    {
        name: "Một Bước Yêu Vạn Dặm Đau",
        author: ["Mr. Siro"],
        time: "11:54",
        authorAvatar: "./assets/img/mvArtists/artist1.jpg",
        image: "./assets/img/MVs/mv1.jpg",
        videoUrl:"https://www.youtube.com/embed/GwCUbhE0TY0",
    },
    {
        name: "Simple Love",
        author: ["Obito", "Seachains", "Davis"],
        time: "03:54",
        authorAvatar: "./assets/img/mvArtists/artist2.jpg",
        image: "./assets/img/MVs/mv2.jpg",
        videoUrl:"https://www.youtube.com/embed/lUrmyU1cnxU",
    },
    {
        name: "Lời Yêu Ngây Dại",
        author: ["Kha"],
        time: "04:33",
        authorAvatar: "./assets/img/mvArtists/artist3.jpg",
        image: "./assets/img/MVs/mv3.jpg",
        videoUrl:"https://www.youtube.com/embed/UBv-GcD3jHE",
    },
    {
        name: "24H",
        author: ["LyLy", "Magazine"],
        time: "04:18",
        authorAvatar: "./assets/img/mvArtists/artist4.jpg",
        image: "./assets/img/MVs/mv4.jpg",
        videoUrl:"https://www.youtube.com/embed/IpniN1Wq68Y",
    },
    {
        name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
        author: ["Da LAB", "Tóc Tiên"],
        time: "05:45",
        authorAvatar: "./assets/img/mvArtists/artist5.jpg",
        image: "./assets/img/MVs/mv5.jpg",
        videoUrl:"https://www.youtube.com/embed/GQ4F9k4USfA",
    },
    {
        name: "Phía Sau Em",
        author: ["Kay Trần", "Binz"],
        time: "04:06",
        authorAvatar: "./assets/img/mvArtists/artist7.jpg",
        image: "./assets/img/MVs/mv7.jpg",
        videoUrl:"https://www.youtube.com/embed/LklFoy_a3bA",
    },
    {
        name: "Mình Yêu nhau đi",
        author: ["Bích Phương"],
        time: "03:52",
        authorAvatar: "./assets/img/mvArtists/artist8.jpg",
        image: "./assets/img/MVs/mv8.jpg",
        videoUrl:"https://www.youtube.com/embed/X8mhF6HgzVA",
    },
    {
        name: "Đừng Về Trễ (Acoustic Version)",
        author: ["Sơn Tùng MTP"],
        time: "04:41",
        authorAvatar: "./assets/img/mvArtists/artist9.jpg",
        image: "./assets/img/MVs/mv9.jpg",
        videoUrl:"https://www.youtube.com/embed/TQAWOFHAXgk",
    },
    {
        name: "Hơn Cả Yêu",
        author: ["Đức Phúc"],
        time: "05:43",
        authorAvatar: "./assets/img/mvArtists/artist10.jpg",
        image: "./assets/img/MVs/mv10.jpg",
        videoUrl:"https://www.youtube.com/embed/__kGJZ-kPno",
    },
    
    
];

const MV_STORAGE_KEY = 'MV';

localStorage.setItem(MV_STORAGE_KEY, JSON.stringify(listMV));