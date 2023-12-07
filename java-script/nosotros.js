let contenedorParafo = document.getElementById("parrafo");

fetch("../inportar.json")
    .then(Response => Response.json())

    //.then(inportar => console.log(inportar.text.primertexto.texto))

    .then(inportar => {
        let texto = inportar.text.primertexto.texto
        console.log(texto)
        
        
        let parrafo = document.createElement("p")
        contenedorParafo.style.margin = "30px 70px 20px";
        contenedorParafo.appendChild(document.createTextNode(texto))
            

        
        
    })    


        
        
