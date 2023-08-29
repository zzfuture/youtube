(async ( ) => {
    let sidebar = document.querySelector("#sidebar-small");
    let peticion = await fetch("data.json");
    let res = await peticion.json();
    sidebarInfo = res.sidebarsmall;
    console.log(sidebarInfo);
    sidebar.insertAdjacentHTML('beforeend', /*html*/`
        ${(sidebarInfo).map(value => /*html*/ `
            <div class="sidebar-small-btn">
                <a href="#">
                    ${value.svg}
                    ${value.span}
                </a>
            </div>
        `).join('')}
    </div>`
    );
    sidebar = document.querySelector("#sidebar-main");
    console.log(sidebarInfo);
    sidebarInfo = res.sidebar;
    for (let i = 1; i < 6; i++) {
        if (i !== 3) {
            sidebar.insertAdjacentHTML('beforeend', /*html*/`
                <div class="side${i} sidebar-box">
                    ${sidebarInfo[0][`side${i}`].map(value => /*html*/ `
                        <div>
                            <a href="#">
                                ${value.svg}
                                ${value.span}
                            </a>
                        </div>
                    `).join('')}
                </div>`
            );
        } else {
            sidebar.insertAdjacentHTML('beforeend', /*html*/`${sidebarInfo[0].side3.html}`);
        }
    }
}) ( );
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
    // const input = document.querySelector("#searchbox-input").value;
    // console.log(input);
    const input = 'imgoodslowed'
    // const input = urlActual.replace(substringToRemove, "");
    console.log(input)
    const url = `https://youtube138.p.rapidapi.com/search/?q=${input}&hl=en&gl=US`;
    // console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e36be011a1msh7a1ecc6dda33540p1e8aaajsn5c1baa9a358f',
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
            'X-RapidAPI-Key': 'e36be011a1msh7a1ecc6dda33540p1e8aaajsn5c1baa9a358f',
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
            'X-RapidAPI-Key': 'e36be011a1msh7a1ecc6dda33540p1e8aaajsn5c1baa9a358f',
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


let comentarios = async (id) => {
    const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e36be011a1msh7a1ecc6dda33540p1e8aaajsn5c1baa9a358f',
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
    console.log(video_info);
    const urlActual = window.location.href;
    const urlString = urlActual;
    let videoID = urlString.split("=");

    videoID = videoID[1];
    console.log(videoID)
    console.log(typeof(videoID))
    // videoID = parseInt(videoID)
    // let videoID = (video_info.contents[0]).video.videoId;
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
    let title = moreInfo.title;
    let hashtag = ``;
    for (let i = 0; i < moreInfo.superTitle.length; i++) {
        hashtag += moreInfo.superTitle[i];
    }
    
    let relatedInfo = await related(videoID);
    relatedInfo = JSON.parse(relatedInfo);
    relatedInfo = relatedInfo.contents;

    let recomendado = document.querySelector("#recomendado-desktop");
    recomendado.innerHTML = ''
    recomendado.insertAdjacentHTML("beforeend", /*html*/`
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
    let descripcion = document.querySelector('#descripcion-desktop');
    descripcion.innerHTML = ''
    descripcion.insertAdjacentHTML("beforeend", /*html*/ `
        <div class="title">${title}</div>
        <div class="bellow-title">
            <div class="bellow-title-left">
                <img src="${avatar}"
                    alt="channel icon">
                <div class="channel-info">
                    <div class="channel-name">${autor}</div>
                    <div class="subs">4890 suscriptores</div>
                </div>
                <a href="#">Suscribirme</a>
            </div>
            <div class="bellow-title-right">
                <div class="like-section">
                    <div class="likebtn-desktop">
                        <i class='bx bxs-like like'></i>
                        <div class="likes">${likes}</div>
                    </div>
                    <i class='bx bx-dislike dislikebtn-desktop'></i>
                </div>
                <div class="share-desktop"><i class='bx bx-share bx-flip-horizontal'></i>Compartir</div>
                <div class="guardar-desktop">
                    <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"
                        style="pointer-events: none; display: block;">
                        <path
                            d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z">
                        </path>
                    </svg>
                    <div>Guardar</div>
                </div>
                <i class='bx bx-dots-horizontal-rounded bx-flip-horizontal dotdotdot-desktop'></i>
            </div>
        </div>
        <div class="info">
            <div class="info-top">
                <div class="views">${views} visualizaciones</div>
                <div class="fecha">${date}</div>
                <div class="hashtag">${hashtag}</div>
            </div>
            <div class="descripcion">${moreInfo.description}</div>
        </div>
    `);
    let cts = commentsInfo.comments;
    console.log(cts)
    let comentario = document.querySelector('#comentarios');
    comentario.innerHTML = ''
    comentario.insertAdjacentHTML('beforeend', /*html*/ `
    <div class="comentarios">${commentsInfo.totalCommentsCount} comentarios</div>
    <div class="comentarios-container">
    ${cts.map(value => /*html*/`
    <div class="comentario">
        <img src="${((value.author.avatar)[0]).url}"
                alt="autor-img">
            <div class="comentario-content">
                <div class="comentario-top">
                    <div class="autor">${value.author.title}</div>
                    <div class="comentario-date">${value.publishedTimeText}</div>
                </div>
                <div class="content">${value.content}</div>
                <div class="comentarios-likes-container">
                    <i class='bx bx-like like'></i>
                    <div class="n-likes">${value.stats.votes}</div>
                    <i class='bx bx-dislike dislike'></i>
                    <div class="responderbtn">Responder</div>
                </div>
                <div class="replies"></div>
            </div>
    </div>
    `).join('')}
    </div>`);
}
fromInput2Video();
const input = document.querySelector("#searchbox-input")
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement === input) {
        fromInput2Video();
    }
});

// const urlActual = window.location.href;