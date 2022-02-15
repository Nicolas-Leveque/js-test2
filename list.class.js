export default class List {
	constructor(element, url, data, item) {
		this.element = element;
		this.url = url;
		this.data = data;
		this.item = item;
	}

	async createList(url) {
		const res = await fetch(this.url);
		this.data = await res.json();
	}

	createItem(idx) {
		this.item = this.data[idx];
	}
}
