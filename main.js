/*data from data.js*/
function myDish(){
/*group menu by type*/
var group = menu.reduce((r, a) => {
  r[a.type] = r[a.type] || [];
  r[a.type].push(a);
  return r;
}, {});
/*create new arrays based on name*/
function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i)
    output.push(input[i][field]);
  return output;
}
var veg = getFields(group.素菜, "name");
var meat = getFields(group.荤菜, "name");
/*new array of randomly selected items*/
function getArrayItems(arr, num) {
  var temp_array = new Array();
  for (var index in arr) {
    temp_array.push(arr[index]);
  }
  var return_array = new Array();
  for (var i = 0; i < num; i++) {
    if (temp_array.length>0) {
      var arrIndex = Math.floor(Math.random() * temp_array.length);
      return_array[i] = temp_array[arrIndex];
      temp_array.splice(arrIndex, 1);
      }
      else {
        break;
        }
        }
        return return_array;
        }
var x = getArrayItems(veg,2);
var y = getArrayItems(meat,1);
var z = x.concat(y);
/*display in list*/
function makeUL(array) {
  var list = document.createElement('ul');
  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(array[i]));
    list.appendChild(item);
  }
  return list;
}
var result = document.getElementById('demo').appendChild(makeUL(z)).innerHTML;
demo.innerHTML = result;
}