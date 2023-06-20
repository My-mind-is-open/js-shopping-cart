

class SortM {
	constructor() {
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		this.catalogM = [];
	}

	price_high() {

		let arrayM = this.catalogM.filter(el => el.segment == 'm');
		console.log(arrayM)
		arrayM = arrayM.sort((a, b) => { return b.price - a.price });
		this.activeClassPriceHigh = 'sortM__btn-active';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortMProducts.render(this.catalogM)
		MenPage.render(arrayM);
	}
	price_low() {
		let arrayM = this.catalogM.filter(el => el.segment == 'm');
		arrayM = arrayM.sort((a, b) => { return a.price - b.price });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = 'sortM__btn-active';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = '';
		sortMProducts.render(this.catalogM)
		MenPage.render(arrayM);
	}
	rating_high() {
		let arrayM = this.catalogM.filter(el => el.segment == 'm');
		arrayM = arrayM.sort((a, b) => { return b.rating - a.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = 'sortM__btn-active';
		this.activeClassRatinglow = '';
		sortMProducts.render(this.catalogM)
		MenPage.render(arrayM);
	}
	rating_low() {
		let arrayM = this.catalogM.filter(el => el.segment == 'm');
		arrayM = arrayM.sort((a, b) => { return a.rating - b.rating });
		this.activeClassPriceHigh = '';
		this.activeClassPricelow = '';
		this.activeClassRatingHigh = '';
		this.activeClassRatinglow = 'sortM__btn-active';
		sortMProducts.render(this.catalogM)
		MenPage.render(arrayM);
	}
	render(array) {
		this.catalogM = array;
		let html = '';
		html = `
		
		<div class="sortM">
		<h1 class="sortM__title">For men</h1>
	<div class="sortM-container">
	<button class="sortM__btn ${this.activeClassPriceHigh}" onclick="sortMProducts.price_high(this)">Price high</button>
	<button class="sortM__btn ${this.activeClassPricelow}" onclick="sortMProducts.price_low()">Price low</button>
	<button class="sortM__btn ${this.activeClassRatingHigh}" onclick="sortMProducts.rating_high()">Rating high</button>
	<button class="sortM__btn ${this.activeClassRatinglow}" onclick="sortMProducts.rating_low()">Rating low</button>
	</div>
	</div>
	`;

		ROOT_SORTM.innerHTML = html;
	}

}

const sortMProducts = new SortM();
