const Mayonnaise = document.getElementById('Mayonnaise')
const Ketchup = document.getElementById('Ketchup')
const Salad = document.getElementById('Salad')
const Tomato = document.getElementById('Tomato')
const Egg = document.getElementById('Egg')
const BeefStake = document.getElementById('Beef-Stake')
const Cheese = document.getElementById('Cheese')
const burger = document.getElementById('burger')
const hello = document.getElementById("hello")

// var arrayOfIngredients = new Array()

// arrayOfIngredients[0] = new Image()
// arrayOfIngredients[0].src = './image/new,jpg'


var inGredients = [
    { image: 'https://cdn.pixabay.com/photo/2015/02/23/20/53/tomatoes-646645_1280.jpg', name: 'Bun' },
    { image: 'https://media.istockphoto.com/id/1299756009/photo/mayonnaise-sauce-texture-on-whole-background-close-up.jpg?s=2048x2048&w=is&k=20&c=ZzI7r0x-V6TI8MUrOT55J_zZGJSsnhzd3Y3qtEEJjzs=', name: 'Mayonnaise' },
    { image: 'https://media.istockphoto.com/id/519282555/photo/ketchup-tomato-sauce-background.jpg?s=2048x2048&w=is&k=20&c=t6fNSUjiTzHyrsklcbgkYotE4tTHY7TjOUgYjIJQ1bQ=', name: 'Ketchup' },
    { image: 'https://media.istockphoto.com/id/911794888/photo/lettuce-salad-leaves-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=aafJY3ElhBySaLNWq6BmFS8DmmoU-6IfmlmiDwrxaCM=', name: 'Salad' },
    { image: 'https://media.istockphoto.com/id/1181261144/photo/tomato-slice-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=9uJcxPTjiXLb5mSNvcllypgnRvYjTDRUki7fPxRNHkg=', name: 'Tomato' },
    { image: 'https://media.istockphoto.com/id/1063897876/photo/fried-egg-isolated.jpg?s=2048x2048&w=is&k=20&c=bZMHYndxx7xiYr4RgTxfeC0k4Uf7YacAokfMuvUESHg=', name: 'Egg' },
    { image: 'https://media.istockphoto.com/id/1220111207/photo/grilled-hamburger-meat-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=2048x2048&w=is&k=20&c=776epoFO4JfruRzjDZ9wN-aFt-J55TtiHXt339EwliI=', name: 'Beef Stake' },
    { image: 'https://media.istockphoto.com/id/163137297/photo/four-cut-up-slices-of-cheese-isolated-on-a-white-background.jpg?s=2048x2048&w=is&k=20&c=ZxKSTlZbYPnKdOTe9StYmVCLbtgQtbY-11p3mRF7M8s=', name: 'Cheese' }
];

var useInGradients = [];
var ulBurger = document.getElementById('ulBurger');
var ul = document.createElement('ul');
var resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', reset);

function reset() {
    useInGradients = [];
    ulBurger.innerHTML = '';
}

inGredients.forEach((item) => {
    var li = document.createElement('li');
    li.style.listStyle = 'none';
    li.style.textAlign = 'center';

    var img = document.createElement('img');
    img.src = item.image;

    var text = document.createElement('span');
    text.textContent = item.name;


    img.style.width = '100px';
    img.style.height = '50px';

    li.appendChild(img);
    li.appendChild(text);

    li.addEventListener('click', () => {
        addBurger(item.name);
    });

    ul.appendChild(li);
});



ingredients.appendChild(ul)
const addBurger = (clickedIngredient) => {
    const index = useInGradients.indexOf(clickedIngredient);
    if (index !== -1) {
        useInGradients.splice(index, 1);
    } else {
        useInGradients.unshift(clickedIngredient);
    }

    ulBurger.innerHTML = '';

    useInGradients.forEach((newElement) => {
        const ingredientObj = inGredients.find(item => item.name === newElement);

        if (ingredientObj) {
            const li = document.createElement("li");
            li.style.listStyle = 'none';

            const img = document.createElement("img");
            img.src = ingredientObj.image;
            img.alt = newElement;
            img.style.width = "100px";

            const text = document.createElement("span");
            text.textContent = newElement;

            li.appendChild(img);
            li.appendChild(text);

            ulBurger.appendChild(li);
        }
    });
}

