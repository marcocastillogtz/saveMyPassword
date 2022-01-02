let sitios = []; ///guarda los datos en el localStorage
const addSite = (ev)=>{
ev.preventDefault();
let sitio = {
    sitio: document.getElementById('site1').value,
    usuario: document.getElementById('name1').value,
    contraseña: document.getElementById('pass1').value
}
sitios.push(sitio);
document.forms[0].reset();

/*console.warn('added' , {movies} );
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
*/

//saving to localStorage
localStorage.setItem('sitios', JSON.stringify(sitios) );
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btnAdd').addEventListener('click', addSite);
});