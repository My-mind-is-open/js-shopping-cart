class Products {
	constructor() {
		this.classNameActive = 'products-element__btn_active';
		this.labalAdd = 'Добавить в корзину';
		this.labalRemove = 'Удалить из корзины';
		this.classNameActiveSize = "products-element__size-active";
		this.activeClassSize = '';
		this.size = 40;
		this.high = 'high';
		this.middle = 'middle';
		this.low = 'low';
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
		productsPage.returnSize()
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
				console.log('work')
			}

			let index = productsStore.find((e) => e.name == id);




			if (typeof index == 'undefined') {
				activeText = this.labalAdd;
				size.forEach((el) => {
					activeClassSize = this.activeClassSize
					htmlsize += `<button class="products-element__size${activeClassSize}" onclick="productsPage.handleSetSizeproducts (this, '${el}')">${el}</button>`;
				});

			} else {

				size.forEach((el) => {
					if (index.sizes !== 'undefined') {
						if (el == index.sizes) {
							activeClassSize = ' ' + this.classNameActiveSize;
						} else (
							activeClassSize = this.activeClassSize
						)
						htmlsize += `<button class="products-element__size${activeClassSize}" onclick="productsPage.handleSetSizeproducts 
					(this, '${el}')">${el}</button>`;
					}

				});


				activeClass = " " + this.classNameActive
				activeText = this.labalRemove;

			}


			htmlCatalog += `
			<li class="products-element">
			<span class="products-element__name">${name}</span>
			<span class="products-element__rating ${activeClassRating}">${rating}</span>
			<img class="products-element__img" src="${img}" onclick="productsPage.showAboutProducts('${id}')"/>
			<div class="products-element__sizes-price">
			<span class="products-element__price">🤑${price.toLocaleString()} RUB</span>
			<div class="products-element__sizes">
			${htmlsize}
			</div>
			</div>
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



















// handleSetSizeproducts(el, size) {

// 	const { pushSizes, sizes } = localStorageUtil.putSizes(size);

// 	if (pushSizes) {
// 		el.classList.add(this.classNameActiveSize);
// 	} else {
// 		el.classList.remove(this.classNameActiveSize);
// 		// el.classList.toggle(this.classNameActiveSize);
// 	}
// }