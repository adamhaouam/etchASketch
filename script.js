const container = document.querySelector(".container");




for (let i = 0; i < 16; i++) {
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


function shade(box) {
    //square.classList.add("coloured");
    box.style.backgroundColor = "green";
    console.log(box);
}
