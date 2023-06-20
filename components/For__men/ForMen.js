

class ForMen {
	constructor() {
		this.classNameActive = 'men_products-element__btn_active';
		this.labalAdd = 'Добавить в корзину';
		this.labalRemove = 'Удалить из корзины';
		this.classNameActiveSize = "men_products-element__size-active";
		this.activeClassSize = '';
		this.size = 40;
		this.high = 'Mhigh';
		this.middle = 'Mmiddle';
		this.low = 'Mlow';
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
		MenPage.returnSize()
		MenPage.render()
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
		array = array.filter(el => el.segment == 'm')
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
					htmlsize += `<button class="men_products-element__size${activeClassSize}" onclick="MenPage.handleSetSizeproducts (this, '${el}')">${el}</button>`;
				});

			} else {

				size.forEach((el) => {
					if (index.sizes !== 'undefined') {
						if (el == index.sizes) {
							activeClassSize = ' ' + this.classNameActiveSize;
						} else (
							activeClassSize = this.activeClassSize
						)
						htmlsize += `<button class="men_products-element__size${activeClassSize}" onclick="MenPage.handleSetSizeproducts 
					(this, '${el}')">${el}</button>`;
					}

				});


				activeClass = " " + this.classNameActive
				activeText = this.labalRemove;

			}


			htmlCatalog += `
			<li class="men_products-element">
			<span class="men_products-element__name">${name}</span>
			<span class="men_products-element__rating ${activeClassRating}">${rating}</span>
			<img class="men_products-element__img" src="${img}" onclick="MenPage.showAboutProducts('${id}')"/>
			<div class="men_products-element__sizes-price">
			<span class="men_products-element__price">🤑${price.toLocaleString()} RUB</span>
			<div class="men_products-element__sizes">
			${htmlsize}
			</div>
			</div>
			<button class="men_products-element__btn${activeClass}" onclick="MenPage.handleSetLocationStorage (this, '${id}')">
			${activeText}
			</button>
			</li>
			`;
		});
		const html = `

		<ul class="men_products-container">

		${htmlCatalog}
		</ul>`;
		ROOT_MEN.innerHTML = html;
	}
}
const MenPage = new ForMen()
