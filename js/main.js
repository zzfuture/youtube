function sidebarOpen(){
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    sidebar.style = 'left: 0px';
    background.style = 'background: rgba(0, 0, 0, 0.400); display: block;';
    body.style = 'overflow-y: hidden;'
}
function sidebarClose(){
    const sidebar = document.querySelector("#sidebar");
    const background = document.querySelector("#sidebar-background");
    const body = document.querySelector("body");
    sidebar.style = 'left: -400px';
    background.style = 'background: transparent; display: none;';
    body.style = 'overflow-y: visible;'
}


const menuOpen = document.querySelector("#menu-open");
menuOpen.addEventListener("click", sidebarOpen);

const menuClose = document.querySelector("#menu-close");
const clickBackground = document.querySelector("#sidebar-background");
menuClose.addEventListener("click", sidebarClose);
clickBackground.addEventListener("click", sidebarClose);
