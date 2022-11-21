
/* 
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

function changeLi() {
    let pointIndex= 1;
    Domselectors.points.forEach((point) =>{
        point.addEventListener("click", function(){
            point.textContent = `Hello I am point ${pointIndex}`;
            pointIndex++;
        })
    })

}

changeLi()
 */
/* 
const Domselectors = {
    button: document.getElementById ("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector(`#input`),
};

const cat = "meow";
Domselectors.box.insertAdjacentHTML("beforeend", `<h1>We are an H1</h1>`);

Domselectors.button.addEventListener("click", function() {
    let input = Domselectors.input.value;
   console.log(input);
});

 */


const DOMselectors = {
    display: document.getElementById("display"),
    form: document.getElementById("form"),
    title: document.getElementById("Album"),
    artist: document.getElementById("Artist"),
    image: document.getElementById("Image"),
    url: document.getElementById ("url"),
    remove: document.getElementById ("remove")
}

DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();

    let album = {};
    album.artist=document.getElementById("artist").value;
    album.title=document.getElementById("title").value;
    album.url=document.getElementById("url").value;


    DOMselectors.display.insertAdjacentHTML(
    "afterend",
    `<div class= "display-card" id="display-card">
    <img class= "display-img" src= "${album.url}"/>
    <h2 class="display-artist">${album.artist}</h2>
    <h3 class= "display-album">${album.title}</h3>
    <button id = "removebtn">Remove Album</button>
    </div>`
   );
   
   function remove() {
    let removebtn = document.getElementById(`removebtn`)
 removebtn.addEventListener("click", function(){
    document.getElementById(`display-card`).remove()
 })
   }
   remove();
})



