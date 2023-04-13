

async function cartero() { 
    alert("Holi!! somos el Trio Fantástico")
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        console.log(respuesta)
        const datos = await respuesta.json()
        alert(datos.results[0].name)
    }
    catch (error) {
        console.log("El cartero se perdio con el error")
    }
}
    cartero()