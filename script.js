const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

setSize(); //Makes initial grid defaulted to 4x4

reset.addEventListener("click", () => { //Gets input from user and makes new grid based on number
    let answer = prompt("How many columns/rows?: ")
    while (!isValid(answer)) {
        answer = prompt("Please input an integer > 1. How many columns/rows?: ")
    }
    setSize(answer);      
})


function isValid(answer) { //Check if input is a valid number between 1 and 200
    if (isNaN(answer) || answer <= 0 || answer > 200 || answer % 1 != 0) {
        return false;
    }
    return true;
}


function shade(box) { //Change colour of box selected
    if (box.classList.contains("coloured")) {
        box.style.opacity = getComputedStyle(box).opacity - 0.1;
    }
    else {
        box.classList.add("coloured");
        box.style.backgroundColor = randomColour();
    }
}


function setSize(row = 4) { //Clear grid, add new grid with user input

    clearGrid(); //Remove previous grid

    boxWidth = container.offsetWidth; //Get container size

    for (let i = 0; i < row * row; i++) { //Create grid based on inputted rows
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = boxWidth / row + "px";
        square.style.height = square.style.width;
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

function randomColour() { //Select Random Colour
    return "hsl(" + 360 * Math.random() + ',' +
             (50 + 90 * Math.random()) + '%,' + 
             (50 + 10 * Math.random()) + '%)'
}

