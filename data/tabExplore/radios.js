var listRadios = [
    {
        name: "Rap Việt",
        viewers: "12",
        image: "./assets/img/radios/radio5.jpg",
        logo: "./assets/img/radios/attachs/attach5.jpg",
    },

    {
        name: "US-UK",
        viewers: "16",
        image: "./assets/img/radios/radio6.jpg",
        logo: "./assets/img/radios/attachs/attach6.jpg",
    },
    {
        name: "K-POP",
        viewers: "98",
        image: "./assets/img/radios/radio7.jpg",
        logo: "./assets/img/radios/attachs/attach7.jpg",
    },
    {
        name: "V-POP",
        viewers: "240",
        image: "./assets/img/radios/radio8.jpg",
        logo: "./assets/img/radios/attachs/attach8.jpg",
    },
    {
        name: "Bolero",
        viewers: "59",
        image: "./assets/img/radios/radio9.jpg",
        logo: "./assets/img/radios/attachs/attach9.jpg",
    },
    {
        name: "The One Radio",
        viewers: "44",
        image: "./assets/img/radios/radio10.jpg",
        logo: "./assets/img/radios/attachs/attach10.jpg",
    },
    {
        name: "Xone Radio",
        viewers: "999",
        image: "./assets/img/tabExplore/radio/radio1_1.jpg",
        logo: "./assets/img/radios/attachs/attach1.jpg",
    },
    {
        name: "On Air",
        viewers: "193",
        image: "./assets/img/radios/radio2.jpg",
        logo: "./assets/img/radios/attachs/attach2.jpg",
    },
    {
        name: "Chạm",
        viewers: "329",
        image: "./assets/img/radios/radio3.jpg",
        logo: "./assets/img/radios/attachs/attach3.jpg",
    },
    {
        name: "Acoustic",
        viewers: "865",
        image: "./assets/img/radios/radio4.jpg",
        logo: "./assets/img/radios/attachs/attach4.jpg",
    },
];

const RADIO_STORAGE_KEY = 'RADIO';

localStorage.setItem(RADIO_STORAGE_KEY, JSON.stringify(listRadios));