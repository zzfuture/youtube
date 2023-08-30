
(async ( ) => {
    let peticion = await fetch("data.json");
    let res = await peticion.json();
    sidebar = document.querySelector("#sidebar-main");
    let sidebarInfo = res.sidebar;
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
            'X-RapidAPI-Key': 'f277a360edmshb5ff7eaa9ddad15p1761bajsn60929e8ae4c7',
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
            'X-RapidAPI-Key': 'f277a360edmshb5ff7eaa9ddad15p1761bajsn60929e8ae4c7',
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
    const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f277a360edmshb5ff7eaa9ddad15p1761bajsn60929e8ae4c7',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return(result);
    } catch (error) {
        console.error(error);
    }
}


let comentarios = async (id) => {
    const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f277a360edmshb5ff7eaa9ddad15p1761bajsn60929e8ae4c7',
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
    let avatar = "img/channel-logo.jpg";
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
                <a href="player.html?value=${value.video.videoId}" class="recomendado">
                    <img class="thumbnail" src="${value.video.thumbnails[0].url}" alt="thumbnail">
                    <div class="recomendado-info">
                        <div class="recomendado-title">
                            ${value.video.title}
                        </div>
                        <div class="recomendado-channel">CreativeCode</div>
                        <div class="recomendado-little">
                            <div class="recomendado-views">${value.video.stats.views} visualizaciones</div>
                            <div class="recomendado-date">${value.video.publishedTimeText}</div>
                        </div>
                    </div>
                </a>`;
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
                    <div class="subs">495 suscriptores</div>
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


let closeTimeout;

function desplegarMenu() {
    clearTimeout(closeTimeout); // Cancelar cualquier cierre programado
    const desplegable = document.querySelector('#des');
    console.log('A');
    desplegable.style.display = 'block';
}

function cerrarMenu() {
    const desplegable = document.querySelector('#des');
    closeTimeout = setTimeout(function () {
        desplegable.style.display = 'none';
    }, 100); // Retrasar el cierre por 100 milisegundos para capturar clics en el desplegable
}

const inp = document.querySelector('#searchbox-input');
inp.addEventListener('focus', desplegarMenu);
inp.addEventListener('blur', cerrarMenu);

function widthDesplegable() {
    const desplegable = document.querySelector('#des');
    const body = document.querySelector('body');
    const ul = document.querySelector('ul');
    let elementStyleBody = window.getComputedStyle(body);
    let widthActual = elementStyleBody.getPropertyValue('width');
    width = widthActual.replace('px', '');
    width = parseInt(width);
    if (window.innerWidth > 1256) {
        desplegable.style.marginLeft = `${300 + ((width - 1256) / 2)}px`;
        // console.log(desplegable.style.marginLeft)
    }
    else {
        desplegable.style.marginLeft = '302px'
    }
    if (window.innerWidth < 1265) {
        ul.style.width = `${700 - ((1256 - width))}px`;
        // console.log(ul.style.width)
    }
}
window.addEventListener('resize', widthDesplegable);
widthDesplegable();

let searchInChannel = async () => {
    const input = document.querySelector("#searchbox-input").value;
    const url = `https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${input}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f277a360edmshb5ff7eaa9ddad15p1761bajsn60929e8ae4c7',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return(result);
    } catch (error) {
        console.error(error);
    }
}


(async()=> {
    const input = document.querySelector('#searchbox-input');
    let results;
    input.addEventListener('input',async function () {
        // const newInput = input.value;
        let peticion = await searchInChannel();
        let desplegable = document.querySelector("#des");
        let res = await JSON.parse(peticion);
        let content = res.contents;
        // console.log(content);
        desplegable.innerHTML = '';
        desplegable.insertAdjacentHTML("beforeend", /*html*/`
        <ul>
            ${content.map(value => {
            if (value.video) { // Verificar si el objeto tiene una clave "video"
                return /*html*/`
                    <a class="v" href="player.html?value=${value.video.videoId}">${value.video.title}</a>
                    `;
            } else {
                return; // Si no tiene una clave "video", retornar una cadena vacía
            }
        }).join('')}
        </ul>`
        );
    });
    console.log(results)
})();
let searchbox = document.querySelector("#searchbox-input");

searchbox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement === searchbox) {
        let inputValue = document.querySelector(".v");
        inputValue = inputValue.getAttribute('href');
        console.log(inputValue)
        window.location.href = inputValue;
    }
});
let lupa = document.querySelector("#searchbtn")
lupa.addEventListener('click', function () {
        let inputValue = document.querySelector(".v");
        inputValue = inputValue.getAttribute('href');
        window.location.href = inputValue;
});