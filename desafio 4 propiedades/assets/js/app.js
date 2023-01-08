const dptos = [
    {
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 3,
        "metros": 200,
    },{
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 4,
        "metros": 400,
    },{
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 1,
        "metros": 70,
    },{
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 2,
        "metros": 150,
    },{
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 6,
        "metros": 400,
    },{
        "nombre": "Departamento",
        "descripcion": "Desde las alturas todo se ve mejor",
        "src": "./assets/img/descarga.jpg",
        "cuartos": 2,
        "metros": 50,
    }
]

const sectionMain = document.getElementById("main")
const inputCuartos = document.getElementById("cuartos")
const inputMetrosDesde = document.getElementById("m-desde")
const inputMetrosHasta = document.getElementById("m-hasta")
const buttonBuscar = document.getElementById("buscar")
const textTotal = document.getElementById("total")

var total

function setTotal(array){
    textTotal.innerText = array.length
}

function alterMain(array){
    dptosHTML = array.map(val => `
    <article class="card">
                <div class="card-img">
                    <img src="${val.src}" alt="">
                </div>
                <div class="card-body">
                    <h3>Nombre: ${val.nombre}</h3>
                    <p>Metros: ${val.metros}</p>
                    <p>Cuartos: ${val.cuartos}</p>
                    <p>${val.descripcion}</p>
                    <button><h3>Ver mas</h3></button>
                </div>
            </article>
    `)
    let articles = dptosHTML.join("")
    main.innerHTML = articles
}

function init(){
    alterMain(dptos)
    setTotal(dptos)
}

init()

function filterByRooms(array){
    numCuartos = inputCuartos.value
    if(!numCuartos){
        return null
    }
    arrayFilter = array.filter(val => val.cuartos === +numCuartos)
    return arrayFilter
}

function filterByMeters(array){
    metersDesde = inputMetrosDesde.value
    metersHasta = inputMetrosHasta.value
    if(!metersHasta || !metersDesde){
        alert("Faltan campos por rellenar")
        return null
    }
    arrayFilter = array.filter(val => val.metros >= +metersDesde && val.metros <= +metersHasta)
    return arrayFilter
}

buttonBuscar.addEventListener('click', function(){
    finalArray = filterByRooms(dptos) != null ? filterByRooms(dptos) : dptos 
    finalArray = filterByMeters(finalArray) != null ? filterByRooms(dptos) : finalArray
    alterMain(finalArray)
    setTotal(finalArray)
})
