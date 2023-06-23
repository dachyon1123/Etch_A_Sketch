
const mainDiv = document.querySelector('.mainDiv');

let rowNumber = 16;

let columnNumber = 16;

for (let i=0; i<rowNumber; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  mainDiv.appendChild(row)
  for (let j=0; j<columnNumber; j++) {
    let column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column)
  }
}

function processInput() {
  var input = document.querySelector(".input").value;

  console.log(input);
}
