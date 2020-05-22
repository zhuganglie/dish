var filter0 = menu.filter(function(veg) {
  return veg.type == "素菜";
});
var filter1 = menu.filter(function(meat){
  return meat.type == "荤菜";
});
function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i)
    output.push(input[i][field]);
  return output;
}
var veg = getFields(filter0, "name");
var meat = getFields(filter1, "name");
var list = [veg, meat];
function getList() {
  var sltType = document.form1.type;
  var sltName = document.form1.name;
  var typeName = list[sltType.selectedIndex - 1];
  sltName.length = 1;
  for (var i = 0; i <typeName.length; i++) {
    sltName[i + 1] = new Option(typeName[i], typeName[i]);
  };
};
/*$(document).ready(function() {
  $('#name').on('change', function() {
    var optionText = $("#name option:selected").text();
    alert(optionText);
  });
});*/
$("select")
.change(function() {
    var str = "";
    $("select#name option:selected").each(function() {
      str += $(this).text() + " ";
    });
    $("#display").text(str);
  })
  .trigger("change");