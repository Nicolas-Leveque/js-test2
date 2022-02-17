export default class List {
	constructor(element, url, data, item) {
		this.element = element;
		this.url = url;
		this.data = data;
		this.item = item;
	}

	//correction:
	// class List {
	// 	constructor( root, url ) {
	// 		this.root = document.getElementById(root);
	// 		this.url = url
	// 	}
	// }
	// utiliser root pour mettre l'element qui recevra les données pour simplifier la selection

	async createList(url) {
		const res = await fetch(this.url);
		this.data = await res.json();
	}

	createItem(idx) {
		this.item = this.data[idx];
	}
}
