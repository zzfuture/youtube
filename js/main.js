// FUNCION ABRIR SIDEBAR
function sidebarOpen() {
    const sidebarContainer = document.querySelector("#sidebar-container");
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    const menuHeader = document.querySelector(".menu-header");
    const main = document.querySelector("main");

    sidebarContainer.style = 'z-index: 300';
    sidebar.style = 'left: 0px';
    background.style = 'background-color: rgba(0, 0, 0, 0.400); z-index: 400;';
    body.style = 'overflow-y: hidden; right: 17px'
    menuHeader.style = "margin-left: 17px;";
    main.style = "margin-left: 17px;";
}


const menuOpen = document.querySelector("#menu-open");
menuOpen.addEventListener("click", sidebarOpen);

// FUNCION CERRAR SIDEBAR
function sidebarClose() {
    const sidebarContainer = document.querySelector("#sidebar-container");
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    const menuHeader = document.querySelector(".menu-header");
    const main = document.querySelector("main");

    sidebarContainer.style = 'z-index: -1';
    sidebar.style = 'left: -400px';
    background.style = 'z-index: 0; visibility: hidden';
    body.style = 'overflow-y: visible;'
    menuHeader.style = "margin-left: 0px;";
    main.style = "margin-left: 0px;";
}

const menuClose = document.querySelector("#menu-close");
const clickBackground = document.querySelector("#sidebar-background");
menuClose.addEventListener("click", sidebarClose);
clickBackground.addEventListener("click", sidebarClose);

let searchInput = async () => {
    const input = document.querySelector("#searchbox-input").value;
    // console.log(input);

    const url = `https://youtube138.p.rapidapi.com/search/?q=${input}&hl=en&gl=US`;
    // console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '377b093aa1mshafe585589a6a003p19d139jsnfd6f18125c57',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        return (result);
    } catch (error) {
        console.error(error);
        return null;
    }
}

let videoInfo = async (id) => {
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '377b093aa1mshafe585589a6a003p19d139jsnfd6f18125c57',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }
}

let related = async (id) => {
    const url = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '377b093aa1mshafe585589a6a003p19d139jsnfd6f18125c57',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


let comentarios = async (id) =>{
    const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '377b093aa1mshafe585589a6a003p19d139jsnfd6f18125c57',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function fromInput2Video() {
    let video_info = await searchInput();
    video_info = JSON.parse(video_info);
    let videoID = (video_info.contents[0]).video.videoId;
    console.log(`CODIGO VIDEO: ${videoID}`);
    
    let moreInfo = await videoInfo(videoID);
    moreInfo = JSON.parse(moreInfo);
    let commentsInfo = await comentarios(videoID);
    commentsInfo = JSON.parse(commentsInfo);

    video_url = `https://www.youtube.com/embed/${videoID}?&autoplay=1`;
    const video_html = document.querySelector("#videoInjected");
    video_html.setAttribute('src', video_url);
    
    let autor = moreInfo.author.title;
    let avatar = ((video_info.contents[0]).video.author.avatar[0]).url;
    let date = (video_info.contents[0]).video.publishedTimeText;
    let description = moreInfo.description;
    let n_comments = moreInfo.stats.comments;
    let likes = moreInfo.stats.likes;
    let views = moreInfo.stats.views;
    let hashtag = ``;
    for (let i = 0; i < moreInfo.superTitle.length; i++){
        hashtag += moreInfo.superTitle[i];
    }
    let comments = commentsInfo.comments;
    let relatedInfo = await related(videoID);
    relatedInfo = JSON.parse(relatedInfo);
    relatedInfo = relatedInfo.contents;

    let seleccion = document.querySelector("#recomendado-desktop");
    seleccion.insertAdjacentHTML("beforeend", /*html*/`
    <div id="recomendado-container" class="recomendado-container">
        ${relatedInfo.map(value => {
            if (value.video) { // Verificar si el objeto tiene una clave "video"
                return /*html*/`
                <div class="recomendado">
                    <img class="thumbnail" src="${value.video.thumbnails[0].url}" alt="thumbnail">
                    <div class="recomendado-info">
                        <div class="recomendado-title">
                            ${value.video.title}
                        </div>
                        <div class="recomendado-channel">${value.video.author.title}</div>
                        <div class="recomendado-little">
                            <div class="recomendado-views">${value.video.stats.views} visualizaciones</div>
                            <div class="recomendado-date">${value.video.publishedTimeText}</div>
                        </div>
                    </div>
                </div>`;
            } else {
                return; // Si no tiene una clave "video", retornar una cadena vacía
            }
        }).join('')}
    </div>`
        );
}

const input = document.querySelector("#searchbox-input")
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement === input) {
        fromInput2Video();
    }
});







