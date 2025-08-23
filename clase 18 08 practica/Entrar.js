//Funcion que hace un efecto de fade al entrar a cualquier boton
window.onload = function(){
    const body = document.body;
    body.style.transition= "opacity 1s";
    body.style.opacity = 0;
    setTimeout(function(){
        body.style.opacity = 1;
    },800)
}