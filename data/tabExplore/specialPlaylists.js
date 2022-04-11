var listSpecialPlaylist = [
    {
        header: {
            explication: "Được nghe nhiều nhất",
            topicName: "Alan Walker",
            image: "./assets/img/tabExplore/speciallist/alan1.jpg",
        },
        playlists: [
            {
                name: "Những Bài Hát Hay Nhất Của Alan Walker",
                artists: ["Alan Walker"],
                image: "./assets/img/tabExplore/speciallist/alan6.jpg"
            },
            {
                name: "Faded",
                artists: ["Alan Walker"],
                image: "./assets/img/tabExplore/speciallist/alan5.jpg"
            },
            {
                name: "On My Way",
                artists: ["Alan Walker"],
                image: "./assets/img/tabExplore/speciallist/alan3.jpg"
            },
            {
                name: "Lily",
                artists: ["Alan Walker"],
                image: "./assets/img/tabExplore/speciallist/alan4.jpg"
            },
            {
                name: "Ignite",
                artists: ["Alan Walker"],
                image: "./assets/img/tabExplore/speciallist/alan2.jpg"
            },
            
        ],
    },
    {
        header: {
            explication: "Nghe nhiều",
            topicName: "Hip-Hop",
            image: "./assets/img/tabExplore/specialPlaylists/headerAvatars/playlistList2.jpg",
        },
        playlists: [
            {
                name: "Today's Rap Hits",
                artists: ["Drake", "Kanye West", "Lil Nas X"],
                image: "./assets/img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist1.jpg"
            },
            {
                name: "Rap Việt Cũ Mà Hay",
                artists: ["Rhymastic", "LK", "Yanbi"],
                image: "./assets/img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist2.jpg"
            },
            {
                name: "Rap Việt Cực Chất",
                artists: ["16 Typh", "Tage", "ICD"],
                image: "./assets/img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist3.jpg"
            },
            {
                name: "Rap Việt Kết Hợp Cực Chất",
                artists: ["G5R Squad", "Phan Ann", "Tlinh"],
                image: "./assets/img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist4.jpg"
            },
            {
                name: "Rap Việt Thả Thính Hay Nhất",
                artists: ["OSAD", "HIEUTHUHAI", "Obito"],
                image: "./assets/img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist5.jpg"
            },
        ],
    },
    

    // Tab Radio
    {
        header: {
            explication: "Online Radio ",
            topicName: "Xone Radio",
            image: "./assets/img/tabExplore/radio/radio1.jpg",
        },
        playlists: [
            {
                name: "XONE",
                artists: [],
                image: "./assets/img/tabExplore/radio/radio1_1.jpg"
            },
            {
                name: "BREAKFAST XONE",
                artists: [],
                image: "./assets/img/tabExplore/radio/radio1_3.jpg"
            },
            {
                name: "DRIVEXONE",
                artists: [],
                image: "./assets/img/tabExplore/radio/radio1_2.jpg"
            },
            {
                name: "XONE REWIND",
                artists: [],
                image: "./assets/img/tabExplore/radio/radio1_4.png"
            },
            {
                name: "The Daily XONE",
                artists: [],
                image: "./assets/img/tabExplore/radio/radio1_5.jpg"
            },
        ],
    },
    {
        header: {
            explication: "Podcast",
            topicName: "Vietcetera",
            image: "./assets/img/specials/sp1.jpg",
        },
        playlists: [
            {
                name: "Have A Sip",
                artists: [],
                image: "./assets/img/specials/sp1_1.jpg"
            },
            {
                name: "Vietnam Innovators",
                artists: [],
                image: "./assets/img/specials/sp1_2.jpg"
            }
        ],
    },
    {
        header: {
            explication: "Nghe lại",
            topicName: "On Air",
            image: "./assets/img/specials/sp2.jpg",
        },
        playlists: [
            {
                name: "Nhạc Mới Mỗi Ngày",
                artists: [],
                image: "./assets/img/specials/sp2_1.jpg"
            }
        ],
    },
    {
        header: {
            explication: "",
            topicName: "",
            image: "./assets/img/tabRadio/specialPlaylists/headerAvatars/playlistList1.jpg",
        },
        playlists: [
            {
                name: "",
                artists: ["", "", ""],
                image: "./assets/img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg"
            },
            {
                name: "",
                artists: ["", "", ""],
                image: "./assets/img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg"
            },
            {
                name: "",
                artists: ["", "", ""],
                image: "./assets/img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg"
            },
            {
                name: "",
                artists: ["", "", ""],
                image: "./assets/img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg"
            },
            {
                name: "",
                artists: ["", "", ""],
                image: "./assets/img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg"
            },
        ],
    },
    
];

const SPECIAL_PLAYLIST_STORAGE_KEY = 'SPECIAL_PLAYLIST';

localStorage.setItem(SPECIAL_PLAYLIST_STORAGE_KEY, JSON.stringify(listSpecialPlaylist));