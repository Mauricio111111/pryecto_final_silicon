let contenedorParafo = document.getElementById("parrafo");

const contenido = ("../inportar.json");

fetch("${contenido}/texto")
    .then((Response) =>Response.json())
    .them((texto) => {
        texto.forEach(texto => {
            let parrafo = document.createElement("p");
            parrafo.appendChild(document.createTextNode(texto))
        });
    })
    