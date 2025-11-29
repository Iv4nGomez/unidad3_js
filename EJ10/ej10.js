const cuerpo = document.getElementById('tbody');
const button = document.getElementById('boton')
let contador = 1
const papelera = document.getElementsByClassName('trash')[0]

const mapaPrioridad = {
    "Muy alta": 4,
    "Alta":3,
    "Media": 2,
    "Baja": 1,
    "Muy baja": 0,
};

button.addEventListener('click', () => {
    const nombreTarea = document.getElementsByName('tarea')[0].value;
    const prioridad = document.getElementsByName('prioridad')[0].value;
    const opciones = prioridad.children;
    
    cuerpo.innerHTML += '<tr><td>' + contador + '.</td><td>' + nombreTarea + '</td><td>' + prioridad +  '</td><td class="trash"><i class="fa fa-trash"></i></td></tr>'
    contador++;
    
    ordenar(cuerpo)
})

cuerpo.addEventListener('click', (event) => {
    const elemento = event.target.closest('.trash')
    
    if (elemento) {
        
        const fila = elemento.parentElement
        fila.remove()
    }
    
})

function ordenar(tabla) {
    const filas = [...tabla.children]
    filas.sort((f1,f2) => {
        
        const textoA = f1.cells[2].innerText;
        const textoB = f2.cells[2].innerText;

        const valorA = mapaPrioridad[textoA] || 0;
        const valorB = mapaPrioridad[textoB] || 0;

        console.log(valorA)
        return valorB - valorA;
    })
    console.log(filas[2])
    

    filas.forEach(fila => tabla.appendChild(fila));

}