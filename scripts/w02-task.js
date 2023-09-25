/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jacob Chan';
let currentYear = new Date();
let profilePicture = 'images/myimage.jpeg'

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('myimage.jpeg');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profilePicture);


/* Step 5 - Array */
let favoriteFood = ['Apple Pie', 'Sashimi', 'Dark Chocolate', 'Hot Spring Egg'];


let moreFavFood = favoriteFood.join(', ');
let item = foodElement.innerHTML = <strong>${moreFavFood}</strong>;
foodElement.innerHTML += `${favoriteFood}`;
foodElement.innerHTML += `<br>`;







