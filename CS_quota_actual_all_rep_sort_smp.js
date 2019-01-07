$ = jQuery;
$( document ).ready(function() {

  $(".emp_col").unbind('click').bind('click', function(){
      var colIndex = $(this).index();
      sortTable(colIndex);
  }); 

  $(".diff_col").unbind('click').bind('click', function(){
      var colIndex = $(this).index();
      sortTable(colIndex);
  }); 

});

function sortTable(colIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table_budget_actual");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 3); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[colIndex];
      y = rows[i + 1].getElementsByTagName("TD")[colIndex];
      //check if the two rows should switch place:
      if (colIndex == 0 || colIndex == 1) {
        if (i < (rows.length - 3)) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
          }
        }
      } else {
          if (x.innerHTML.replace('%', '').replace(',', '') * 1 < y.innerHTML.replace('%', '').replace(',', '') * 1) {
              shouldSwitch = true;
              break;
          }
      }
   
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


