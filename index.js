(async () => {
    let sidebar = document.querySelector("#sidebar-small");
    let peticion = await fetch("data.json");
    let res = await peticion.json();
    sidebarInfo = res.sidebarsmall;
    // console.log(sidebarInfo);
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
    // console.log(sidebar); // No se por que pero en mis pruebas si no pongo estos console log no sale la barra xD
    sidebarInfo = res.sidebar;
    // console.log(sidebarInfo);// No se por que pero en mis pruebas si no pongo estos console log no sale la barra xD
    for (let i = 1; i < 6; i++) {
        // console.log(i) // No se por que pero en mis pruebas si no pongo estos console log no sale la barra xD
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
})();


(function () {
    const sidebar = document.querySelector("#sidebar");
    const body = document.querySelector("body");
    const clickBackground = document.querySelector("#sidebar-background");
    function adjustSidebar() {
        if (window.innerWidth < 1290) {
            sidebar.style.left = '-400px';
            sidebar.style.top = ''
            sidebar.style.transition = '0.3s ease';
            clickBackground.addEventListener('click', sidebarClose);
            // console.log('xd')

        } else {
            const sidebarsmall = document.querySelector("#sidebar-small");
            sidebar.style.left = '0px';
            sidebar.style.transition = '0s';

        }
    }
    adjustSidebar();

    window.addEventListener('resize', adjustSidebar);
})();

function sidebarOpen() {
    if (window.innerWidth < 1290) {
        // console.log('smooth')
        const sidebarContainer = document.querySelector("#sidebar-container");
        const sidebar = document.querySelector("#sidebar");
        const background = document.querySelector("#sidebar-background");
        const body = document.querySelector("body");
        const menuHeader = document.querySelector(".menu-header");
        const main = document.querySelector("main");

        sidebarContainer.style.zIndex = '300';
        sidebar.style.left = '0px';
        background.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
        background.style.display = 'block';
        background.style.zIndex = '400';
        body.style.overflowY = 'hidden';
        body.style.marginRight = '17px';
        menuHeader.style.marginLeft = '17px';
    } else {
        // console.log('pequeño');
        const sidebar = document.querySelector("#sidebar");
        const sidebarsmall = document.querySelector("#sidebar-small");
        const body = document.querySelector('body');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarsmall.classList.toggle('sidebar-hidden');
        body.classList.toggle('fullvw');

    }
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
    sidebarContainer.style.zIndex = '-1';
    sidebar.style.left = '-400px';
    background.style.zIndex = '0';
    background.style.display = 'none';
    body.style.overflowY = 'visible';
    body.style.marginRight = '0';
    menuHeader.style.marginLeft = '0';
}

const menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", sidebarClose);

let searchbox = document.querySelector("#searchbox-input");

searchbox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement === searchbox) {
        let inputValue = document.querySelector("#videos-container .v");
        inputValue = inputValue.getAttribute('href');
        window.location.href = inputValue;
    }
});
let lupa = document.querySelector("#searchbtn")
lupa.addEventListener('click', function () {
        let inputValue = document.querySelector("#videos-container .v");
        inputValue = inputValue.getAttribute('href');
        window.location.href = inputValue;
});



let videosCanal = async()=>{
    const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '751300b48cmsh805be86dec5e4eap14f5e4jsn6a76e6466b9e',
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


(async () => {
    let main = document.querySelector("#videos");
    let peticion = await videosCanal();
    let res = await JSON.parse(peticion);
    console.log(res);
    let videos = res.contents;
    console.log(videos);
    main.innerHTML = '';
    main.insertAdjacentHTML("beforeend", /*html*/`
        <div id="videos-container" class="videos-container">
            ${videos.map(value => {
        // console.log(value);
        if (value.video && value.video.movingThumbnails) { // Verificar si el objeto tiene una clave "video"
            return /*html*/`
                        <a class="v" href="player.html?value=${value.video.videoId}">
                            <img class="thumbnail" src="${(value.video.thumbnails[0]).url}" alt="thumbnail">
                            
                            <img class="movthumbnail" src="${(value.video.movingThumbnails[0]).url}" alt="movthumbnail">
                            <div class="video-info-container">
                                <div class="channel-logo-container">
                                    <img class="channel-logo" src="img/channel-logo.jpg" alt="channel-logo">
                                </div>
                                <div class="video-info">
                                    <div class="video-title">
                                        ${value.video.title}
                                    </div>
                                    <div class="video-channel">CreativeCode</div>
                                    <div class="video-little">
                                        <div class="video-views">${value.video.stats.views} views</div>
                                        <div class="video-date">${value.video.publishedTimeText}</div>
                                    </div>
                                </div>
                                
                            </div>
                        </a>`;
        } else { // Verificar si el objeto tiene una clave "video"
            return /*html*/`
                    <a href="player.html?value=${value.video.videoId}">
                    <img class="thumbnail" src="${(value.video.thumbnails[0]).url}" alt="thumbnail">
                    
                    <img class="movthumbnail" src="${(value.video.thumbnails[0]).url}" alt="movthumbnail">
                    <div class="video-info">
                        <div class="video-title">
                            ${value.video.title}
                        </div>
                        <div class="video-channel">CreativeCode</div>
                        <div class="video-little">
                            <div class="video-views">${value.video.stats.views} views</div>
                            <div class="video-date">${value.video.publishedTimeText}</div>
                        </div>
                    </div>
                </a>`;
        }
    }).join('')}
        </div>
    `);
})();



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
            'X-RapidAPI-Key': '751300b48cmsh805be86dec5e4eap14f5e4jsn6a76e6466b9e',
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
                    <a href="player.html?value=${value.video.videoId}">${value.video.title}</a>
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