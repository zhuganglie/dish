var menu = [
  {
    "id": "001",
    "name": "红烧排骨",
    "type": "荤菜",
    "taste": "红烧",
    "recipe":"",
  },
  {
    "id": "002",
    "name": "炒青苗",
    "type": "素菜",
    "taste": "清炒",
    "recipe": "",
   },
  {
    "id": "003",
    "name": "油麦菜",
    "type": "素菜",
    "taste": "清炒",
    "recipe": "",
   },
  {
    "id": "004",
    "name": "小炒肉",
    "type": "荤菜",
    "taste": "辣炒",
    "recipe": "",
   },
  {
    "id": "005",
    "name": "土豆丝",
    "type": "素菜",
    "taste": "炝炒",
    "recipe": "",
   },
  {
    "id": "006",
    "name": "清蒸尼罗红",
    "type": "荤菜",
    "taste": "清蒸",
    "recipe": "",
   },
  {
    "id": "007",
    "name": "干锅牛蛙",
    "type": "荤菜",
    "taste": "麻辣",
    "recipe": "",
     },
  {
    "id": "008",
    "name": "香辣蟹",
    "type": "荤菜",
    "taste": "鲜辣",
    "recipe": "",
       },
  {
    "id": "009",
    "name": "滑藕片",
    "type": "素菜",
    "taste": "清炒",
    "recipe": "",
         },
];
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