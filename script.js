
const mainDiv = document.querySelector('.mainDiv');

let rowNumber = 16;

let columnNumber = 16;

createGrid();

function createGrid() {for (
  let i=0; i<rowNumber; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  mainDiv.appendChild(row)
  for (let j=0; j<columnNumber; j++) {
    let column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column)
  }
}}


function updateGrid () {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild)
  }



  var inputRow = document.querySelector(".inputRow").value
  var inputColumn = document.querySelector(".inputColumn").value;
  
  console.log(`${inputRow} x ${inputColumn}`);

  rowNumber = inputRow;
  columnNumber = inputColumn;
  createGrid();
}


