const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

setSize();

reset.addEventListener("click", () => {
    setSize();
})





function shade(box) {
    //square.classList.add("coloured");
    box.style.backgroundColor = "green";
    console.log(box);
}


function setSize(row = 4) {

    clearGrid();
   
    for (let i = 0; i < row * row; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id
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
