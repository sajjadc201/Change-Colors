const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
const randomColors = ["red", "green", "blue", "yellow"]
colorBtn.addEventListener("click", changeColor);

function changeColor() {
    // bodyBcg.style.backgroundColor = 
    let random = Math.floor(Math.random()*randomColors.length);
    bodyBcg.style.backgroundColor = randomColors[random]
}