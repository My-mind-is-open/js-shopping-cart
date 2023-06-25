function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render(CATALOG);
	sortProducts.render(CATALOG);
	sortMProducts.render(CATALOG);
	sortWProducts.render(CATALOG);
	MenPage.render(CATALOG);
	WomenPage.render(CATALOG);
	aboutPage.render();
	footerPage.render();
	registrPage.render();
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
		spinnerPage.handleClear()
		errorPage.render()
	})