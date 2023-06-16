
class Sort {
	constructor() {
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
	}

	price_high(el) {
		let array = CATALOG.sort((a, b) => { return b.price - a.price });
		this.activeClassPriceHigh = 'sort__btn-active';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortProducts.render();
		productsPage.render(array);

	}
	price_low() {
		let array = CATALOG.sort((a, b) => { return a.price - b.price });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = 'sort__btn-active';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortProducts.render();
		productsPage.render(array)
	}
	rating_high() {
		let array = CATALOG.sort((a, b) => { return b.rating - a.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = 'sort__btn-active';
		this.activeClassRatinglow = '';
		sortProducts.render();
		productsPage.render(array)
	}
	rating_low() {
		let array = CATALOG.sort((a, b) => { return a.rating - b.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = 'sort__btn-active';
		sortProducts.render();
		productsPage.render(array)
	}
	render() {

		let html = '';
		html = `
		<div class="sort">
	<div class="sort-container">
	<button class="sort__btn ${this.activeClassPriceHigh}" onclick="sortProducts.price_high(this)">Price high</button>
	<button class="sort__btn ${this.activeClassPricelow}" onclick="sortProducts.price_low()">Price low</button>
	<button class="sort__btn ${this.activeClassRatingHigh}" onclick="sortProducts.rating_high()">Rating high</button>
	<button class="sort__btn ${this.activeClassRatinglow}" onclick="sortProducts.rating_low()">Rating low</button>
	</div>
	</div>
	`;
		ROOT_SORT.innerHTML = html;
	}

}

const sortProducts = new Sort();
sortProducts.render()