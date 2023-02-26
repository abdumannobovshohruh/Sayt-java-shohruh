let card = document.querySelector(".card")
let enter = document.querySelector(".enter")
let nameS = document.querySelector(".nameS")
let enter2 = document.querySelector(".enter2")
let menu = document.querySelector(".menu")
console.log(card.style);
console.log(enter.style);
card.style.backgroundColor = "brown"
card.style.border = "3px solid white"
card.style.backgroundColor = "blue"
card.style.marginTop = "50px"
nameS.style.color = "white"

enter2.onclick = () => {
   enter2.style.display = "none"
}
menu.onclick = () => {
    menu.style.display  = "none"    
    menu.style.backgroundColor = "black"
    menu.style.translate = "-500px"   
}
enter.ondblclick = () => {
    enter.style.display = "none"
}
