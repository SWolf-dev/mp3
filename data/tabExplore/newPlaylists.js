var listNewPlaylist = [
    {
        name: "Đừng Đùa Với Lửa",
        singer: ["Chi Pu"],
        order: "1",
        time: "2022",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylists1.jpg"
    },
    {
        name: "Hello World",
        singer: ["Alan Walker"],
        order: "2",
        time: "2022",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylists2.jpg"
    },
    {
        name: "Vâng Anh Đi Đi (liu riu version)",
        singer: ["Bích Phương"],
        order: "3",
        time: "07.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylists3.jpg"
    },
    {
        name: "Người Yêu Tôi Lạnh Lùng Sắt Đá",
        singer: ["Mr.Siro"],
        order: "4",
        time: "2022",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylists4.jpg"
    },
    {
        name: "Vẫn Còn Trai Tốt",
        singer: ["Minh Vương M4U"],
        order: "5",
        time: "2022",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylists5.jpg"
    },
];

const NEW_PLAYLIST_STORAGE_KEY = 'NEW_PLAYLIST';

localStorage.setItem(NEW_PLAYLIST_STORAGE_KEY, JSON.stringify(listNewPlaylist));