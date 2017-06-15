'use strict';
//apply additional rule to js code and things to watch for


//a constructor with 3 parameters
function Item(name, price, color) {
  //create a new property called name
  this.name = name;
  this.color = color;

  this.price = price;
}
//prototype lives out of constructor, only created once and shared across all items; each item can call on this prototype if needed; every item can use that function
//not a global function; function expression, an anomymous function stored in makeRow
//just defining what a function can do, but no automatically executed
//method is a special type of function
//create an instance of makerow function that all items can share
Item.prototype.makeRow = function() {
  //step 1 - create element
  var newRowEl = document.createElement('tr');

  //step 2 - configure/mutate the ROW element
  //.createElement is a method and a function
  //create <tr></tr>

  var itemDataEl = document.createElement('td');
  //'this' is an instance of an item
  //.textContent add a string; text that goes between the 2 tags of <td></td>
  itemDataEl.textContent = this.name;
  //<tr>
  //  <td>shoes</td>
  //</tr>
  newRowEl.appendChild(itemDataEl);

  var priceDataEl = document.createElement('td');
  priceDataEl.textContent = this.price;
  newRowEl.appendChild(priceDataEl);

  var colorEl = document.createElement('td');
  colorEl.textContent = this.color;
  newRowEl.appendChild(colorEl);

  //step 3 - append element to the document
  tableBodyEl.appendChild(newRowEl);
};

var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

var blackShoes = new Item('Shoes', '49.99', 'Black');
var whiteShoes = new Item('Shoes', '39.99', 'White');
var brownShoes = new Item('Shoes', '9.00', 'Brown');
var redShoes = new Item('Shoes', '199.00', 'Blingy Red');

var newShoesArray = [];

for (var i = 1; i <= 10; i++) {
  var newShoes = new Item('Shoes ' + i, '19.99', 'Rainbow');
  newShoesArray.push(newShoes);
}

var allItems = [blackShoes, whiteShoes, brownShoes, redShoes];

allItems = allItems.concat(newShoesArray);

console.log(allItems);

for (var j = 0; j < allItems.length; j++) {

  //brackets as subscripts to access a specific index
  //var currentItem is a temporary variable
  //var currentItem = allItems[j];//all item at index j
  //currentItem.makeRow();//call makerow on the currentItem

  allItems[j].makeRow();
}

var formEl = document.getElementById('form');

formEl.addEventListener('submit', handleSubmit);

//
function handleSubmit(event){
  event.preventDefault();
  //.preventDefault = to not clear out our console, don't reload the page, don't remove everything it just rendered

  //.value = I just want to console.log the "value"
  console.log(event.target.itemName.value);



  // itemName is camel case bc js only recognizes camel case
  // console.log(event.target.itemPrice.value);
  // console.log(event.target.itemColor.value);

//target = formEl bc of line 79
  var itemName = event.target.itemName.value;
  //
  var itemPrice = event.target.itemPrice.value;
  var itemColor = event.target.itemColor.value;

  var newItem = new Item(itemName, itemPrice, itemColor);
  newItem.makeRow();

//var bodyElement = document.body  to console.log anywhere I click on the page
  var tableElement = document.getElementById('generated-table');
  talbeElement.addEventListener('click', tableClicked);

//reference to event to passing event into the parameters
  function tableClicked(event){
    console.log(event.target);
  }
