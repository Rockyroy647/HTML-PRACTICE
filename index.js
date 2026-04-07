
let count = 0;

function inc(){
count++;
document.getElementById("show").innerText = count;
}
function dec(){
count--;
document.getElementById("show").innerText = count;
}



let changeimg = () =>{
    let divtag = document.querySelector('#imghere')
    divtag.computedStyleMap.backgroundimage= "url(bb2.avif)"
}