
import { lista_de_componentes } from "./data.js";


lista_de_componentes.forEach((cada_componente)=>{

    let div_componente = document.querySelector(".root");


    let div_base  = document.createElement("div")

    div_base.innerHTML = `
    
    
    <div class="contenedor">
        <h1>${cada_componente.nombre}</h1>
        <span class="descrip"> ${cada_componente.descripcion}</span>
        <button class="cambio">Boton</button>
    </div>


    `;
    div_componente.appendChild(div_base);


})


let puchar = document.querySelector(".cambio")
    



