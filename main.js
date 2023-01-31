let cont=0

async function todosLosPokes(limit=5, offset=0){
     cont++;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    const respuesta = await fetch(url);
    const data = await respuesta.json()
    console.log(data)


 data.results.forEach(async(element) => {

    let respuesta2 = await fetch(element.url)
   
    const data2 = await respuesta2.json()
    console.log(data2)

    img.innerHTML += `<div id="prueba"><img id="${cont}" src="${data2.sprites.other.dream_world.front_default 
    }" alt="">${element.name}</div>`


    
 });
 

};

todosLosPokes(9)






const habilidades = document.querySelector('#prueba')
const abrirModal = document.querySelector('#modal')
const cerrarModal = document.querySelector('#cerrar')

img.addEventListener('click',(event)=>{
if(event.srcElement.nodeName=='IMG'){
    modal.showModal()
}

const habilidades = document.querySelector('#habilidades')

habilidades.innerHTML = `<h1></h1>`


})

cerrarModal.addEventListener('click',()=>{
    modal.close()
})



