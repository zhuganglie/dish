window.onload = () => {
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
/*var list = [veg, meat];*/
var list = veg.concat(meat);
var select = document.getElementById("choice");
for (var i = 0; i <list.length; i++) {
  var opt = list[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
};
}

function printAll() {
 var text = $('#choice option:selected').toArray().map(item => item.text).join('、');
 document.getElementById('display').innerHTML = text;
 }


