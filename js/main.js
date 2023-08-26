// FUNCION ABRIR SIDEBAR
function sidebarOpen() {
    const sidebarContainer = document.querySelector("#sidebar-container");
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    sidebarContainer.style = 'z-index: 300';
    sidebar.style = 'left: 0px';
    background.style = 'background-color: rgba(0, 0, 0, 0.400); z-index: 400;';
    body.style = 'overflow-y: hidden;'
}


const menuOpen = document.querySelector("#menu-open");
menuOpen.addEventListener("click", sidebarOpen);

// FUNCION CERRAR SIDEBAR
function sidebarClose() {
    const sidebarContainer = document.querySelector("#sidebar-container");
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    sidebarContainer.style = 'z-index: -1';
    sidebar.style = 'left: -400px';
    background.style = 'z-index: 0; visibility: hidden';
    body.style = 'overflow-y: visible;'
}

const menuClose = document.querySelector("#menu-close");
const clickBackground = document.querySelector("#sidebar-background");
menuClose.addEventListener("click", sidebarClose);
clickBackground.addEventListener("click", sidebarClose);

let searchInput = async() => {
    const input = document.querySelector("#searchbox-input").value;
    // console.log(input);
    
    const url = `https://youtube138.p.rapidapi.com/search/?q=${input}&hl=en&gl=US`;
    // console.log(url);
    const options = {
        method: 'GET',
            headers: {
                'X-RapidAPI-Key': '96265bc34bmsh4fff883fe0943ddp1ba3d6jsndfd708a2ba00',
                'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
            }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        return(result);
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function fromInput2Video() {
    let video_url = await searchInput();
    video_url = JSON.parse(video_url);
    video_url = (video_url.contents[0]).video.videoId;
    console.log(`CODIGO VIDEO: ${video_url}`);
    video_url = `https://www.youtube.com/embed/${video_url}`
    const video_html = document.querySelector("#videoInjected");
    video_html.setAttribute('src', video_url)
}

const input = document.querySelector("#searchbox-input")
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement === input) {
        fromInput2Video();
    }
});









// const url = 'https://youtube138.p.rapidapi.com/auto-complete/?q=despacito&hl=en&gl=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '96265bc34bmsh4fff883fe0943ddp1ba3d6jsndfd708a2ba00',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// {
//     "contents": [
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/gZXNbr5CAv-6RCt6JjVVA16C8YYRwjXYjkHy8HNLZ-BToPBnYru2a6xpopabgVa7NKIFaAsu=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
//             "title": "Luis Fonsi"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "#LuisFonsi #Despacito #Imposible #Calypso #EchamelaCulpa #NadaEsImposible #NothingisImpossible #LF Music video by Luis ...",
//           "isLiveNow": false,
//           "lengthSeconds": 282,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/kJQP7kiw5Fk/mqdefault_6s.webp?du=3000&sqp=CLDbqKcG&rs=AOn4CLBBIWB08ezpJqnxUd_Y59byciayMg",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 8247815601
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCg9eudi8DoM9M-qjPgJBGGkuIgA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMnrGS7UUfb2FyiKXj-RL4eGknVg",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
//           "videoId": "kJQP7kiw5Fk"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ARBYBhOqmA4bPgYwg_jdQ-Jj6FXDi8iVLUZcMffjYVZmocYJi2TTzFqwtn63FsQ2EkCc48sC=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@mate__mahesz",
//             "channelId": "UCKmCVUznUSRwHMIcGoGX3Dg",
//             "title": "Veronation 15"
//           },
//           "badges": [],
//           "descriptionSnippet": "/daddyyankeevevo Justin Bieber: https://www.facebook.com/JustinBieber https://twitter.com/justinbieber /justinbiebervevo ...",
//           "isLiveNow": false,
//           "lengthSeconds": 225,
//           "movingThumbnails": null,
//           "publishedTimeText": "2 weeks ago",
//           "stats": {
//             "views": 144265
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/Mj_vYwC-pjI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCd7FwI3Wm6ovXW0vbYCyWXmRFgaQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/Mj_vYwC-pjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6jYY9edc3pDv6gQ_tEdc-dHkBzw",
//               "width": 720
//             }
//           ],
//           "title": "Justin Bieber - Despacito (Lyrics / Letra) ft. Luis Fonsi & Daddy Yankee",
//           "videoId": "Mj_vYwC-pjI"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/mEz4CxDP2HkZBDngPa9WDxVfYtcvBPgXPcT2efuF-iKdu2cCaNQmEFX7Q7KheT2TXUV5qF_H=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@taznetwork",
//             "channelId": "UCJ6ERWrxZzb9Ua3oeRcIe0g",
//             "title": "Taz Network"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Luis Fonsi ‒ Despacito Lyrics ✍️   Ay, ¡Fonsi! ¡D.Y.! Ohhh, oh, no, oh, no, oh Hey, yeah! Dididiri Daddy, go! Sí, sabes que ya ...",
//           "isLiveNow": false,
//           "lengthSeconds": 241,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/gm3-m2CFVWM/mqdefault_6s.webp?du=3000&sqp=CKb5qKcG&rs=AOn4CLBV-piEAqy05YdaOdDEvbdQhM4GYA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 38123381
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/gm3-m2CFVWM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdnMRJ4yJ6vHumS_nU46yxFLqRjQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/gm3-m2CFVWM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDVqxUl1l2I_vZGdTz650GR7VsyQ",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi ‒ Despacito (Lyrics / Lyric Video) ft. Daddy Yankee",
//           "videoId": "gm3-m2CFVWM"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/mEz4CxDP2HkZBDngPa9WDxVfYtcvBPgXPcT2efuF-iKdu2cCaNQmEFX7Q7KheT2TXUV5qF_H=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@taznetwork",
//             "channelId": "UCJ6ERWrxZzb9Ua3oeRcIe0g",
//             "title": "Taz Network"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Lyrics for Despacito - Justin Bieber [Intro: Justin Bieber] Come on over in my direction So thankful for that, it's such a blessin', yeah ...",
//           "isLiveNow": false,
//           "lengthSeconds": 231,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/whwe0KD_rGw/mqdefault_6s.webp?du=3000&sqp=CPTcqKcG&rs=AOn4CLDEpiOrovlY7WDmsV0am0lSZN2vSg",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 356516306
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/whwe0KD_rGw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHpsL01E241DCvjgTvwUb2KlYvgQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/whwe0KD_rGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5VYQskPIpD-6g0uT7d1wYIhbVTg",
//               "width": 720
//             }
//           ],
//           "title": "Justin Bieber – Despacito (Lyrics) 🎤 ft. Luis Fonsi & Daddy Yankee [Pop]",
//           "videoId": "whwe0KD_rGw"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaSYE2-p2pR9DxqwQtsg_dNmFMVo6RJOW0RzDkG47w=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@MasterDumb",
//             "channelId": "UC_s5dj6ILpVm3KdSHwpx7zw",
//             "title": "MasterDumb"
//           },
//           "badges": [],
//           "descriptionSnippet": "No copyright infringement intended. For entertainment purposes only. All rights belong to the artist. Promo only Masterdumb ...",
//           "isLiveNow": false,
//           "lengthSeconds": 251,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/dr_GAJZviR0/mqdefault_6s.webp?du=3000&sqp=CMDTqKcG&rs=AOn4CLAMyT02PpbBWHclWXajoLflH-LFog",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 31065346
//           },
//           "thumbnails": [
//             {
//               "height": 270,
//               "url": "https://i.ytimg.com/vi/dr_GAJZviR0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YIkR5KbMQOxTcaRoIxBF9Vm_6w",
//               "width": 480
//             }
//           ],
//           "title": "Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber",
//           "videoId": "dr_GAJZviR0"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/gZXNbr5CAv-6RCt6JjVVA16C8YYRwjXYjkHy8HNLZ-BToPBnYru2a6xpopabgVa7NKIFaAsu=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
//             "title": "Luis Fonsi"
//           },
//           "badges": [],
//           "descriptionSnippet": "© 2017 Universal Music Latin Entertainment under exclusive license to Republic Records (RBMG/Def Jam Recordings) Music ...",
//           "isLiveNow": false,
//           "lengthSeconds": 229,
//           "movingThumbnails": null,
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 677554557
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/72UO0v5ESUo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9eRVhsetOGUVsmlaEWQlqiC-jyQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/72UO0v5ESUo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXTg7KrSv3MFfoZNZyIhOYFglAMA",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi, Daddy Yankee - Despacito (Audio) ft. Justin Bieber",
//           "videoId": "72UO0v5ESUo"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/dAoGTEi6gIxOVbOFpJ3uIfS1NA5X7-s0NDXFyehvaM8M8BLjDhRUeVHzrovYa2v2kaLAC7KPrQ=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@PillowMusic",
//             "channelId": "UC8DBdOsq1zu-PbKHG8kNV0g",
//             "title": "Pillow"
//           },
//           "badges": [],
//           "descriptionSnippet": "Despacito - Luis Fonsi (Feat. Daddy Yankee) (Lyrics) Lyrics video for \"Despacito\" by Luis Fonsi (Feat. Daddy Yankee). ✓Click the ...",
//           "isLiveNow": false,
//           "lengthSeconds": 241,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/DdwDAoJ8bFk/mqdefault_6s.webp?du=3000&sqp=CM3sqKcG&rs=AOn4CLDHReInx8qv4uYpvZKQypa5dlUr_A",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "2 years ago",
//           "stats": {
//             "views": 835481
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/DdwDAoJ8bFk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeE05ymyOVrW64WkkQrhwWONavbg",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/DdwDAoJ8bFk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcNa-Xw5reF0aP4cZwWvjPUB6C0g",
//               "width": 720
//             }
//           ],
//           "title": "Despacito - Luis Fonsi (Feat. Daddy Yankee) (Lyrics) 🎵",
//           "videoId": "DdwDAoJ8bFk"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/eXSDXC8MHAMmNNhVV0TAm0N1CiBSp8zvZ2q3ncb4ERfi-p4F6IK1vsBptDGiCpMPOHH8fjH9PiQ=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@LegendKpop",
//             "channelId": "UCR5cyf8hncN_AaQPfmvmlgA",
//             "title": "KBS 레전드 케이팝"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "포레스텔라(Forestella) - Despacito #포레스텔라 #Despacito #불후의명곡 #리메이크 #음악예능 #노래대결 #전설 #세대공감 #가요 ...",
//           "isLiveNow": false,
//           "lengthSeconds": 269,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/U1ZLXvoK58g/mqdefault_6s.webp?du=3000&sqp=CKD7qKcG&rs=AOn4CLCiNHBp2adnmqzsjomnEb3h89oExg",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "1 month ago",
//           "stats": {
//             "views": 2511348
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/U1ZLXvoK58g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCZc334SqCx5pPDlQ9foU0kwtyYQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/U1ZLXvoK58g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZSgEfScUv0O1Wn4d4wRIx5bQmjw",
//               "width": 720
//             }
//           ],
//           "title": "[SUB] 포레스텔라(Forestella) - Despacito [불후의 명곡2 전설을 노래하다/Immortal Songs 2] | KBS 230715 방송",
//           "videoId": "U1ZLXvoK58g"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaR0mlBqjt3JqafmzNyF4ClVkvMHpqS8MdcqCXcjRg=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@nvqofficial4933",
//             "channelId": "UCV-ny-IIHVfBLKsVOrct-7w",
//             "title": "NVQ Official"
//           },
//           "badges": [
//             "New"
//           ],
//           "descriptionSnippet": null,
//           "isLiveNow": false,
//           "lengthSeconds": 86,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/ubWWMV1h6X8/mqdefault_6s.webp?du=3000&sqp=CKfjqKcG&rs=AOn4CLBRMtOAUjCfAQrVIGAUuHRLZUwvug",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "2 days ago",
//           "stats": {
//             "views": 83
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/ubWWMV1h6X8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhbIFcoZTAP&rs=AOn4CLCZntshS-6iRTsOA9TPRIkawLnOqQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/ubWWMV1h6X8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhbIFcoZTAP&rs=AOn4CLCeddxPkEYZ7S-xl1rxrsW0-mXHGA",
//               "width": 720
//             }
//           ],
//           "title": "Mashup Thư cuối+Despacito Mâybae hát cực cuốn",
//           "videoId": "ubWWMV1h6X8"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/l6AWHifBhs_P3ik-JDGlbiGsyScgObNJiCQUWEd6IHaHHDOjREXw79qFyQMYqCJQ_Bx3Q6dkhaY=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@musica4238",
//             "channelId": "UCthT-50nJxSowCGljpb9XRQ",
//             "title": " MUSICA"
//           },
//           "badges": [],
//           "descriptionSnippet": "Latin Summer Mix | Best Spanish Music 2021 | Spanish Music Here you will get the best Spanish and Latin Songs and their Mix .",
//           "isLiveNow": false,
//           "lengthSeconds": 3841,
//           "movingThumbnails": null,
//           "publishedTimeText": "1 year ago",
//           "stats": {
//             "views": 2602464
//           },
//           "thumbnails": [
//             {
//               "height": 270,
//               "url": "https://i.ytimg.com/vi/5tjHdlRR8r4/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAugCigIMCAAQARhyIFEoMjAP&rs=AOn4CLA24p4Xlzl7B0tlZOPCsyzvGO_mLA",
//               "width": 480
//             }
//           ],
//           "title": "Latin Summer Mix 2021 | Best spanish Music for Dance and Chill in Summertime",
//           "videoId": "5tjHdlRR8r4"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/CmYIK4jG8f7xMaBDB4RIRR_ve26AwaNhmJYSTbUvH5Yq9zsetKrAx4OSTVGkU5YnKXsC15pJ=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@MarlonAlvesMAs",
//             "channelId": "UCkOfNQYegVUzsADNNZNOH2g",
//             "title": "Marlon Alves"
//           },
//           "badges": [],
//           "descriptionSnippet": "Contrataciones: assessoriamas@outlook.com Instagram https://www.instagram.com/marlonalvs Fan Page ...",
//           "isLiveNow": false,
//           "lengthSeconds": 238,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/Q4a9uwV4nmo/mqdefault_6s.webp?du=3000&sqp=CNLOqKcG&rs=AOn4CLDE5BpfL5Wi4r0F47ADo9zMLDwwlA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 113877029
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/Q4a9uwV4nmo/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFwoOTAP&rs=AOn4CLB30uGLdFez3lkvTfXJ2SjWTjNDIw",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/Q4a9uwV4nmo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFwoOTAP&rs=AOn4CLA8szt7WfZyVeIxU2QBC62qTrdg5g",
//               "width": 720
//             }
//           ],
//           "title": "Despacito - Luis Fonsi (ft. Daddy Yankee) - Marlon Alves Dance MAs",
//           "videoId": "Q4a9uwV4nmo"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaS_EUwtUSrWc1-jN14xw_M6cU0JWQA0mm8kTlG1=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@AmNhacGayNghien",
//             "channelId": "UCUaYJH_TNzVtAyZaCUYzvhA",
//             "title": "Âm Nhạc Gây Nghiện"
//           },
//           "badges": [],
//           "descriptionSnippet": "Despacito Và Những Bài Nhạc Âu Mỹ Trên 1 Tỷ View Hay Nhất 2017 - Đảm Bảo Nghe Cả Ngày Không Chán ○ WELCOME to ...",
//           "isLiveNow": false,
//           "lengthSeconds": 4841,
//           "movingThumbnails": null,
//           "publishedTimeText": "5 years ago",
//           "stats": {
//             "views": 920682
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/INHNplJDQS4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsKq8bA_ak_ntvERbUBfn6H304eA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/INHNplJDQS4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrleryU9CKzF4V5uf5yKR7fXd1UQ",
//               "width": 720
//             }
//           ],
//           "title": "Despacito Và Những Bài Nhạc Âu Mỹ Trên 1 Tỷ View Hay Nhất 2017 - Đảm Bảo Nghe Cả Ngày Không Chán",
//           "videoId": "INHNplJDQS4"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/A3GBKSIlTNQG0Ld0psd0bopQGfPpdzhLdWhW0miCiAX_gl600zP7V864M3FNX75EFEUS90K5lQ=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCIMbaLmPW22pxXZASAccFfg",
//             "title": "L2K"
//           },
//           "badges": [],
//           "descriptionSnippet": "Le dernier single de L2K ꧁laisse tomber꧂ est enfin disponible sur ...",
//           "isLiveNow": false,
//           "lengthSeconds": 299,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/11e4sW-Q4Ns/mqdefault_6s.webp?du=3000&sqp=CJTKqKcG&rs=AOn4CLAepfBCulfXdjEF0m3XxDzFzpT7zQ",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "3 years ago",
//           "stats": {
//             "views": 335120451
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/11e4sW-Q4Ns/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCM4kclGsL4fLMZsF-YJl_l1oQXdQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/11e4sW-Q4Ns/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAJaGegHUWyaKoBvdrJl7H7unNtQ",
//               "width": 720
//             }
//           ],
//           "title": "L2K - Jerusalema  Chorégraphie Officiel.",
//           "videoId": "11e4sW-Q4Ns"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/VXVR9IKCRGRAtjdXcul8EcB2MoT1ZC7d8YMlkzVfB8Iuulf3WK5HA_h6BihPBe-OnpS4Fufrag=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCrDkAvwZum-UTjHmzDI2iIw",
//             "title": "officialpsy"
//           },
//           "badges": [],
//           "descriptionSnippet": "#PSY #싸이 #GANGNAMSTYLE #강남스타일 More about PSY@ http://www.youtube.com/officialpsy ...",
//           "isLiveNow": false,
//           "lengthSeconds": 253,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/9bZkp7q19f0/mqdefault_6s.webp?du=3000&sqp=CPD3qKcG&rs=AOn4CLBYbA2zQSwkvNUYd4UsiJe-tDv8MA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "11 years ago",
//           "stats": {
//             "views": 4878595573
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2ZQhOjkk_NTkfURgVv3PC9LljiA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcjOO401gtXMFAu0GngeIwZOkO-Q",
//               "width": 720
//             }
//           ],
//           "title": "PSY - GANGNAM STYLE(강남스타일) M/V",
//           "videoId": "9bZkp7q19f0"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/bhG7T_FzfLoxqmJwGobKF1B9u9FhIXiYA8JYRPPoHcOASht0psOD3LZHZ3HqPEICEn30FWkDfg=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@7clouds",
//             "channelId": "UCNqFDjYTexJDET3rPDrmJKg",
//             "title": "7clouds"
//           },
//           "badges": [],
//           "descriptionSnippet": "......... Lyrics: Imagine Dragons - Believer [Verse 1] First things first I'ma say all the words inside my head I'm fired up and tired of ...",
//           "isLiveNow": false,
//           "lengthSeconds": 205,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/W0DM5lcj6mw/mqdefault_6s.webp?du=3000&sqp=CIjMqKcG&rs=AOn4CLC-xydTPedxp4-3tY-eQosjX5lFMQ",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "5 years ago",
//           "stats": {
//             "views": 463866447
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/W0DM5lcj6mw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuq3ujSY5L1spLmcvTeWyrHAZpPQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/W0DM5lcj6mw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwZDsbDf7CdXKF-hMCAD6VXj18XA",
//               "width": 720
//             }
//           ],
//           "title": "Imagine Dragons - Believer (Lyrics)",
//           "videoId": "W0DM5lcj6mw"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/M0kf1V6YcIirbZg1e6a8FxeThfXxy1VN-H9lPaP9HaAA-0N__iitodBPtTpdhlsnz6138Ray=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@saxophonemusic7340",
//             "channelId": "UCdLaQbOEZcVe_TLKrUNL2OA",
//             "title": "Saxophone Music"
//           },
//           "badges": [
//             "4K"
//           ],
//           "descriptionSnippet": "Daniele Vitale Sax Greatest Hits Collection - Best Song Of Daniele Vitale Sax - Best Saxophone Music ...",
//           "isLiveNow": false,
//           "lengthSeconds": 3485,
//           "movingThumbnails": null,
//           "publishedTimeText": "1 year ago",
//           "stats": {
//             "views": 386559
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/NjyC-TE_rVc/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhDIFgoZTAP&rs=AOn4CLDrDl8JtyKd0YaIdxPDarCWSNDc7A",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/NjyC-TE_rVc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhDIFgoZTAP&rs=AOn4CLCbAf1_yIV2rYkYbdMpEOf0Qm4xlw",
//               "width": 720
//             }
//           ],
//           "title": "Daniele Vitale Sax Greatest Hits Collection - Best Song Of Daniele Vitale Sax - Best Saxophone Music",
//           "videoId": "NjyC-TE_rVc"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/UKbftWD63Uw2cDaEV8_k9cgjfStGWQgonuxyLNMun5GKSO0UQfEyXwnaVI7bqUYrEizDKG9aUNM=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UClkRzsdvg7_RKVhwDwiDZOA",
//             "title": "JFlaMusic"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "#loveyouguys #gardeners.",
//           "isLiveNow": false,
//           "lengthSeconds": 163,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/4bmUFRxNEIg/mqdefault_6s.webp?du=3000&sqp=CIi_qKcG&rs=AOn4CLBVOmPro1t9qkCgBCu9YHKQaLb-OQ",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 213230249
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/4bmUFRxNEIg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXMKL1vrjL0FjuctBDMZQ4mtFyvg",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/4bmUFRxNEIg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF17ZchQ7aTAFTzB-Kd-77peqJyQ",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi - Despacito ( cover by J.Fla )",
//           "videoId": "4bmUFRxNEIg"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/gZXNbr5CAv-6RCt6JjVVA16C8YYRwjXYjkHy8HNLZ-BToPBnYru2a6xpopabgVa7NKIFaAsu=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
//             "title": "Luis Fonsi"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Music video by Luis Fonsi, Demi Lovato performing Échame La Culpa. (C) 2017 UMG Recordings, Inc. http://vevo.ly/FgY9ro.",
//           "isLiveNow": false,
//           "lengthSeconds": 211,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/TyHvyGVs42U/mqdefault_6s.webp?du=3000&sqp=CM_cqKcG&rs=AOn4CLCFN8ibEn8IiKWGnVNA1LWLUJgMWA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "5 years ago",
//           "stats": {
//             "views": 2290559513
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/TyHvyGVs42U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3sLxZ9CZdlOjy6HeaSTIe_CitAg",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/TyHvyGVs42U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHJXDrIoAXY2vlOohhGHil9nq5Sw",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi, Demi Lovato - Échame La Culpa",
//           "videoId": "TyHvyGVs42U"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/I_6mpmDAvHyKvGknUvpnm5uST7s0s4Xqztr-7Pgp22xp8c_WwE36TZMEMzDPDW9dYUKrLlt_=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@Ciara-go6iv",
//             "channelId": "UC23ziuaokkCwDES9h4NS-ug",
//             "title": "Ciara"
//           },
//           "badges": [],
//           "descriptionSnippet": "despacito #luisfonsi #lyrics Luis Fonsi ‒ Despacito (Lyrics/Lyric Video) ft. Daddy Yankee Luis Fonsi ‒ Despacito (Lyrics/Lyric ...",
//           "isLiveNow": false,
//           "lengthSeconds": 233,
//           "movingThumbnails": null,
//           "publishedTimeText": "1 year ago",
//           "stats": {
//             "views": 439143
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/8qSlRSd1w2E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlHG1tx0fOCjC1m9FZb1M1-uPDqA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/8qSlRSd1w2E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdqThHk6RIea3sjbdvrsbM4GDxRg",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi ‒ Despacito (Lyrics/Lyric Video) ft. Daddy Yankee",
//           "videoId": "8qSlRSd1w2E"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/g_3jDiTBhQzsSFJW8zYoiki5gykTShLepvuJpbb3fNTGVw0YiSl3WjRwYD8rTMpvM0ID91Npog=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@MusicHopit",
//             "channelId": "UC_RbWHNWywtmzCpIJlbbOXw",
//             "title": "Music Hopit"
//           },
//           "badges": [],
//           "descriptionSnippet": "Luis Fonsi - Despacito [ 1 Hour ] ft. Daddy Yankee, Despacito Daddy Yankee song, Despacito Daddy Yankee lyrics, Despacito ...",
//           "isLiveNow": false,
//           "lengthSeconds": 3808,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/yYrCGHMWJX4/mqdefault_6s.webp?du=3000&sqp=CMbrqKcG&rs=AOn4CLBx3-DuaiBfHq76hhk3-u2GJCiT-A",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "5 months ago",
//           "stats": {
//             "views": 22699
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/yYrCGHMWJX4/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhFIGMoZTAP&rs=AOn4CLBdEGlAPt5WNR6GZILBEhftBTwBhw",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/yYrCGHMWJX4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhFIGMoZTAP&rs=AOn4CLArhGh3v1TPfesnXMTOOHnLm2s6Dg",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi - Despacito [ 1 Hour ] ft. Daddy Yankee,",
//           "videoId": "yYrCGHMWJX4"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/eXSDXC8MHAMmNNhVV0TAm0N1CiBSp8zvZ2q3ncb4ERfi-p4F6IK1vsBptDGiCpMPOHH8fjH9PiQ=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@LegendKpop",
//             "channelId": "UCR5cyf8hncN_AaQPfmvmlgA",
//             "title": "KBS 레전드 케이팝"
//           },
//           "badges": [
//             "4K",
//             "CC"
//           ],
//           "descriptionSnippet": "[4K 원테이크] 포레스텔라(Forestella) - DESPACITO #불후의명곡 #리메이크 #음악예능 #노래대결 #전설 #세대공감 #가요 #추억 ...",
//           "isLiveNow": false,
//           "lengthSeconds": 292,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/EUJ0HA31EBk/mqdefault_6s.webp?du=3000&sqp=CMzzqKcG&rs=AOn4CLCB33IIWZrHip0E70o328h90jVNbA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "1 month ago",
//           "stats": {
//             "views": 771970
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/EUJ0HA31EBk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDckVBdUx7ac91vBIft3YQujaxdJw",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/EUJ0HA31EBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-rt5O3nJxZAHNJxczzjdhHokX1A",
//               "width": 720
//             }
//           ],
//           "title": "[4K 원테이크] 포레스텔라(Forestella) - DESPACITO [불후의 명곡2 전설을 노래하다/Immortal Songs 2] | KBS 230715 방송 [SUB]",
//           "videoId": "EUJ0HA31EBk"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaRpVtBDcj-E2lw88w0fbNBzJvdjDFftu4MXF1-jHg=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCyjuFsbclXyntSRMBAILzbw",
//             "title": "2CELLOS"
//           },
//           "badges": [
//             "4K"
//           ],
//           "descriptionSnippet": "2CELLOS Luka Sulic and Hauser playing Despacito Video by Kristijan Burlovic, Medvid production Audio by Filip Vidovic, Morris ...",
//           "isLiveNow": false,
//           "lengthSeconds": 190,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/D9LrEXF3USs/mqdefault_6s.webp?du=3000&sqp=CLf1qKcG&rs=AOn4CLAVBx3DUga9qRxgmJ2pmTTQGF3gbA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 50787928
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/D9LrEXF3USs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAowqvxizwyTGkfxxow1GeUCCr3iw",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/D9LrEXF3USs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD30THNw1z7qbSJUZrcaupI5cMZVQ",
//               "width": 720
//             }
//           ],
//           "title": "2CELLOS - Despacito [OFFICIAL VIDEO]",
//           "videoId": "D9LrEXF3USs"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/Lp9cu-xgKL0QYxdJ268CaZ63SrmODmZT2uRJjwPHvoeLOvd1LLNJWUd45tYR_VW9z5APPIPJpw=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@fallontonight",
//             "channelId": "UC8-Th83bH_thdKZDJCrn88g",
//             "title": "The Tonight Show Starring Jimmy Fallon"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Music guest Luis Fonsi performs \"Despacito\" for the Tonight Show audience. Subscribe NOW to The Tonight Show Starring Jimmy ...",
//           "isLiveNow": false,
//           "lengthSeconds": 247,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/zrJtFy51fRo/mqdefault_6s.webp?du=3000&sqp=CMjvqKcG&rs=AOn4CLAXG9tGNSYuDRnfj8tu3nQFYE37Yw",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "5 years ago",
//           "stats": {
//             "views": 18017964
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/zrJtFy51fRo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUqrotW32dSX_hoaS0vlLqvcE4vQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/zrJtFy51fRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk9q0iZfgPvsBUlwKWA4f88u7TDw",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi: Despacito",
//           "videoId": "zrJtFy51fRo"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/aXBmHKABw-J-0ZMxj39wkXpLDEHViOdL5UD71cDG2s5vbeQBWk9mdX3rRxT5U6Wfkvm6o8Uu-dU=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCT9zcQNlyht7fRlcjmflRSA",
//             "title": "ImagineDragons"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Directed by Matt Eastin Shop Imagine Dragons: http://smarturl.it/ImagineDragonsShop Sign up for email updates: ...",
//           "isLiveNow": false,
//           "lengthSeconds": 217,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/7wtfhZwyrcc/mqdefault_6s.webp?du=3000&sqp=CK7WqKcG&rs=AOn4CLBQHpxkjSnB0vt-6ubzxUORUXVUWw",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 2494200935
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/7wtfhZwyrcc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqeuq2elZxCfWzd8g-9Wfh__LMPA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/7wtfhZwyrcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAorFfrZXwv_HMuWFY58OGUgd0r5Q",
//               "width": 720
//             }
//           ],
//           "title": "Imagine Dragons - Believer (Official Music Video)",
//           "videoId": "7wtfhZwyrcc"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/gZXNbr5CAv-6RCt6JjVVA16C8YYRwjXYjkHy8HNLZ-BToPBnYru2a6xpopabgVa7NKIFaAsu=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
//             "title": "Luis Fonsi"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "Music video by Luis Fonsi, Demi Lovato performing Échame La Culpa. (C) 2017 UMG Recordings, Inc. http://vevo.ly/FgY9ro.",
//           "isLiveNow": false,
//           "lengthSeconds": 211,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/TyHvyGVs42U/mqdefault_6s.webp?du=3000&sqp=CM_cqKcG&rs=AOn4CLCFN8ibEn8IiKWGnVNA1LWLUJgMWA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "5 years ago",
//           "stats": {
//             "views": 2290559513
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/TyHvyGVs42U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3sLxZ9CZdlOjy6HeaSTIe_CitAg",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/TyHvyGVs42U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHJXDrIoAXY2vlOohhGHil9nq5Sw",
//               "width": 720
//             }
//           ],
//           "title": "Luis Fonsi, Demi Lovato - Échame La Culpa",
//           "videoId": "TyHvyGVs42U"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/BMZdois0D04kIJ8LtHR6YAddlABf80tIbmmsqyQk3x_rzN9rVQhWkKV6aXq2b9FvFrFVZxNe1SI=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCiKsRIULyLr783nNZm-JlAQ",
//             "title": "Marc Anthony"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "--------- Letras: Voy a reír, voy a bailar vivir mi vida la la la la voy a reír, voy a gozar vivir mi vida la la la la [x2] A veces llega la lluvia ...",
//           "isLiveNow": false,
//           "lengthSeconds": 327,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/YXnjy5YlDwk/mqdefault_6s.webp?du=3000&sqp=CKbgqKcG&rs=AOn4CLDyjJcoui4jl2VgivPiDU0XzoS-RQ",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "9 years ago",
//           "stats": {
//             "views": 1176600818
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/YXnjy5YlDwk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSBKWstZ6Q9-dTkQs0KUV-qzPdhA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/YXnjy5YlDwk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmrgmlnA_QT9U1uMj66aZWIuUZYw",
//               "width": 720
//             }
//           ],
//           "title": "Marc Anthony - Vivir Mi Vida (Official Video)",
//           "videoId": "YXnjy5YlDwk"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/gZXNbr5CAv-6RCt6JjVVA16C8YYRwjXYjkHy8HNLZ-BToPBnYru2a6xpopabgVa7NKIFaAsu=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Official Artist Channel",
//                 "type": "OFFICIAL_ARTIST_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": null,
//             "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
//             "title": "Luis Fonsi"
//           },
//           "badges": [],
//           "descriptionSnippet": "Provided to YouTube by Universal Music Group Despacito (Remix) · Luis Fonsi · Daddy Yankee · Justin Bieber VIDA ℗ Universal ...",
//           "isLiveNow": false,
//           "lengthSeconds": 231,
//           "movingThumbnails": null,
//           "publishedTimeText": null,
//           "stats": {
//             "views": 16890463
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/FdMG84qN_98/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCj7MUad0DQH6WkpIX3otAXRxgPcQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/FdMG84qN_98/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkEzTMCys6YyQRPMAkjlgsKD-ZjA",
//               "width": 720
//             }
//           ],
//           "title": "Despacito (Remix)",
//           "videoId": "FdMG84qN_98"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/bhG7T_FzfLoxqmJwGobKF1B9u9FhIXiYA8JYRPPoHcOASht0psOD3LZHZ3HqPEICEn30FWkDfg=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@7clouds",
//             "channelId": "UCNqFDjYTexJDET3rPDrmJKg",
//             "title": "7clouds"
//           },
//           "badges": [
//             "CC"
//           ],
//           "descriptionSnippet": "......... Lyrics: Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber [Intro: Justin Bieber] Comin' over in my direction So thankful ...",
//           "isLiveNow": false,
//           "lengthSeconds": 231,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/TfkP5ubz1z4/mqdefault_6s.webp?du=3000&sqp=CP76qKcG&rs=AOn4CLAxOlFPaIDFuW9b7RDLlBu3LyT4Cg",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "4 years ago",
//           "stats": {
//             "views": 42906770
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/TfkP5ubz1z4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXxsS53YwcBoOez5OE4zgPu99KHQ",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/TfkP5ubz1z4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMNe1QWDM6yXmR-lJinYVwvc8I9Q",
//               "width": 720
//             }
//           ],
//           "title": "Justin Bieber - Despacito (Lyrics / Letra) ft. Luis Fonsi & Daddy Yankee",
//           "videoId": "TfkP5ubz1z4"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaQ1L3MpYby4rhk9fQdTOKOnts-bHLFl9Fo-Gspg3Q=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@FredericBisson",
//             "channelId": "UCKLajZenVgDyfQts99xJkPQ",
//             "title": "Frederic Bisson"
//           },
//           "badges": [],
//           "descriptionSnippet": "Comin' over in my direction So thankful for that, it's such a blessin', yeah Turn every situation into Heaven, yeah Oh, you are My ...",
//           "isLiveNow": false,
//           "lengthSeconds": 229,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/7YJCp6J9H8E/mqdefault_6s.webp?du=3000&sqp=CPnuqKcG&rs=AOn4CLDvzkRjOj0MYgJMSdq8jDF55lclLA",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "6 years ago",
//           "stats": {
//             "views": 2205028
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/7YJCp6J9H8E/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGAoPzAP&rs=AOn4CLDflqCqXEEI4d1Rr7GkF3qvKZlC8g",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/7YJCp6J9H8E/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGAoPzAP&rs=AOn4CLAO0veZW0V7gPQZQz7z0P2QrwFm5w",
//               "width": 720
//             }
//           ],
//           "title": "Despacito (new video) feat. Justin Bieber (Luis Fonsi & Daddy Yankee)",
//           "videoId": "7YJCp6J9H8E"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/7mTcntNTtV6lA-72PUF1toV0lKWDPSqVAPKDX5VXndKgbCc3y2OEl9amurqDsRh2kt-XgcXZUVM=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [],
//             "canonicalBaseUrl": "/@heaven16820",
//             "channelId": "UCTikVhb0VxAd1R2QD3Uv_hg",
//             "title": "Heaven"
//           },
//           "badges": [],
//           "descriptionSnippet": "Despacito - Luis Fonsi (Lyrics) | David Guetta, The Chainsmokers, Justin Bieber, Quavo, ... #despacito #luisfonsi #titanium ...",
//           "isLiveNow": false,
//           "lengthSeconds": 884,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/Fjme7u5Kg8s/mqdefault_6s.webp?du=3000&sqp=CKPmqKcG&rs=AOn4CLCVWNXggV3C1LdsyL_nR-o7Pnof-A",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "2 months ago",
//           "stats": {
//             "views": 306497
//           },
//           "thumbnails": [
//             {
//               "height": 270,
//               "url": "https://i.ytimg.com/vi/Fjme7u5Kg8s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGwMcI_uUuxEr6jAagvh1yYCQmwQ",
//               "width": 480
//             }
//           ],
//           "title": "Despacito - Luis Fonsi (Lyrics) | David Guetta, The Chainsmokers, Justin Bieber, Quavo, ...",
//           "videoId": "Fjme7u5Kg8s"
//         }
//       },
//       {
//         "type": "video",
//         "video": {
//           "author": {
//             "avatar": [
//               {
//                 "height": 68,
//                 "url": "https://yt3.ggpht.com/ytc/AOPolaTRiUnbnqlqo6acWZl3Br5zRG4Lk0EtewZt4NcR8g=s68-c-k-c0x00ffffff-no-rj",
//                 "width": 68
//               }
//             ],
//             "badges": [
//               {
//                 "text": "Verified",
//                 "type": "VERIFIED_CHANNEL"
//               }
//             ],
//             "canonicalBaseUrl": "/@EnzoBuonaurioSax",
//             "channelId": "UC4ObeG8VQOBRyD3az1a2VzA",
//             "title": "Enzo Buonaurio Sax"
//           },
//           "badges": [],
//           "descriptionSnippet": "EMAIL: info@enzobuonauriosax.com isola di capri musica #Despacito #LuisFonsi #DaddyYankee #SaxCover #Capri.",
//           "isLiveNow": false,
//           "lengthSeconds": 240,
//           "movingThumbnails": [
//             {
//               "height": 180,
//               "url": "https://i.ytimg.com/an_webp/LUiviJfVaPI/mqdefault_6s.webp?du=3000&sqp=CKznqKcG&rs=AOn4CLBgzi2dw_ZJeu2BAVXR7fpq3ALxsw",
//               "width": 320
//             }
//           ],
//           "publishedTimeText": "2 years ago",
//           "stats": {
//             "views": 3105921
//           },
//           "thumbnails": [
//             {
//               "height": 202,
//               "url": "https://i.ytimg.com/vi/LUiviJfVaPI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmS-a5OYwb0mOSeBqDQoNK6E7uiA",
//               "width": 360
//             },
//             {
//               "height": 404,
//               "url": "https://i.ytimg.com/vi/LUiviJfVaPI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr4xDwhTFImy60sf-CX7LRJhpxAg",
//               "width": 720
//             }
//           ],
//           "title": "DESPACITO - Luis Fonsi ft. Daddy Yankee [Saxophone Version]",
//           "videoId": "LUiviJfVaPI"
//         }
//       }
//     ],
//     "cursorNext": "EpwDEglkZXNwYWNpdG8ajgNTQlNDQVFzM01sVlBNSFkxUlZOVmI0SUJDMFJrZDBSQmIwbzRZa1pyZ2dFTGQyOUNVMWROVFdnNVgyZUNBUXRyTlVnNFdubFVNVFF0TklJQkMxUmtWakJ1YUhoeVduZzBnZ0VMVXpWMlQzaENlVXBxU1dPQ0FRdGZZVFZzYURoME1WTXROSUlCQzAxSk5IcE5kbUUxUkVGVmdnRUxWVEZhVEZoMmIwczFPR2VDQVF0MVlsZFhUVll4YURaWU9JSUJDemh4VTJ4U1UyUXhkekpGZ2dFTGVWbHlRMGRJVFZkS1dEU0NBUXRGVlVvd1NFRXpNVVZDYTRJQkMwUTVUSEpGV0VZelZWTnpnZ0VMZW5KS2RFWjVOVEZtVW0tQ0FRdEdaRTFIT0RSeFRsODVPSUlCQzFSbWExQTFkV0o2TVhvMGdnRUxOMWxLUTNBMlNqbElPRVdDQVF0R2FtMWxOM1UxUzJjNGM0SUJDMHhWYVhacFNtWldZVkJKc2dFR0NnUUlHaEFDNmdFQ0NBSSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D",
//     "didYouMean": null,
//     "estimatedResults": 27052827,
//     "filterGroups": [
//       {
//         "filters": [
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJSUFRJTNEJTNE",
//             "label": "Last hour",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJSUFnJTNEJTNE",
//             "label": "Today",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJSUF3JTNEJTNE",
//             "label": "This week",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJSUJBJTNEJTNE",
//             "label": "This month",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJSUJRJTNEJTNE",
//             "label": "This year",
//             "selected": false
//           }
//         ],
//         "title": "Upload date"
//       },
//       {
//         "filters": [
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJUUFRJTNEJTNE",
//             "label": "Video",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJUUFnJTNEJTNE",
//             "label": "Channel",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJUUF3JTNEJTNE",
//             "label": "Playlist",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJUUJBJTNEJTNE",
//             "label": "Movie",
//             "selected": false
//           }
//         ],
//         "title": "Type"
//       },
//       {
//         "filters": [
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJWUFRJTNEJTNE",
//             "label": "Under 4 minutes",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJWUF3JTNEJTNE",
//             "label": "4 - 20 minutes",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJWUFnJTNEJTNE",
//             "label": "Over 20 minutes",
//             "selected": false
//           }
//         ],
//         "title": "Duration"
//       },
//       {
//         "filters": [
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdKQUFRJTNEJTNE",
//             "label": "Live",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdKd0FRJTNEJTNE",
//             "label": "4K",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJZ0FRJTNEJTNE",
//             "label": "HD",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJb0FRJTNEJTNE",
//             "label": "Subtitles/CC",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJd0FRJTNEJTNE",
//             "label": "Creative Commons",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdKNEFRJTNEJTNE",
//             "label": "360°",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdQUUFRRSUzRA==",
//             "label": "VR180",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdJNEFRJTNEJTNE",
//             "label": "3D",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdQSUFRRSUzRA==",
//             "label": "HDR",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdPNEFRRSUzRA==",
//             "label": "Location",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmRWdKSUFRJTNEJTNE",
//             "label": "Purchased",
//             "selected": false
//           }
//         ],
//         "title": "Features"
//       },
//       {
//         "filters": [
//           {
//             "cursorSelect": null,
//             "label": "Relevance",
//             "selected": true
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmQ0FJJTNE",
//             "label": "Upload date",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmQ0FNJTNE",
//             "label": "View count",
//             "selected": false
//           },
//           {
//             "cursorSelect": "ZGVzcGFjaXRvJiYmQ0FFJTNE",
//             "label": "Rating",
//             "selected": false
//           }
//         ],
//         "title": "Sort by"
//       }
//     ],
//     "refinements": [
//       "despacito guitar",
//       "despacito bts",
//       "despacito piano",
//       "despacito instrumental",
//       "despacito (karaoke)",
//       "despacito in hindi",
//       "despacito ringtone"
//     ]
//   }