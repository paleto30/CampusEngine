import dinamic from "./../js/db.js"


document.addEventListener("DOMContentLoaded",(e)=>{
   cargarCards();
   cargarTitle();
   //cargarMenu();
})


function cargarMenu(){
    const secc1 = document.querySelector("#seccion1");
    secc1.insertAdjacentHTML("beforeend",
    `
        <img id="logo" src="${dinamic.servicio.seccion1.img}" alt="">
    `)
    let men = ''
    dinamic.servicio.seccion1.menus.forEach(el=>{
        const {href ,text } = el;
        men+=`
        <a class="alink  ss" href="${href}" target="_self" rel="noopener noreferrer">${text}</a>
        `
    })
}

function cargarTitle(){

    const secc = document.querySelector("#seccion2");
    let html = `
        <h1>${dinamic.servicio.seccion2.h1}</h1>
        <p><a href="${dinamic.servicio.seccion2.href}" target="_blank" rel="noopener noreferrer">${dinamic.servicio.seccion2.text}</a></p>
    `
    secc.innerHTML = html;
}

function cargarCards() {
    console.log(dinamic);
    let html = ''
    const card = document.querySelector("#cards");
    dinamic.servicio.seccion3.forEach(el =>{
        const {title ,img ,btn} = el;
        html+=`
        <div class="tarjetas " id="#contenedor-tarjetas">
            <h3>${title}</h3>
           <img src="${img}" alt="" srcset="">
           <button >${btn}</button>
        </div>
        `
        card.innerHTML = html;
    });
}


