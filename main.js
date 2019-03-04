function adjust() {

let let foodItem = document.getElementById("Add").value;
let fruitItem = document.getElementById("fruitList").checked;
let vegItem = document.getElementById('vegList').checked;

//add fruit item
if (fruitItem === true) {
   let listItem = document.createElement("li");
   let foodType = document.createTextNode(`${foodItem}`);
   list.appendChild(foodType);
   document.getElementById("fruitItem").appendChild(fruitList);
//add veg item
 } else if (vegItem === true){
   let listItem = document.createElement("li");
   let foodType = document.createTextNode(`${foodItem}`);
   list.appendChild(foodType);
   document.getElementById("vegItem").appendChild(vegList);
 }

}
