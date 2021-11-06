//Exercise 1
function Address(city, street, buildingNumber) {
  this.city = city;
  this.street = street;
  this.buildingNumber = buildingNumber;
}

Address.prototype.fullAddress = function () {
  return this.city + " " + this.street + " " + this.buildingNumber;
};

//Exercise 2
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// const personObject = new Person("Omri", "Blutstein");
// console.log (personObject.getFullName())

//Exercise 3
function Customer(firstName, lastName, city, street, buildingNumber) {
  Person.call(this, firstName, lastName);
  this.address = new Address(city, street, buildingNumber);
}
Customer.prototype = Object.create(Person.prototype); //???

Customer.prototype.customerDetails = function () {
  return (
    this.getFullName() +
    " " +
    this.address.city +
    " " +
    this.address.street +
    " " +
    this.address.buildingNumber
  );
};

let customer1 = new Customer(
  "omri",
  "blutstein",
  "ramat hasharon",
  "hashmoniam",
  "22"
);
console.log(customer1);

//Exercise 4
function Item(itemName, itemID, itemPrice) {
  this.itemName = itemName;
  this.itemID = itemID;
  this.itemPrice = itemPrice;
}

//Exercise 5
function Order(orderId, customer) {
  this.orderId = orderId;
  this.items = [];
  this.customerDetails = customer.customerDetails();
}

Order.prototype.addItemToOrder = function (itemId, itemName, itemPrice) {
  const itemObject = new Item(itemId, itemName, itemPrice);
  this.items.push(itemObject);
};

Order.prototype.getTotalPrice = function () {
  //totalPrice is the acuumulator which will be summed up, item is the current iterated item
  const totalPrice = this.items.reduce(function (totalPrice, item) {
    const itemPrice = item.itemPrice;
    const newTotalPrice = totalPrice + itemPrice;
    return newTotalPrice;
  }, 0); //zero is the initial value of totalPrice
  return totalPrice;
};

const customer2 = new Customer(
  "alon",
  "blumenreich",
  "giv'atayim",
  "katzanelson",
  "75"
);

const order = new Order("#23", customer2);
console.log(order);
order.addItemToOrder("#56", "Drums", 2500)
order.addItemToOrder("#58", "Guitar", 6700)
console.log(order.getTotalPrice())


