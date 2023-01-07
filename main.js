console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
console.log("Excercise 1");

let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(“node1”) method to access this";

let node2 = document.getElementsByClassName("node2")[0]; // since its a collection you must tell it which element to choose.
node2.textContent = "I used the getElementByClassName method to access this";

let h3Tags = document.getElementsByTagName("h3");

for (let element of h3Tags) {
  element.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

console.log("Excercise 2");

let newParagraph1 = document.createElement("p");

newParagraph1.textContent =
  "This node was created using the createElement() method";
let contentDiv = document.querySelector("#parent");

contentDiv.appendChild(newParagraph1);

let atag = document.createElement("a");
atag.textContent = "I am a <a> tag";
contentDiv.insertBefore(atag, newParagraph1);

atag.href = "https://google.com";
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

let newP = document.createElement("p");
newP.textContent = "New Child Node" + " using the replaceChild() method";

let thisContentDiv = document.querySelector("#exercise-container3");
let thisParagraph = document.querySelector("#N1");
thisContentDiv.replaceChild(newP, thisParagraph);

thisContentDiv.removeChild(newP);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

console.log("Excercise 4");

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

let unorderedList = document.createElement("ul");

list.forEach((item) => {
  //iterating through the array list
  let listItem = document.createElement("li");
  listItem.textContent = item;
  unorderedList.appendChild(listItem);
});

let Excercise4Container = document.querySelector("#container");
Excercise4Container.appendChild(unorderedList);
// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4

/*----------- Exercise #5: DOM EVENTS --------------*/

console.log("Excercise 5");

function show() {
  let divModal = document.createElement("div");
  let divCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let closeb = document.createElement("button");

  h2.textContent = "Modal Header";
  p.textContent = "Modal content whatver";
  closeb.textContent = "close";

  divCard.append(h2, p, closeb);
  divCard.classList.add("modal-card");
  divModal.appendChild(divCard);
  divModal.id = "modal";
  document.body.appendChild(divModal);

  function removeDiv() {
    document.body.removeChild(divModal);
  }
  closeb.onclick = removeDiv;
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
