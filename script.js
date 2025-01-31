const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

setSize();

reset.addEventListener("click", () => {
    let answer = prompt("How many columns/rows?: ")
    while (!isValid(answer)) {
        answer = prompt("Please input an integer > 1. How many columns/rows?: ")
    }
    setSize(answer);      
})


function isValid(answer) {
    if (isNaN(answer) || answer <= 0 || answer > 200 || answer % 1 != 0) {
        return false;
    }
    return true;
}


function shade(box) {
    if (box.classList.contains("coloured")) {
        box.style.opacity = getComputedStyle(box).opacity - 0.1;
        console.log(getComputedStyle(box).opacity);
    }
    else {
        box.classList.add("coloured");
        box.style.backgroundColor = randomColour();
    }
}


function setSize(row = 4) {

    clearGrid();
    boxWidth = container.offsetWidth;

    for (let i = 0; i < row * row; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = boxWidth / row + "px";
        square.style.height = square.style.width;
        //alert(square.style.width)
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("mouseenter", (e) => {  
            shade(e.target);
        })
    });
}


function clearGrid() { //Removes all children of container
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function randomColour() {
    return "hsl(" + 360 * Math.random() + ',' +
             (50 + 90 * Math.random()) + '%,' + 
             (50 + 10 * Math.random()) + '%)'
}

