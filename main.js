var myHeading = document.querySelector("h1");

var myText = document.querySelector("p");
var myList = document.querySelector("li");

alert("hello!");


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var myText = document.querySelector("p");
var myList = document.querySelector("li");

function setUserName() {
  var myText = document.querySelector("p");
var myList = document.querySelector("li");

  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hello, " + myName;
  myText.textContent = "This site is about pizzas. Now are cooking:";
  myList.textContent = "pepperoni L";
}

var myText = document.querySelector("p");
var myList = document.querySelector("li");


if (!localStorage.getItem("name")) {
  var myText = document.querySelector("p");
var myList = document.querySelector("li");

  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  var myText = document.querySelector("p");
var myList = document.querySelector("li");

  myHeading.textContent = "Hello, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
var myText = document.querySelector("p");
var myList = document.querySelector("li");

