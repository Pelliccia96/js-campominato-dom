const buttonEl = document.getElementById("button");

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
        gridContainerEl.append(newCell);

        newCell.addEventListener("click", function() {
            this.classList.toggle("bg-primary");
            console.log(this.textContent);
        })
    }
})
