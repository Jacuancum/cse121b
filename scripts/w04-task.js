/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jacob Chan",
    photo: "images/myimage.jpeg",
    favoriteFoods: [
        'Grill Steak',
        'Grill Pineapple',
        'Japanese Rice',
        'Lobster',
        'Smores'
    ],
    hobbies: [
        'Camping',
        'Travelling',
        'Exploring',
        'Thinking',
        'Picnic'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Hong Kong, China',
      length: '12 years'
    },
    {
        place: 'Fuokuka, Japan',
        length: '1 year'
    },
    {
        place: 'Taiwan',
        length: '2 years'
    }
    );



/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('name').alt = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
    });

/* Places Lived DataList */
let dl = document.getElementById('places-lived');
myProfile.placesLived.forEach(data => {
    let dt = document.createElement('dt');
    dt.textContent = data.place;
    dl.appendChild(dt);
    
    let dd = document.createElement('dd');
    dd.textContent = data.length;
    dl.appendChild(dd);
    });
