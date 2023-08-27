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
    video_url = `https://www.youtube.com/embed/${video_url}?&autoplay=1`
    const video_html = document.querySelector("#videoInjected");
    video_html.setAttribute('src', video_url)
}

const input = document.querySelector("#searchbox-input")
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement === input) {
        fromInput2Video();
    }
});