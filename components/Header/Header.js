

class Header {

	handleOpenShoppingPage() {
		shoppingPage.render()
	}

	render(count) {
		const html = `
	<div class="header-container">
	<div class="header__label">
	<span class="header__text">Sneakers</span>
	<img src="../img/purple.png" class="header__img"/>
	</div>
	
	<div class="header-counter" onclick="headerPage.handleOpenShoppingPage()">
	🛒 ${count}
	</div>
	</div>
	`;
		ROOT_HEADER.innerHTML = html;
	}

}
const headerPage = new Header();
// const productsStore = localStorageUtil.getProducts();

// headerPage.render(productsStore.length);
