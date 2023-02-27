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
menu.style.height = "500px"

enter.onclick = () => {
    enter.style.display = "none"
    enter2.style.display = "block"
    menu.style.display = "block"
}
enter2.onclick = () => {
    enter2.style.display = "none"
    enter.style.display = "block"
    menu.style.display = "none"
}