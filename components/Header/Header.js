

class Header {

	handleOpenShoppingPage() {
		shoppingPage.render()
	}

	render(count) {
		const html = `
	<div class="header-container">
	<div class="header__label">
	<span class="header__text">Sneakers</span>
	<img src="https://i.ibb.co/DGXCY1T/purple.png" class="header__img"/>
	</div>
	<nav class="nav">
	<ul class="nav__items">
	<li class="nav__item"><a href="#about1" class="nav__link">About</a></li>
	<li class="nav__item"><a href="#ForMen" class="nav__link">For men</a></li>
	<li class="nav__item"><a href="#ForWomen"class="nav__link">For Women</a></li>
	</ul>
	</nav>
	<div class="header-action">
	<button = class="login-btn" id="form-open" onclick="registrPage.showForm()" >Login</button>
	<div class="header-counter" onclick="headerPage.handleOpenShoppingPage()">
	🛒 ${count}
	</div>
	</div>
	
	</div>
	`;
		ROOT_HEADER.innerHTML = html;
	}

}
const headerPage = new Header();
// const productsStore = localStorageUtil.getProducts();

// headerPage.render(productsStore.length);
