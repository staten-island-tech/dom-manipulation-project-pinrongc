/* const button = document.getElementById("btn");
const text = document.querySelector("#text");

console.log(button);  */

const Domselectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.querySelector ("big-black-box"),
};

console.log(Domselectors);

function backgroundAndText (background, text) {
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
}

backgroundAndText(Domselectors.box, Domselectors.text);