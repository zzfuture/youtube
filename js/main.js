(async ( ) => {
    const sidebar = document.querySelector("#sidebar-main");
    let peticion = await fetch(`../json/data.json`);
    let res = await peticion.json();
    sidebarInfo = res.sidebar;
    console.log(sidebarInfo);
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
        }
        else {
            sidebar.insertAdjacentHTML('beforeend', /*html*/`${sidebarInfo[0].side3.html}`);
        }
        
    }
}) ( );