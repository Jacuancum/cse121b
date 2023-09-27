/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jacob Chan';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/myimage.jpeg';

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.getElementById('myimage');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profilePicture);


/* Step 5 - Array */
let favoriteFood = ['Apple Pie', 'Sashimi', 'Dark Chocolate', 'Hot Spring Egg'];
let anotherFavoriteFood = 'Pizza';
foodElement.innerHTML = favoriteFood.join(", ");

favoriteFood.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood.join(", ")}`;

favoriteFood.shift()
foodElement.innerHTML += `<br>${favoriteFood.join(", ")}`;

favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood.join(", ")}`;