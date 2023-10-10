/* W05: Programming Tasks */

/* Declare and initialize global variables */

var templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    const templesElement = document.getElementById('temples');
    temples.forEach((temple) => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', temple.imageUrl);
        imgElement.setAttribute('alt', temple.location);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });

};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try
    {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok)
        {
            throw new Error();
        }
    const data = await response.json();
    templeList = data;
    displayTemples(data);
    console.log(templeList);
    }
    catch (error)
    {
        console.error(error);
    }
}

/* reset Function */
const reset = () => 
{
    const templesElement = document.getElementById('temples');
    templesElement.innerHTML = '';
};
/* sortBy Function */
const sortBy = (temples) => 
{
    reset();
  
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
  
        case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
  
        case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
        break;
  
        case 'all':
        default:
        displayTemples(temples);
        break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});

getTemples();