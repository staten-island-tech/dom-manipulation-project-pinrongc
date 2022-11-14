/* const button = document.getElementById("btn");
const text = document.querySelector("#text");

console.log(button);  */

const Domselectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
};

console.log(Domselectors);

function backgroundAndText (background, text) {
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
    text.style.fontSize = "40px";
}

//backgroundAndText(Domselectors.box, Domselectors.text);

Domselectors.button.addEventListener("click",function(){
    backgroundAndText(Domselectors.box,Domselectors.text);
});