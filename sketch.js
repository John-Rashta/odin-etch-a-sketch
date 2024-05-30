const divContainer = document.querySelector(".container");

function makeGrid(size) {

    
    
    //clear the grid to avoid overloading
    while(divContainer.firstChild) {

        divContainer.removeChild(divContainer.firstChild);
    }

    //get the pixel per box, remove 2 for the borders and avoid big decimal numbers
    const boxSize = Number(((960 / size) - 2).toFixed(1));




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
}

//ADD the event to the container so it delegates to the boxes
divContainer.addEventListener("mouseover", function (event) {

    const overBox = event.target;

    const colors = [0, 0, 0];
    colors.forEach((color, index) => colors[index] = Math.floor(Math.random() * 256));


    if (overBox.classList.contains("box")) {
        
        overBox.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        
        if (!(overBox.style.opacity === "1")) {

            overBox.style.opacity = Number(overBox.style.opacity) + 0.1 ;
        }
        
    
    };

});

function askSize() {

    let size = prompt("What's the Grid Size? (Max 100)");
    

    while (!(size = Number(size))) {
        size = prompt("Input a Number for the Grid.");
    }

    while (size < 0 || !(Number.isInteger(size))) {
        size = prompt("Input a positive integer number.");
    }

    while (size > 100) {
        size = prompt("Input a number equal or lower than 100.");
    }

    return size;

   

}

//GET button and make it trigger the grid function to resize
const gridButton = document.querySelector("button");

gridButton.onclick = () => makeGrid(askSize());

makeGrid(16);

