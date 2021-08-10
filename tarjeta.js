const increment = document.querySelector('#aumentar');
const decrease = document.querySelector('#disminuir');
const cardpantallaPrincipal = document.querySelector('#pantallaPrincipal');
const cardcolorPantalla = document.querySelector('#colorPantalla');
const cardenviar = document.querySelector('#enviar');
const cardchange = document.querySelector('#change');
const cardinput = document.querySelector('#input');
const cardicono = document.querySelector('#icono');
let cont = 0;
increment.addEventListener('click', aumentarBorde);
decrease.addEventListener('click', disminuirBorde);

cardchange.addEventListener('click', color);

function aumentarBorde(){
    cont+=10;
    cardpantallaPrincipal.style.borderRadius = cont + 'px';
    cardcolorPantalla.style.borderTopLeftRadius = cont + 'px';
    cardcolorPantalla.style.borderTopRightRadius = cont + 'px';  
}
function disminuirBorde(){
    cont-=10;
    cardpantallaPrincipal.style.borderRadius = cont + 'px';
    cardcolorPantalla.style.borderTopLeftRadius = cont + 'px';
    cardcolorPantalla.style.borderTopRightRadius = cont + 'px';   
}
function color(){
    cardcolorPantalla.style.backgroundColor=cardinput.value;
    cardenviar.style.backgroundColor=cardinput.value;
    cardicono.style.backgroundColor=cardinput.value;

    
}

    
