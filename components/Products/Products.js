class Products {
	constructor() {
		this.classNameActive = 'products-element__btn_active';
		this.labalAdd = 'Добавить в корзину';
		this.labalRemove = 'Удалить из корзины';
	}
	handleSetLocationStorage(el, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id);
		if (pushProduct) {
			el.classList.add(this.classNameActive);
			el.innerHTML = this.labalRemove;

		} else {
			el.classList.remove(this.classNameActive);
			el.innerHTML = this.labalAdd;
		}
		headerPage.render(products.length);
	}

	render() {
		const productsStore = localStorageUtil.getProducts()


		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img }) => {
			let activeClass = '';
			let activeText = '';


			if (productsStore.indexOf(id) === -1) {
				activeText = this.labalAdd;

			} else {
				activeClass = " " + this.classNameActive
				activeText = this.labalRemove;
			}

			htmlCatalog += `
			<li class="products-element">
			<span class="products-element__name">${name}</span>
			<img class="products-element__img" src="${img}"/>
			<span class="products-element__price">🤑${price.toLocaleString()} RUB</span>
			<button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage (this, '${id}')">
			${activeText}
			</button>
			</li>
			`;
		});
		const html = `
		<ul class="products-container">
		${htmlCatalog}
		</ul>`;
		ROOT_PRODUCTS.innerHTML = html;
	}
}
const productsPage = new Products();
productsPage.render()