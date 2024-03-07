/** Le chemin de l'API (DEV ONLY) */
const API_PATH = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
/** The elements ids */
let id = 0;

/**
 * Do a request to the API with the reserch string
 */
const search = async () => {
	let meal_ret;

	const choicesContainer = document.getElementById('choices');
	choicesContainer.innerHTML = '';

	let value = document.getElementById('recherche').value;

	if (value.length <= 2) {
		const meal_res = await fetch(API_PATH + value, {
			method: 'GET'
		});
		meal_ret = await meal_res.json();

		meal_ret.meals.forEach(meal => {
			id += 1;

			const img = `
            <div onclick="select(event)" id="${id}" draggable="true" ondragstart="drag(event)">
                <img src="${meal.strMealThumb}" alt="repas" class="images" />
                <p>${meal.strMeal}</p>
            </div>
            `;
			choicesContainer.innerHTML += img;
		});
	}

	return meal_ret;
};

/**
 * Select an image to drag
 */
const select = event => {
	console.log(event.target.parentNode);
	if (!event.target.id.includes('choices') && !event.target.parentNode.className.includes('selected')) {
		event.target.parentNode.classList.add('selected');
		document.querySelector('#selection').appendChild(event.target.parentNode);
		event.target.parentNode.innerHTML += '<img src="./assets/trash.svg" onclick="deleteItem(event)" alt="trashcan" />';
	}
};

/**
 * Delete an item from the DOM
 */
const deleteItem = event => {
	delete event.targetNode.parentNode;
};
