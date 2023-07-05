const Mayonnaise = document.getElementById('Mayonnaise')
const Ketchup = document.getElementById('Ketchup')
const Salad = document.getElementById('Salad')
const Tomato = document.getElementById('Tomato')
const Egg = document.getElementById('Egg')
const BeefStake = document.getElementById('Beef-Stake')
const Cheese = document.getElementById('Cheese')
const burger = document.getElementById('burger')
const hello = document.getElementById("hello")

// var arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f']
// var ingredients = document.getElementById("ingredients");
// var burgarIngredients = document.getElementById(burgarIngredients)
// var ul = document.createElement("ul")
// ul.addEventListener('click', addBurger)

// arrayOfIngredients.forEach(function (item) {
//     var li = document.createElement("li");
//     li.style.listStyle = 'none'
//     li.textContent = item;
//     ul.appendChild(li);
// });
// ingredients.appendChild(ul)


// function addBurger() {
//     alert()
//     var li = document.createElement("li");
//     li.style.listStyle = 'none'
//     li.textContent = item;
//     ul.appendChild(li);
// }
// burgarIngredients.appendChild(ul)







var arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];
var useInGradients = []
var ingredients = document.getElementById("ingredients");
var burgerIngredients = document.getElementById("burgerIngredients"); // Corrected the variable name
var ul = document.createElement("ul");
// ul.addEventListener('click', addBurger);
var li = document.createElement('li')

arrayOfIngredients.forEach(function (item) {
    var li = document.createElement("li");

    li.addEventListener('click', () => addBurger(item));
    li.style.listStyle = 'none';
    li.textContent = item;
    ul.appendChild(li);
    // ul.ad
});
ingredients.appendChild(ul);


function addBurger(item) { // Added the event parameter
    alert(JSON.stringify(item))
    console.log('new', item, item.PointerEvent);
    useInGradients.push(item)
    var li = document.createElement("li");
    li.style.listStyle = 'none';
    li.textContent = clickedIngredient;
}
burgerIngredients.appendChild(li);













































// let li = document.createElement("li");
// // let li1 = document.createElement("li");
// li.innerHTML = burger.value;
// listContainer.appendChild(li);
// // let span = document.createElement("span");
// // span.innerHTML = "\u00d7";
// // li.appendChild(span);
// const myValue = 'hellosds'
// hello.innerHTML = myValue;


// const cars = ["Saab", "Volvo", "BMW"];
// var text = "";
// for (let i in cars) {
//     text += cars[i] + "<br>";
//     console.log(i + 1);
// }
// document.getElementById('outer').innerHTML = cars.map((item, index) => item)
// // export const data = ['dds', 'sdsf']
// // const arr = document.getElementById('Mayonnaise')
// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         savedata();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         savedata();
//     }
// }, true);





// // const ingradiants = [Mayonnaise, Salad,]


// document.body.innerHTML = 'hallo'
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// let li = document.createElement("li");
// li.innerHTML = 'inputBox';
// let li = document.getElementsByClassName("header");
// li.innerHTML = 'inputBox kjskdflksdjfl';



// var arrayOfIngrediants = ['a', 'b', 'c', 'd', 'e', 'f']
// var burgarIngrediants = document.getElementById("burgarIngrediants");
// var ul2 = document.createElement("ul")
// arrayOfIngrediants.forEach(function (item) {
//     var li = document.createElement("li");
//     li.textContent = item;
//     ul2.appendChild(li);
// });
// burgarIngrediants.appendChild(ul2)

// function toggleCopy(item) {
//     var ul2 = document.getElementById("ul2");

//     if (item.parentNode === ul2) {
//         ul2.removeChild(item);
//     } else {
//         var clonedItem = item.cloneNode(true);
//         ul2.appendChild(clonedItem);
//     }
// }

// var sourceArray = ['Item 1', 'Item 2', 'Item 3'];
// var targetArray = [];

// var currentIndex = 0;
// var button = document.querySelector("button");
// button.addEventListener("click", sendItem);

// function sendItem() {
//     if (currentIndex < sourceArray.length) {
//         var item = sourceArray[currentIndex];
//         targetArray.push(item);
//         currentIndex++;
//         console.log("Sent:", item);
//     } else {
//         console.log("All items sent.");
//     }
// }

// function toggleIngredient(item) {
//     var burgerIngredients = document.getElementById("burgerIngredients");

//     if (item.parentElement === document.getElementById("ingredients")) {
//         // Copy ingredient to Your Burger
//         burgerIngredients.appendChild(item.cloneNode(true));
//         item.classList.add("selected");
//     } else {
//         // Remove ingredient from Your Burger
//         burgerIngredients.removeChild(item);
//         item.classList.remove("selected");
//     }
// }

