const body = document.querySelector("body")

const container = document.createElement("div")
container.classList.add("container")

const parent = document.createElement("div")
parent.classList.add("parent")
parent.style.width = "500px";
parent.style.height = "500px";

var rows = 5

var boxWidth = 500/rows  + "px"
var boxHeight = 500/rows  + "px"

console.log(boxHeight)
console.log(boxWidth)

function createDiv(){
    for (let i=0;i<rows*rows;i++){
        const seperations = document.createElement("div")
        seperations.classList.add("first-children")

        seperations.style.width = boxWidth
        seperations.style.height = boxHeight

        parent.append(seperations)
    }
}

createDiv(5)
container.appendChild(parent)
body.appendChild(container)

var divisions = document.querySelectorAll(".first-children")

divisions.forEach(function(element){
    element.addEventListener("mouseover",()=>{
        element.style.background = "black"
    })
})