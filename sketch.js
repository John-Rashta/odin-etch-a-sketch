function makeGrid(size) {

    const divContainer = document.querySelector(".container");
    
    //clear the grid to avoid overloading
    while(divContainer.firstChild) {

        divContainer.removeChild(divContainer.firstChild);
    }

    //get the pixel per box, remove 2 for the borders and avoid big decimal numbers
    boxSize = Number(((960 / size) - 2).toFixed(1));




    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {
    
            //create a box, style it and add to container
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("box");
            newDiv.style.width = `${boxSize}px`;
            newDiv.style.height = `${boxSize}px`;
            divContainer.appendChild(newDiv);
            
        }
    }

    /*
    const sketchBox = document.querySelectorAll(".box");

    sketchBox.forEach(function (box) {
        box.addEventListener("mouseover", function() {
            console.log(box);
            box.classList.toggle("hovered");
        })
    });
*/
    divContainer.addEventListener("mouseover", function (event) {

        overBox = event.target;

        if (overBox.classList.contains("box")) overBox.style.backgroundColor = "pink";
    
    });

}


makeGrid(16);

