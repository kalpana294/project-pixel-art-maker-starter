// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  var table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  while(table.rows.length > 0){
    table.deleteRow(0);
    rows = document.getElementById("input_height").value;
    columns = document.getElementById("input_width").value;
    for(var i=0;i < rows;i++){
      var row_element = table.insertRow(i);
      row_element.setAttribute("class","row");
      for (var j = 0; j < columns; j++) {
      var cell= row_element.insertCell(j);
      cell.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
        this.style.borderColor="#9ecaed";
        this.style.boxShadow="0 0 10px #9ecaed";
      });
    }
  }
  return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});

}
