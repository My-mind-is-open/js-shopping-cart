

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
	<nav class="nav">
	<ul class="nav__items">
	<li class="nav__item">
	<a class="nav__link">About</a>
	</li>
	<li class="nav__item">
	<a class="nav__link">men's collection</a>
	</li>
	<li class="nav__item">
	<a class="nav__link">Women's collection</a>
	</li>
	</ul>
	</nav>
	<div class="header-counter" onclick="headerPage.handleOpenShoppingPage()">
	🛒 ${count}
	</div>
	</div>
	`;
		ROOT_HEADER.innerHTML = html;
	}

}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);