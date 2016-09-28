(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var buy = this;

  var groceryList = [
    {name: "bananas", quantity: 10},
    {name: "apples", quantity: 20},
    {name: "oranges", quantity: 15},
    {name: "mangoes", quantity: 5},
    {name: "watermelons", quantity: 2},
  ];

  buy.items = groceryList;

  buy.addToBought = function (index) {
    ShoppingListCheckOffService.addItem(buy.items[index].name, buy.items[index].quantity);
    buy.items.splice(index, 1);
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var bought = this;
  bought.items = ShoppingListCheckOffService.getItems();
  
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (name, quantity) {
    var item = {
      name: name,
      quantity: quantity
    };
    items.push(item);
  };

  service.getItems = function () {
    return items;
  };

}

})();