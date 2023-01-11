array = []

const buttonAddTask = document.getElementById("add-task")
const inputTask = document.getElementById("input-task")
const tasks = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputRealizadas = document.getElementById("realizadas")

function updateState(){
    var tasksHTML = ""
    console.log(array.length)
    if(array.length === 0){
        tasks.innerHTML = ""
        return
    }
    array.forEach((task,index) => {
        tasksHTML += `
        <tr>
            <td>${index}</td>
            <td>${task.descripcion}</td>
            <td><input type="checkbox" onclick="completarTask(${index})" ${task.estado ? "checked" : "hola"}></td>
            <td><a class="btn btn-danger" onclick="eliminarTask(${index})">eliminar</a></td>
        </tr>
        `
    
    });

    inputTotal.innerText = array.length
    arrayFiltrado = array.filter(val => val.estado === true)
    inputRealizadas.innerText = arrayFiltrado.length

    tasks.innerHTML = tasksHTML
}

function completarTask(id){
    array[id].estado = array[id].estado ? false : true
    console.log(array)
    updateState()
    
}

function eliminarTask(id){
    array.splice(id, 1)
    updateState()
}

function addTask(){
    message = inputTask.value
    array.push({
        descripcion:message,
        estado: false
    })
    updateState()
}

buttonAddTask.addEventListener('click',addTask)