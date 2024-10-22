
const textFieldEl = document.getElementById('field');
const counterEl =document.getElementById('counter');
const remainerEl =document.getElementById('remaining');

textFieldEl.addEventListener('keyup', ()=>{
    updateCounter();
})



function updateCounter(){
    counterEl.innerText = textFieldEl.value.length;
    remainerEl.innerText = textFieldEl.getAttribute("maxlength")- textFieldEl.value.length;
}