// Completed JavaScript for an Etch-a-sketch project

const gridbox=document.querySelector('.gridbox');
const inputbtn=document.getElementById('inputbtn');
const squares=gridbox.querySelectorAll('div');
const btns=document.querySelectorAll('.btns');
const clear=document.getElementById('clear');
const randombtn=document.getElementById('random');
let colorPicker=document.getElementById('colorpicker');

let color = 'black';

//create initial grid that shows when the page loads
function createGrid (size) {
    gridbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridbox.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let area= size*size
    
    for (let i=0; i <area; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor)
        square.style.backgroundColor= "white";
        gridbox.appendChild(square);
    }
}
createGrid(16);

//Removes the divs so that its cleaner when grid size is changed
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
//Allows the user to select a size
function changeGrid (size) {
    removeAllChildNodes(gridbox);
    size= getSize();  
    gridbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridbox.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let area= size*size
    
    for (let i=0; i <area; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor);       
        square.style.backgroundColor= "white";
        gridbox.appendChild(square);
    }
}
function getSize (input) {
    input=parseInt(prompt("Please enter a number between 2-100"));
    if (input <= 100 && input >= 2) {
        return(input);
    } else if (input >100) {
        console.log("Number entered is greater than 100");
    } else if (input <2) {
        return "Number entered is less than 2";
    } else {
        return "Please enter a number between 2-100";
    }
}

function changeColor () {
    if (color === "random") {
        this.style.backgroundColor= `hsl(${Math.random() *360}, 100%,50%)`;
    }else if (color === "anycolor") {
        this.style.backgroundColor= colorPicker.value;
    } else if (color === "gray") {
        this.style.backgroundColor= 'gray'; 
    }   else{
        this.style.backgroundColor= color;
    }
}

//Called in the html, onclick was easier than event listener
function getColor (choice) {
    color= choice
}

function clearGrid () {
    const gridbox=document.querySelector('.gridbox');
    const squares=gridbox.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor= 'white');
}

//EventListeners

inputbtn.addEventListener('click', changeGrid); 
clear.addEventListener('click', clearGrid);
colorPicker.addEventListener('change', () => {
    return colorPicker.value;
})
colorPicker.value = '#286d8a';
