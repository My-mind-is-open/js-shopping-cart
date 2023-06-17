function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render()
	sortProducts.render()
}
spinnerPage.render()
let CATALOG = []

let URL = 'https://my-mind-is-open.github.io/products_pets_api/catalog.json';
// 'server/catalog.json'
fetch(URL)
	.then(res => res.json())
	.then(data => {
		CATALOG = data;
		setTimeout(() => {
			spinnerPage.handleClear()
			render();
		}, 2000)

	})
	.catch(error => {
		console.log(error);
	})