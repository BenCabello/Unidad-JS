element = document.getElementById("ele1")

function pintar(color = "green") {
    element.style.backgroundColor = color
}
element.addEventListener("click", () => pintar("yellow"));