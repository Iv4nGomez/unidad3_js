const button = document.getElementById('boton')
const tablero = document.getElementById('tablero')

const tabla = document.createElement('table')
const tbody = document.createElement('tbody')

tablero.appendChild(tabla)
tabla.appendChild(tbody)

for (let indexi = 0; indexi < 8; indexi++) {
    let fila = document.createElement('tr')
    for (let indexj = 8; indexj>0; indexj--) {
        let columna = document.createElement('td')
        fila.appendChild(columna)
        columna.textContent = 'A' + indexi
        tbody.appendChild(fila)
    }
    
} 