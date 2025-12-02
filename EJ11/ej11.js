const listaAlumnos = document.getElementById('listas')
const opciones = document.getElementsByName('tipo')[0]

const aprobados = document.getElementById('aprobados');
const recuperacion = document.getElementById('recuperacion');
const repetir = document.getElementById('repetir');

const btnCrear = document.getElementById('btnCrearTablas');

const btnBorrar = document.getElementById('btnBorrarTablas');

const caja = document.getElementById('tablas')

btnCrear.addEventListener('click', () => {
    caja.innerHTML = "<table border=1><tr>hola mundo</tr></table>"
    const lista = document.querySelector('#listas ul')
    const listaAlumnos = [...lista.children]
    listaAlumnos.forEach(element => {
        console.log(element);
        caja.innerHTML += element.outerHTML
    });
  
 
})

btnBorrar.addEventListener('click', () => {
    caja.innerHTML = "";
})

let posVF = true;

listaAlumnos.addEventListener('click', (event) => {
    const opcionSeleccionada = document.querySelector('input[name="tipo"]:checked').value;
    const pos = document.getElementById('combo').value
  console.log(pos)
    if (pos == 'ultimo') {
        posVF = false;
    } else {
         posVF = true;
    }
    
    const objetivo = event.target.closest('.caja ul li ul li');


    console.log(posVF)
    if (objetivo != null) {
    if (opcionSeleccionada == 'aprob') {
        if (!posVF) {
            aprobados.append(objetivo)
        } else {
            aprobados.prepend(objetivo)
        }
    } else if (opcionSeleccionada == 'recup') {
         if (!posVF) {
           recuperacion.append(objetivo)
        } else {
            recuperacion.prepend(objetivo)
        }

    } else if (opcionSeleccionada == 'repet') {
           if (!posVF) {
            repetir.append(objetivo)
        } else {
            repetir.prepend(objetivo)
        }
    }
    }
})