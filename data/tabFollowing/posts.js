
var listPost = [
    [
        {
            name: "Bảo Anh",
            time:"4 tháng 3 lúc 14:27",
            content: "Moodshow 3 đã lên sóng. Chúc cả nhà thật Chill cùng Moodshow <3",
            authorAvatar: "./assets/img/story/baoanh.jpg",
            image: "./assets/img/story/bao1.jpg"
        },
        {
            name: "Hòa Minzy",
            time:"4 tháng 3 lúc 14:24",
            content: "Hé lộ nhiều hình ảnh và cung bậc cảm xúc của chiến sĩ Thị Hoà trong Sao Nhập Ngũ 2022 👍🏻Dù hành trình cuộc đời này có nhiều thử thách hay gian nan vất vả thì cô gái ấy sẽ luôn nở nụ cười trên môi ♥️",
            authorAvatar: "./assets/img/story/hoa.jpg",
            image: "./assets/img/story/hoa1.jpg"
        },
        {
            name: "Nguyễn Thạc Bảo Ngọc",
            time:"4 tháng 3 lúc 14:00",
            content: "Nhìn như này ai biết đanh đá đâu",
            authorAvatar: "./assets/img/story/ngoc.jpg",
            image: "./assets/img/story/ngoc1.jpg"
        },
        {
            name: "Huy Vạc",
            time:"4 tháng 3 lúc 00:00",
            content: "Người còn ở bên ta... còn không ??Anh lang thang tìm em trong giấc mơ xưa hoài mong ♫ Chạnh Lòng Thương Cô 2 - Huy Vạc Nguyễn Huy",
            authorAvatar: "./assets/img/story/huyvac.jpg",
            image: "./assets/img/story/huyvac1.jpg"
        },
    ],
    [
        {
            name: "Lăng LD",
            time:"3 tháng 3 lúc 11:39",
            content: "Tươm tất vậy đó 😁",
            authorAvatar: "./assets/img/story/lang.jpg",
            image: "./assets/img/story/lang1.jpg"
        },
        {
            name: "Sơn Tùng M-TP",
            time:"3 tháng 3 lúc 09:33",
            content: "Anh đoán tên em là Google. </br>Bởi vì em có mọi thứ mà anh đang tìm kiếm ❤️",
            authorAvatar: "./assets/img/story/sontung.jpg",
            image: "./assets/img/story/sontung1.jpg"
        },
        
    ]
];

const POST_STORAGE_KEY = 'POST';

localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(listPost));