class SortW {
	constructor() {
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		this.catalogW = [];
	}

	price_high() {

		let arrayW = this.catalogW.filter(el => el.segment == 'w');

		arrayW = arrayW.sort((a, b) => { return b.price - a.price });
		this.activeClassPriceHigh = 'sortW__btn-active';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortWProducts.render(this.catalogW)
		WomenPage.render(arrayW);
	}
	price_low() {
		let arrayW = this.catalogW.filter(el => el.segment == 'w');
		arrayW = arrayW.sort((a, b) => { return a.price - b.price });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = 'sortW__btn-active';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortWProducts.render(this.catalogW)
		WomenPage.render(arrayW);
	}
	rating_high() {
		let arrayW = this.catalogW.filter(el => el.segment == 'w');
		arrayW = arrayW.sort((a, b) => { return b.rating - a.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = 'sortW__btn-active';
		this.activeClassRatinglow = '';
		sortWProducts.render(this.catalogW)
		WomenPage.render(arrayW);
	}
	rating_low() {
		let arrayW = this.catalogW.filter(el => el.segment == 'w');
		arrayW = arrayW.sort((a, b) => { return a.rating - b.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = 'sortW__btn-active';
		sortWProducts.render(this.catalogW)
		WomenPage.render(arrayW);
	}
	render(array) {
		this.catalogW = array;
		let html = '';
		html = `
		
		<div class="sortW">
		<h1 class="sortW__title" id="ForWomen">For women</h1>
	<div class="sortW-container">
	<button class="sortW__btn ${this.activeClassPriceHigh}" onclick="sortWProducts.price_high(this)">Price high</button>
	<button class="sortW__btn ${this.activeClassPricelow}" onclick="sortWProducts.price_low()">Price low</button>
	<button class="sortW__btn ${this.activeClassRatingHigh}" onclick="sortWProducts.rating_high()">Rating high</button>
	<button class="sortW__btn ${this.activeClassRatinglow}" onclick="sortWProducts.rating_low()">Rating low</button>
	</div>
	</div>
	`;

		ROOT_SORTW.innerHTML = html;
	}

}

const sortWProducts = new SortW();