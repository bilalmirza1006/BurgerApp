const Mayonnaise = document.getElementById('Mayonnaise')
const Ketchup = document.getElementById('Ketchup')
const Salad = document.getElementById('Salad')
const Tomato = document.getElementById('Tomato')
const Egg = document.getElementById('Egg')
const BeefStake = document.getElementById('Beef-Stake')
const Cheese = document.getElementById('Cheese')
const burger = document.getElementById('burger')
const hello = document.getElementById("hello")

// var arrayOfIngredients = new Array();

// arrayOfIngredients[0] = new Image();
// arrayOfIngredients[0].src = './image/new,jpg';


var inGredients = ['Mayonnaise', 'Ketchup', 'Salad', 'Tomato', 'Egg', 'Beef Stake', 'Cheese']
var useInGradients = []
var ingredients = document.getElementById("ingredients")
var ulBurger = document.getElementById("ulBurger")
var ul = document.createElement("ul")

inGredients.forEach((item) => {
    var li = document.createElement("li")
    li.style.listStyle = 'none'
    li.style.textAlign = 'center'
    li.textContent = item
    li.addEventListener('click', () => { addBurger(item); })
    ul.appendChild(li)
});

ingredients.appendChild(ul)

const addBurger = (clickedIngredient) => {
    const index = useInGradients.indexOf(clickedIngredient);
    if (index !== -1) {
        useInGradients.splice(index, 1);
    } else {
        useInGradients.unshift(clickedIngredient);
    }
    ulBurger.innerHTML = ''
    useInGradients.forEach((newElement) => {
        console.log('new', useInGradients)
        var li = document.createElement("li")
        li.style.listStyle = 'none'
        li.textContent = newElement
        ulBurger.appendChild(li)
    })
}

// var inGredients = ['Mayonnaise', 'Ketchup', 'Salad', 'Tomato', 'Egg', 'Beef Stake', 'Cheese'];
// var useInGradients = [];
// var ingredients = document.getElementById("ingredients");
// var ulBurger = document.getElementById("ulBurger");
// var ul = document.createElement("ul");

// inGredients.forEach((item) => {
//     var li = document.createElement("li");
//     li.textContent = item;
//     li.addEventListener('click', () => {
//         addBurger(item);
//     });
//     ul.appendChild(li);
// });

// ingredients.appendChild(ul);

// const addBurger = (clickedIngredient) => {
//     const index = useInGradients.indexOf(clickedIngredient);
//     if (index !== -1) {
//         useInGradients.splice(index, 1);
//     } else {
//         useInGradients.push(clickedIngredient);
//     }
//     ulBurger.innerHTML = '';
//     useInGradients.forEach((newElement) => {
//         var li = document.createElement("li");
//         li.textContent = newElement;
//         ulBurger.appendChild(li);
//     });
// };








// var arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];
// var useInGradients = [];
// var ingredients = document.getElementById("ingredients");
// var ulBurger = document.getElementById("ulBurger");
// var ul = document.createElement("ul");

// arrayOfIngredients.forEach((item) => {
//     var li = document.createElement("li");
//     li.style.listStyle = 'none';
//     li.textContent = item;
//     li.addEventListener('click', () => { addBurger(item); });
//     ul.appendChild(li);
// });

// ingredients.appendChild(ul);

// const addBurger = (clickedIngredient) => {
//     useInGradients.push(clickedIngredient);
//     ulBurger.innerHTML = ''; // Clear the existing contents of ulBurger
//     useInGradients.forEach((newElement) => {
//         console.log('new', useInGradients);
//         var li = document.createElement("li");
//         li.style.listStyle = 'none';
//         li.textContent = newElement;
//         ulBurger.appendChild(li);
//     });
// };






// const arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];

// document.getElementById('ingredients').innerHTML = `<ul>${arrayOfIngredients.map(item => `<li onclick = 'addli>${item}</li>`).join('')}</ul>`;


// const arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];

// document.getElementById('ingredients').innerHTML = `<ul>${arrayOfIngredients.map(item => `<li onclick='addli()'>${item}</li>`).join('')}</ul>`;


// function addli() {
//     alert()
//     console.log('new', item)
//     document.getElementById('burgarIngredients').innerHTML = `<ul>${arrayOfIngredients.map(item => `<li>${item}</li>`).join('')}</ul>`;
// }



// const arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];

// document.getElementById('ingredients').innerHTML = `<ul>${arrayOfIngredients.map(item => `<li onclick=((event)=>{addli(event))'>${item}</li>`).join('')}</ul>`;

// function addli(event) {
//     console.log('new', event)
//     const clickedIngredient = event.target.textContent;
//     document.getElementById('burgerIngredients').innerHTML += `<li>${clickedIngredient}</li>`;
// }


// const arrayOfIngredients = ['a', 'b', 'c', 'd', 'e', 'f'];

// document.getElementById('ingredients').innerHTML = `<ul>${arrayOfIngredients.map(item => `<li onclick="addli(event)">${item}</li>`).join('')}</ul>`;

// function addli(event) {
//     alert
//     console.log('new', event);
//     const clickedIngredient = event.target.textContent;
//     document.getElementById('burgerIngredients').innerHTML += `<ul><li>${clickedIngredient}</li></ul>`;
// }


