

class About_products {
	constructor() {

	}

	closeAbout_products() {
		ROOT_ABOUT_PRODUCTS.innerHTML = '';
	}


	render(idProduct) {

		let htmlCatalog = '';

		CATALOG.forEach(({ id, about, name, img }) => {

			if (idProduct == id) {
				htmlCatalog += `
			
				<div class="about-products-wrap">
					<img class="about-products__img" src='${img}'/>
						<div class="box">
								<h1 class='about-products__name'>${name}</h1>
								<p class="about-products__lead">${about}</p>
						</div>
						<button class="about-products__btn" onclick="aboutProductPage.closeAbout_products()" ></button>
				</div>
				
				`;
			}

		});

		const html = `
		<div class="about-products">
		${htmlCatalog}
		</div>
		`;
		ROOT_ABOUT_PRODUCTS.innerHTML = html;
	}
}
const aboutProductPage = new About_products;