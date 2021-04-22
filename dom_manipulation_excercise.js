// Select the section with an id of container without using querySelector.

// 1. Select the section with an id of container using querySelector.
document.getElementById('container');

// 2. Select all of the list items with a class of “second”.
document.querySelector("#container");

// 3. elect a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByClassName("second");
// OR document.querySelectorAll(".second");

// 4. Give the section with an id of container the text “Hello!”.
document.querySelector("ol.third");

// 5. Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.add("main");
//Or ANOTHER WAY TO GET IT, NEED RESERACH
footer.className += "main";

// 6. Remove the class main on the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.remove ("main");

// 7. Create a new li element.
let newli =  document.createElement("li");

// 8. Give the li the text “four”.
newli.innerText = "four";

// 9. Append the li to the ul element.
let newul = document.querySelector("ul");
newul.appendChild(newli);

// 10. Loop over all of the lis inside the ol tag and give them a background color of “green”.
let liOl = document.querySelectorAll("ol li");

for(let i = 0; i < liOl.length; i++){
    liOl[i].style.backgroundColor = "green";
}

// 11. Remove the div with a class of footer
let footer = document.querySelector(".footer");
footer.remove();
