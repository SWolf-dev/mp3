
var listSong = [
    [
        {
            name: "Chạy về nơi phía anh",
            singer: ["Khắc Việt"],
            path: "./assets/music/listSong1/song2.mp3",
            image: "./assets/img/musics/song2.jpg",
            encodeId:'ZW8W778A'
        },
        {
            name: "Cứ Chill Thôi",
            singer: ["Chillies", "Suni Hạ Linh", "Rhymastic"],
            path: "./assets/music/listSong1/song1.mp3",
            image: "./assets/img/musics/song1.jpg"
        },
        {
            name: "Chạy về khóc với anh",
            singer: ["ERIK"],
            path: "./assets/music/listSong1/song3.mp3",
            image: "./assets/img/musics/song3.jpg",
            encodeId: 'ZZO0F8BW'
        },
        {
            name: "Cách xa nhau rồi",
            singer: ["Yuniboo","Út Nhị mimo"],
            path: "./assets/music/listSong1/song5.mp3",
            image: "./assets/img/musics/song5.jpg",
            encodeId: 'ZZUUOE0C'
        },
        {
            name: "Thương em đến già",
            singer: ["Lê Bảo Bình"],
            path: "./assets/music/listSong1/song6.mp3",
            image: "./assets/img/musics/song6.jpg",
            encodeId: 'ZUFZ0CD6'
        },
        {
            name: "Nevada",
            singer: ["Victone"],
            path: "./assets/music/listSong1/song7.mp3",
            image: "./assets/img/musics/song7.jpg",
            encodeId: 'ZW7UBDZB',
        },
        {
            name: "Vô Tình",
            singer: ["Xesi", "Hoaprox"],
            path: "./assets/music/listSong1/song8.mp3",
            image: "./assets/img/musics/song8.jpg",
            encodeId: 'ZW9DC99A',
        }
    ],
    [
        {
            name: "Ngày Mưa",
            singer: ["DMYB","Wack"],
            path: "./assets/music/listSong1/song17.mp3",
            image: "./assets/img/musics/song17.jpg",
            
        },
        {
            name: "Ngày Đầu Tiên",
            singer: ["Đức Phúc"],
            path: "./assets/music/listSong1/song18.mp3",
            image: "./assets/img/musics/song18.jpg",
            encodeId: 'ZZU9CBEU',
        },
        {
            name: "Bước Chân Du Sĩ",
            singer: ["Vân Du","Hair Lưu"],
            path: "./assets/music/listSong1/song19.mp3",
            image: "./assets/img/musics/song19.jpg"
        },
        {
            name: "Ngọt",
            singer: ["JauM"],
            path: "./assets/music/listSong1/song20.mp3",
            image: "./assets/img/musics/song20.jpg"
        },
        {
            name: "Xem Như Em Chẳng May",
            singer: ["Chu Thúy Quỳnh"],
            path: "./assets/music/listSong1/song21.mp3",
            image: "./assets/img/musics/song21.jpg",
            encodeId: 'ZUUZWU7F',
        },
        {
            name: "Hát Cho Mình Em Nge",
            singer: ["Minh"],
            path: "./assets/music/listSong1/song22.mp3",
            image: "./assets/img/musics/song22.jpg"
        },
    ],
    [
        {
            name: "Legends never die",
            singer: [""],
            path: "./assets/music/listSong1/song23.mp3",
            image: "./assets/img/musics/song23.jpg",
            encodeId: 'ZW8W7C7O', 
        },
        {
            name: "Unstoppable",
            singer: ["Sia"],
            path: "./assets/music/listSong1/song24.mp3",
            image: "./assets/img/musics/song24.jpg",
            encodeId: 'ZW7O99BA',
        },
        {
            name: "Save Me",
            singer: ["DEAMN"],
            path: "./assets/music/listSong1/song25.mp3",
            image: "./assets/img/musics/song25.jpg",
            encodeId: 'ZW79FA6Z',
        },
        {
            name: "The Spectre",
            singer: ["Alan Walker"],
            path: "./assets/music/listSong1/song9.mp3",
            image: "./assets/img/musics/song9.jpg",
            encodeId: 'ZW8I90UC',
        },
        {
            name: "On My Way",
            singer: ["Alan Walker","Sabrina Carpenter","Farruko"],
            path: "./assets/music/listSong1/song11.mp3",
            image: "./assets/img/musics/song11.jpg",
            encodeId: 'ZWABOA0F',
        },
        {
            name: "Alone",
            singer: ["Alan Walker"],
            path: "./assets/music/listSong1/song13.mp3",
            image: "./assets/img/musics/song13.jpg",
            encodeId: 'ZW78AWZF',
        },
        {
            name: "Faded",
            singer: ["Alan Walker"],
            path: "./assets/music/listSong1/song10.mp3",
            image: "./assets/img/musics/song10.jpg",
            encodeId: 'ZW7O8OI9',
        },
        {
            name: "Lily",
            singer: ["Alan Walker","K391","Emelie Hollow"],
            path: "./assets/music/listSong1/song14.mp3",
            image: "./assets/img/musics/song14.jpg",
            encodeId: 'ZWA0OA6F', 
        },
        {
            name: "Diamon Heart",
            singer: ["Alan Walker","Sophia","Somajo"],
            path: "./assets/music/listSong1/song15.mp3",
            image: "./assets/img/musics/song15.jpg"
        },
        {
            name: "Darkside",
            singer: ["Alan Walker","AuRa","Tomine Harket"],
            path: "./assets/music/listSong1/song16.mp3",
            image: "./assets/img/musics/song16.jpg",
            encodeId: 'ZW9DIZ68',
        },
    ]
    
];

const MUSIC_STORAGE_KEY = 'MUSIC';

localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(listSong));

