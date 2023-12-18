const body = document.querySelector("body")

const container = document.createElement("div")
container.classList.add("container")

const header = document.createElement("div")
header.classList.add("header")

const heading = document.createElement("h1")
heading.classList.add("heading")
heading.textContent = "Etch-A-Sketch"
header.appendChild(heading)

const second = document.createElement("div")
second.classList.add("second")

const sizeButton = document.createElement("button")
sizeButton.classList.add("sizeButton")
sizeButton.textContent = "size"
second.appendChild(sizeButton)

const colorButton = document.createElement("button")
colorButton.classList.add("colorButton")
colorButton.textContent = "color"
second.appendChild(colorButton)

const parentDiv = document.createElement("div")
parentDiv.classList.add("parent")
parentDiv.style.width = "600px";
parentDiv.style.height = "600px";


function createDiv(rows){
    for (let i=0;i<rows*rows;i++){
        const seperations = document.createElement("div")
        seperations.classList.add("first-children")

        var boxWidth = Math.floor(600/rows)  + "px"
        var boxHeight = Math.floor(600/rows)  + "px"

        seperations.style.width = boxWidth
        seperations.style.height = boxHeight

        parentDiv.append(seperations)
    }
}

createDiv(10)
body.appendChild(header)
body.appendChild(second)
container.appendChild(parentDiv)
body.appendChild(container)

var colorChoice = "blue"


sizeButton.addEventListener("click", () =>{
    var userChoice = prompt("Enter the size: ")
    parentDiv.innerHTML = ""
    createDiv(userChoice)

    var divisions = document.querySelectorAll(".first-children")

    divisions.forEach(function(element){
        element.addEventListener("mouseover",()=>{
            element.style.background = colorChoice
    })
})
})

colorButton.addEventListener("click", () =>{
    colorChoice = prompt("Enter the color: ")
})

var divisions = document.querySelectorAll(".first-children")

divisions.forEach(function(element){
    element.addEventListener("mouseover",()=>{
        element.style.background = colorChoice
    })
})