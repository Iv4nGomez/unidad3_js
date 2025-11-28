const select = document.getElementsByName('opciones')[0];
const link = document.getElementById('estilo');
const parrafo = document.getElementById('texto');

select.addEventListener('change', () => {

    const opciones = [...select.children];
    const indiceOption = select.selectedIndex
    
    aplicarEstilo(indiceOption, opciones)
} )

function aplicarEstilo(index, opciones) {
    if (index == 1) {
        parrafo.removeAttribute('style');
        parrafo.classList.remove('claseEstilo');
        parrafo.style.color = 'blue';
        parrafo.style.fontSize = '20px'
        parrafo.style.fontFamily = 'sans-serif'
    } else if (index == 0) {
        parrafo.removeAttribute('style');
        parrafo.classList.remove('claseEstilo');
        link.href = '';
    } else if(index == 2) {
        parrafo.removeAttribute('style');
        parrafo.classList.remove('claseEstilo');
        parrafo.classList.add('claseEstilo')
    } else if (index == 3) {
        parrafo.removeAttribute('style');
        parrafo.classList.remove('claseEstilo');
        link.href = 'ej08.css';

    }
}

