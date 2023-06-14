function resetBoard(boxesPerRow) {
    const board = document.getElementById("board");

    for (let i = 0; i < boxesPerRow; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        board.appendChild(rowDiv);
    }

    const rowDivs = document.querySelectorAll(".row");
    
    rowDivs.forEach(rowDiv => {
        for (let i = 0; i < boxesPerRow; i++) {
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("element");
            rowDiv.appendChild(elementDiv);
        }
    });

    const input = document.getElementById("number-per-side");
    input.setAttribute("value", boxesPerRow);
    input.value = boxesPerRow;
}

function removeBoxes() {
    const board = document.getElementById("board");

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

let prevBoxesPerRow = "16";
window.onload = (event) => {
    resetBoard(16);
};

const form = document.getElementById("form");

submitButton = document.getElementById("submit");
// Listens to reset board
submitButton.addEventListener("click", e => {

    let boxesPerRow = document.getElementById("number-per-side").value;
    if (+boxesPerRow <= 50 && +boxesPerRow >= 1) {
        removeBoxes();
        resetBoard(+boxesPerRow);
        prevBoxesPerRow = boxesPerRow;
    } else {
        const input = document.getElementById("number-per-side");
        input.setAttribute("value", prevBoxesPerRow);
        input.value = prevBoxesPerRow;
        alert("Please enter a number between 1 and 50");
    }
});