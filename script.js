const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

setSize();

reset.addEventListener("click", () => {
    setSize();
})





function shade(box) {
    box.style.backgroundColor = "green";
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
