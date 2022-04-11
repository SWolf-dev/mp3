// const searchInput = document.querySelector('.search-input')
// const searchBtn = document.querySelector('.search-btn')
// const content = document.querySelector('.content-search')

// async function sound(id){
//     let apiSound = `https://music-player-pink.vercel.app/api/song?id=${id}`
//     let data = await fetch(apiSound)
//         .then(res=> res.json())
//     if(data.err == 0){
//         audio.src = `${data.data[128]}`
//         audio.play()
//     }else{
//         showNotificationToast('Không thể phát bài hát này','Cảnh báo','warning')
//         audio.src = ''
//     }
// }

// async function Music(){
//     let value = searchInput.value
//     let apiURL = `https://music-player-pink.vercel.app/api/search?keyword=${value}`;
//     let data = await fetch(apiURL)
//         .then(res=> res.json()) 
//     if(data.err == 0){
//         content.innerHTML = html`<div class="search-box">
//             <h3>Search box</h3>
//             ${data.data.songs.map((item)=>{
//                 return html`<div class="playlist__song-info media__left margin  music">
//                     <div class="playlist__song-thumb media__thumb mr-10" style="background: url('${item.thumbnail}') no-repeat center center / cover">
//                         <div class="play-song--actions">
//                             <div class="control-btn btn-toggle-play btn--play-song">
//                                 <i class="bi bi-play-fill"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="playlist__song-body media__info">
//                         <span class="playlist__song-title info__title title-search">${item.title}</span>
//                         <p class="playlist__song-author info__author title-search">${item.alias}</p>
//                     </div>
//                 </div>`
//             })}
//             </div>`
//         }
//     let currentId = 0;
//     const musics = document.querySelectorAll('.music')
//     musics.forEach((item,index)=>{
//         item.addEventListener('click',function(){
//             currentId = data.data.songs[index].encodeId
//             sound(currentId)
//             lyricId = currentId
//             popUpCdThumb.style.backgroundImage = `url('${data.data.songs[index].thumbnailM}')`
//             cdThumbs.forEach(cdThumb => {
//                 cdThumb.style.backgroundImage = `url('${data.data.songs[index].thumbnail}')`
//             })
//             songAnimateTitles.forEach(songAnimateTitle => {
//                 songAnimateTitle.innerHTML = html`
//                         <div class="title__item">${data.data.songs[index].title}</div>
//                         <div class="title__item">${data.data.songs[index].title}</div>
//                 `;
//             })
//             popUpSongName.innerText = data.data.songs[index].title
//             authors.forEach(author => {
//                 author.innerHTML = app.html`
//                     <a href="#" class="is-ghost">${data.data.songs[index].alias}</a>
                
//                 `;
//             })
//             popUpSongAuthor.innerHTML = app.html`
//                 <a href="#" class="is-ghost">${data.data.songs[index].alias}</a>
//             `;
//         })
//     })
// }

// searchBtn.onclick = (e)=>{
//     e.preventDefault()
//     Music()
// }