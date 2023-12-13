const body = document.querySelector("body")

const container = document.createElement("div")
container.classList.add("container")

const div1 = document.createElement("div")
div1.classList.add("first-children")

const div2 = document.createElement("div")
div2.classList.add("first-children")

const div3 = document.createElement("div")
div3.classList.add("first-children")

const div4 = document.createElement("div")
div4.classList.add("first-children")

const div5 = document.createElement("div")
div5.classList.add("first-children")

// function changeColor(color){
//     div1.style.background = color
// }

// div1.addEventListener("mouseover",() => {
//     changeColor("blue")
// })

// div1.addEventListener("mouseout",() =>{
//     changeColor("white")
// })



container.appendChild(div1)
container.appendChild(div2)
container.appendChild(div3)
container.appendChild(div4)
container.appendChild(div5)
body.appendChild(container)

var divisions = document.querySelectorAll(".first-children")

divisions.forEach(function(element){
    element.addEventListener("mouseover",()=>{
        element.style.background = "blue"
    })
})