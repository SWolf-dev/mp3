var listAlbum = [
    {
        name: "Golden Hour",
        image: "./assets/img/albums/album1.jpg",
        videoUrl:"https://www.youtube.com/embed/KXUtBPDfB5g",
    },
    {
        name: "Boycold (Mini Album)",
        image: "./assets/img/albums/album2.jpg",
        videoUrl:"https://www.youtube.com/embed/jrCIQg3NtuE",
    },
    {
        name: "Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)",
        image: "./assets/img/albums/album4.jpg",
        videoUrl:"https://www.youtube.com/embed/u0kw-AmS69w",
    },
    {
        name: "The Album",
        image: "./assets/img/albums/album9.jpg",
        videoUrl:"https://www.youtube.com/embed/vWBtk0SqdFI",
    },
    {
         name: "My Turn",
        image: "./assets/img/albums/album13.jpg",
        videoUrl:"https://www.youtube.com/embed/IrnhtBxHDBY",
    },
    
];

const ALBUM_STORAGE_KEY = 'ALBUM';

localStorage.setItem(ALBUM_STORAGE_KEY, JSON.stringify(listAlbum));