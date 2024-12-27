const square = document.getElementById("square");
const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");

let size = 50; 

decreaseButton.addEventListener("click", () => {
    size = Math.max(15, size - 15); 
    square.style.width = size + "px";
    square.style.height = size + "px";
});

increaseButton.addEventListener("click", () => {
    size = Math.min(200,size+15);
    square.style.width = size + "px";
    square.style.height = size + "px";
});