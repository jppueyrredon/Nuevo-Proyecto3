// =============================
// PORTFOLIO LUCAS FERNÁNDEZ
// JAVASCRIPT PRINCIPAL
// =============================



// Año automático del footer

const fecha = new Date();

const año = fecha.getFullYear();


const footerTexto = document.querySelector("footer p:last-child");


if(footerTexto){

    footerTexto.innerHTML =
    `© ${año} Lucas Fernández - Todos los derechos reservados.`;

}




// Animación al aparecer elementos


const elementos = document.querySelectorAll(
".proyecto, .producto, .section"
);



const mostrarElemento = () => {


elementos.forEach(elemento => {


const posicion =
elemento.getBoundingClientRect().top;


const alturaPantalla =
window.innerHeight;



if(posicion < alturaPantalla - 100){

    elemento.classList.add("mostrar");

}


});


};



window.addEventListener(
"scroll",
mostrarElemento
);



mostrarElemento();






// Confirmación simple de formularios


const formularios =
document.querySelectorAll("form");



formularios.forEach(formulario => {


formulario.addEventListener(
"submit",
function(){


alert(
"Formulario enviado correctamente. Gracias por contactarte con Lucas Fernández."
);


});


});
