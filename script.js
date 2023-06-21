const gridbox=document.querySelector('.gridbox');
const inputbtn=document.getElementById('inputbtn');
const squares=gridbox.querySelectorAll('div');
const btns=document.querySelectorAll('.btns');
const clear=document.getElementById('clear');
let colorPicker=document.getElementById('colorpicker');

let color = 'black';

function createGrid (size) {
    gridbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridbox.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let area= size*size
    
    for (let i=0; i <area; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor='black'
        })       
        square.style.backgroundColor= "white";
        gridbox.appendChild(square);
    }
}
createGrid(16);