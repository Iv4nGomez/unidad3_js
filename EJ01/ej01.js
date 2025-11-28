
const capa = document.getElementById("capa");
const resultado = document.getElementById("resultado");


function iniciarRecorrido() {
    resultado.innerHTML = "<h3>Datos extraídos del árbol DOM:</h3>";
    recorrerArbol(capa);
}


function recorrerArbol(nodo) {
    mostrarInformacionNodo(nodo);
    if (nodo.childNodes.length > 0) {
        nodo.childNodes.forEach(hijo => {
            recorrerArbol(hijo);
        });
    }
}


function mostrarInformacionNodo(nodo) {
    let htmlContent = "n/a (no es Element)";
    if (nodo.nodeType === 1) { 
     
        htmlContent = nodo.innerHTML.length > 30 ? 
                      nodo.innerHTML.substring(0, 30) + "..." : 
                      nodo.innerHTML;
    
        htmlContent = htmlContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }


    let valor = nodo.nodeValue;
    if (valor === null) {
        valor = "null"; 
    } else {
      
        if (valor.trim() === "") valor = "[Salto de línea / Espacio vacío]";
    }

    const ficha = document.createElement("div");
    ficha.style.border = "1px solid #ccc";
    ficha.style.marginBottom = "10px";
    ficha.style.padding = "10px";
    ficha.style.backgroundColor = "#f0f0f0";

    // Inyectamos los 5 datos pedidos
    ficha.innerHTML = `
        <strong>NodeName:</strong> ${nodo.nodeName} <br>
        <strong>NodeType:</strong> ${nodo.nodeType} <br>
        <strong>Clase (constructor.name):</strong> ${nodo.constructor.name} <br>
        <strong>NodeValue:</strong> ${valor} <br>
        <strong>innerHTML:</strong> ${htmlContent}
    `;

    // Agregamos la ficha a la capa resultado
    resultado.appendChild(ficha);
}

// Ejecutamos el script
iniciarRecorrido();