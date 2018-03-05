// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var table = $('#pixel_canvas');

function makeGrid() {

// Your code goes here!
table.empty();
  var height = $("#input_height").val;
  var width = $("#input_width").val;
  for(var i = 0; i < height; i++){
        elem_height = document.createElement('tr');
        //Making of cells in each built row
        for(var j = 0; j < width; j++){
            elem_width = document.createElement('td');
            elem_height.append(elem_width);
        }
        table.append(elem_height);
    }
  $('td').css('backgroundColor', '#FFF');
}

//Setting background-color
table.on('click', 'td',function(){
  var color=$('#colorPicker').val();
  $(this).css('background-color',color);
});

//Re-setting background-color
table.on('dblclick', 'td',function(){
  $(this).css('background-color','#ffffff');
});
var btn =$('#submit');
// When size is submitted by the user, call makeGrid()
$(btn).click(function(){
  makeGrid();
});
}
