var canvas = document.querySelector(".canvas")
var rainbow = document.querySelector(".rainbow")
var mainColor = "black"
var palette = ["black", "white", "red", "blue", "green", "yellow", "purple", "pink", "gray", "orange", "brown",]

function createCanvas() {
    for (var i = 0; i < 70; i++) {
        var section = document.createElement("section")
        canvas.appendChild(section)
        for (var j = 0; j < 50; j++) {
            var sectionsOfPage = document.querySelectorAll("section")
            var div = document.createElement("div")
            div.className = "canvasDivs"
            div.addEventListener("click", eventTrigger)
            sectionsOfPage[i].appendChild(div)
        }
    }
}
function createPalette() {
    var footer = document.createElement("footer") 
    rainbow.appendChild(footer)
    for (var i = 0; i < palette.length; i++) {
        var choices = document.querySelector("footer")
        var div = document.createElement("div")
        div.style.backgroundColor = palette[i]
        div.className = "colorPalette"
        div.addEventListener("click", eventTrigger)
        choices.appendChild(div)
    }
}
createCanvas() 
createPalette()


function eventTrigger(event) {
    var click = event.target.className
    if (click == "canvasDivs") {
      if (event.type === "click" && event.buttons === 0) 
      return event.target.style.backgroundColor = mainColor
    }
    if (click == "colorPalette") {
      mainColor = event.target.style.backgroundColor
    }
}