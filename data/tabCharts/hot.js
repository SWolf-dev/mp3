
var listSongCharts = [
    {
        name: "Chạy Về Khóc Với Anh",
        singers: ["Đức Phúc"],
        rank: "1",
        time: "03:57",
        path: "./assets/music/listSong1/song3.mp3",
        image: "./assets/img/musics/song3.jpg"
    },
    {
        name: "Ngày Mưa",
        singers: ["DMYB","Wack"],
        rank: "2",
        time: "03:57",
        path: "./assets/music/listSong1/song17.mp3",
        image: "./assets/img/musics/song17.jpg"
    },
    {
        name: "Ngày Đầu Tiên",
        singers: ["Đức Phúc"],
        rank: "3",
        time: "03:28",
        path: "./assets/music/listSong1/song18.mp3",
        image: "./assets/img/musics/song18.jpg"
    },
    {
        name: "Bước Chân Du Sĩ",
        singers: ["Vân Du","Hair Lưu"],
        rank: "4",
        time: "04:13",
        path: "./assets/music/listSong1/song19.mp3",
        image: "./assets/img/musics/song19.jpg"
    },
    {
        name: "Ngọt",
        singers: ["JauM"],
        rank: "5",
        time: "03:40",
        path: "./assets/music/listSong1/song20.mp3",
        image: "./assets/img/musics/song20.jpg"
    },
    {
        name: "Xem Như Em Chẳng May",
        singers: ["Chu Thúy Quỳnh"],
        rank: "6",
        time: "03:25",
        path: "./assets/music/listSong1/song21.mp3",
        image: "./assets/img/musics/song21.jpg"
    },
    {
        name: "Chạy về nơi phía anh",
        rank: "7",
        singers: ["Hương Ly"],
        time: "03:00",
        path: "./assets/music/listSong1/song1.mp3",
        image: "./assets/img/musics/song1.jpg"
    },
    
    {
        name: "Cách Xa Nhau Rồi",
        singers: ["Yuniboo","Út Nhị mimo"],
        rank: "8",
        time: "04:39",
        path: "./assets/music/listSong1/song22.mp3",
        image: "./assets/img/musics/song22.jpg"
    },
    {
        name: "Vô Tình",
        singers: ["Xesi","Hoaprox"],
        rank: "9",
        time: "04:33",
        path: "./assets/music/listSong1/song22.mp3",
        image: "./assets/img/musics/song22.jpg"
    },
    {
        name: "Hát Cho Mình Em Nge",
        singers: ["Minh"],
        rank: "10",
        time: "02:48",
        path: "./assets/music/listSong1/song22.mp3",
        image: "./assets/img/musics/song22.jpg"
    },
];

const SONG_CHARTS_STORAGE_KEY = 'SONG_CHARTS';

localStorage.setItem(SONG_CHARTS_STORAGE_KEY, JSON.stringify(listSongCharts));

