const buttonEl = document.getElementById("button");
let bombs = [];

buttonEl.addEventListener("click", function() {
    const options = document.getElementById("grids");
    let grid = parseInt(options.value);
    console.log("Numero righe: " + grid);

    let totGrid = grid * grid;
    console.log("Numero celle: " + totGrid);

    const gridContainerEl = document.querySelector(".grid-container");
    gridContainerEl.innerHTML = "";

    for (let i = 1; i <= totGrid; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.flexBasis = 100 / grid + "%";
        newCell.innerHTML = `${i}`;

        newCell.dataset.numCella = i + 1;
        newCell.addEventListener( "click", onCellClick );
        
        gridContainerEl.append( newCell );

        newCell.addEventListener("click", function() {
            this.classList.toggle("bg-primary");
            console.log(this.textContent);
        })
    }
})

function onCellClick() {
    const numCella = +this.dataset.numCella;

    if (bombs.includes(numCella)) {
        alert("Hai trovato una bomba!");
        this.classList.add("bg-danger");
    }
}

/**
 * @param {number} min (numero minimo);
 * @param {number} max (numero massimo);
 */

function generateRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * @param {number}
 * @param {array}
 */

function generateBombList(grid) {
    const bombList = [];

    while (bombList.length < 16) {
        const num = generateRandomNumber(1, grid);
        if (!bombList.includes(num)) {
            bombList.push (num);
        }
    }
    return bombList;
}
