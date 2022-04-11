var listEvent = [
    {
        name: "Sinh Nhật Sao x B Ray",
        time: "00:00 Thứ Hai, 11 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan2.jpg",
            "./assets/img/tabExplore/events/fans/fan3.jpg",
            "./assets/img/tabExplore/events/fans/fan4.jpg",
            "./assets/img/tabExplore/events/fans/fan5.jpg",
            "./assets/img/tabExplore/events/fans/fan6.jpg"
        ],
        fanAmount: "13K",
        image: "./assets/img/tabExplore/events/event1.jpg",
        action: "Mở RADIO"
    },
    {
        name: "Sinh Nhật Sao x ERIK",
        time: "00:00 Thứ Tư, 13 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan2.jpg",
            "./assets/img/tabExplore/events/fans/fan3.jpg",
            "./assets/img/tabExplore/events/fans/fan4.jpg",
            "./assets/img/tabExplore/events/fans/fan5.jpg",
        ],
        fanAmount: "350",
        image: "./assets/img/tabExplore/events/event2.jpg",
        action: "Chúc Mừng"
    },
    {
        name: "Sinh Nhật Sao x Đông Nhi",
        time: "00:00 Thứ Tư, 13 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan2.jpg",
            "./assets/img/tabExplore/events/fans/fan3.jpg",
            "./assets/img/tabExplore/events/fans/fan4.jpg",
            "./assets/img/tabExplore/events/fans/fan5.jpg",
            "./assets/img/tabExplore/events/fans/fan6.jpg",
        ],
        fanAmount: "361",
        image: "./assets/img/tabExplore/events/event3.jpg",
        action: "Chúc Mừng"
    },
];

const EVENT_STORAGE_KEY = 'EVENT';

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));