import List from './list.class.js';

document.getElementById('title').addEventListener('click', () => {
	location.reload();
});
const dataEl = document.getElementById('data');
const listEl = document.createElement('div');
listEl.classList.add('list');

let list = new List(
	'root',
	'https://jsonplaceholder.typicode.com/photos?albumId=1'
);

async function displayList() {
	await list.createList();

	list.data.forEach((element) => {
		const newContainer = document.createElement('div');
		newContainer.classList.add('card');

		const newImg = document.createElement('img');
		newImg.setAttribute('src', element.thumbnailUrl);
		newImg.classList.add('photo');

		const newPres = document.createElement('p');
		newPres.classList.add('presentation');
		newPres.innerText = `${element.title}`;

		const newLink = document.createElement('a');
		newLink.setAttribute('href', '#test');
		newLink.addEventListener('click', (e) => {
			e.preventDefault();
			displayItem(element.id - 1);
		});
		newLink.classList.add('link');
		newLink.innerText = 'Voir le détail';

		newContainer.appendChild(newImg);
		newContainer.appendChild(newPres);
		newContainer.appendChild(newLink);

		listEl.appendChild(newContainer);
		dataEl.appendChild(listEl);
	});
}

function displayItem(idx) {
	list.createItem(idx);
	dataEl.removeChild(listEl);

	const newItem = document.createElement('div');
	newItem.classList.add('item');

	const newPres = document.createElement('h1');
	newPres.innerText = `${list.item.title}`;

	const newImg = document.createElement('img');
	newImg.setAttribute('src', list.item.url);

	newItem.appendChild(newPres);
	newItem.appendChild(newImg);
	dataEl.appendChild(newItem);
}
displayList();
