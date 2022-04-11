const playLists=[
    {
        currentIndex: 10,
        currentPlaylist: 10,
        currentTheme: 0,
        currentVolume: "50",
        isRandom: false,
        isRepeat: false,
        themeList: 0
    }
];

const PLAYER_STORAGE_KEY = 'PLAYER';

localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(playLists))