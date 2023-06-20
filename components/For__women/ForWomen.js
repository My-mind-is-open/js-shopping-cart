class ForWomen {
	constructor() {
		this.classNameActive = 'wom_products-element__btn_active';
		this.labalAdd = 'Добавить в корзину';
		this.labalRemove = 'Удалить из корзины';
		this.classNameActiveSize = "wom_products-element__size-active";
		this.activeClassSize = '';
		this.size = 40;
		this.high = 'Whigh';
		this.middle = 'Wmiddle';
		this.low = 'Wlow';
	}
	handleSetLocationStorage(el, id) {

		const { pushProduct, products } = localStorageUtil.putProducts(id, this.size);

		if (pushProduct) {
			el.classList.add(this.classNameActive);
			el.innerHTML = this.labalRemove;

		} else {
			el.classList.remove(this.classNameActive);
			el.innerHTML = this.labalAdd;
		}
		headerPage.render(products.length);
		WomenPage.returnSize()
		WomenPage.render()
	}
	returnSize() {
		this.size = 40;
	}
	handleSetSizeproducts(el, size) {
		el.classList.toggle(this.classNameActiveSize)
		if (this.size !== size) {
			this.size = size
		}

	}

	showAboutProducts(id) {
		aboutProductPage.render(id)
	}

	render(array = CATALOG) {
		array = array.filter(el => el.segment == 'w')
		const productsStore = localStorageUtil.getProducts()
		let htmlCatalog = '';

		array.forEach(({ id, name, price, img, size, rating }) => {
			let activeClass = '';
			let activeText = '';
			let htmlsize = '';
			let activeClassSize = '';

			let activeClassRating = '';
			if (rating >= 9) {
				activeClassRating = this.high;
			}
			else if (rating > 8) {
				activeClassRating = this.middle;

			} else if (7.9 > rating) {
				activeClassRating = this.low;

			}

			let index = productsStore.find((e) => e.name == id);

			if (typeof index == 'undefined') {
				activeText = this.labalAdd;
				size.forEach((el) => {
					activeClassSize = this.activeClassSize
					htmlsize += `<button class="wom_products-element__size${activeClassSize}" onclick="WomenPage.handleSetSizeproducts (this, '${el}')">${el}</button>`;
				});

			} else {

				size.forEach((el) => {
					if (index.sizes !== 'undefined') {
						if (el == index.sizes) {
							activeClassSize = ' ' + this.classNameActiveSize;
						} else (
							activeClassSize = this.activeClassSize
						)
						htmlsize += `<button class="wom_products-element__size${activeClassSize}" onclick="WomenPage.handleSetSizeproducts 
					(this, '${el}')">${el}</button>`;
					}

				});


				activeClass = " " + this.classNameActive
				activeText = this.labalRemove;

			}


			htmlCatalog += `
			<li class="wom_products-element">
			<span class="wom_products-element__name">${name}</span>
			<span class="wom_products-element__rating ${activeClassRating}">${rating}</span>
			<img class="wom_products-element__img" src="${img}" onclick="WomenPage.showAboutProducts('${id}')"/>
			<div class="wom_products-element__sizes-price">
			<span class="wom_products-element__price">🤑${price.toLocaleString()} RUB</span>
			<div class="wom_products-element__sizes">
			${htmlsize}
			</div>
			</div>
			<button class="wom_products-element__btn${activeClass}" onclick="WomenPage.handleSetLocationStorage (this, '${id}')">
			${activeText}
			</button>
			</li>
			`;
		});
		const html = `

		<ul class="wom_products-container">

		${htmlCatalog}
		</ul>`;
		ROOT_WOMEN.innerHTML = html;
	}
}
const WomenPage = new ForWomen()