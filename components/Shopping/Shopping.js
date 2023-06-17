

class Shopping {
	constructor() {
		this.keyName = 'products';
	}
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}
	clearBascket() {
		localStorage.clear();
		shoppingPage.render();
		productsPage.render();
		headerPage.render(0)
	}
	addObj(el, id) {
		const productsStore = localStorageUtil.getProducts();
		console.log(productsStore);

		let obj = {
			name: id,
			sizes: '',
		}
		productsStore.forEach((el) => {
			if (el.name == id) {
				obj.sizes = el.sizes;
			}
		})
		productsStore.push(obj)
		localStorage.setItem(this.keyName, JSON.stringify(productsStore))
		shoppingPage.render();
		headerPage.render(productsStore.length);
	}
	deleteObj(el, id) {
		const productsStore = localStorageUtil.getProducts();
		let a = productsStore.length;
		if (a == 1) {
			shoppingPage.clearBascket();
		}
		let arr = [];
		productsStore.forEach((el) => {
			arr.push(el.name);
		})

		productsStore.splice(arr.indexOf(id), 1);
		localStorage.setItem(this.keyName, JSON.stringify(productsStore));
		shoppingPage.render();
		headerPage.render(productsStore.length);
	}

	render() {

		const productsStore = localStorageUtil.getProducts();
		let sumCatalog = 0;
		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price }) => {
			let amount = 0;
			let index = productsStore.find((e) => e.name == id);

			if (typeof index !== 'undefined') {
				productsStore.forEach((el) => {
					if (el.name == id) {
						amount += 1;
						sumCatalog += price;
					}
				})


				htmlCatalog += `
				<div class="shopping-element__information">
					<span class="shopping-element__name">${name}</span>
					<span class="shopping-element__price">👉 ${price.toLocaleString()} RUB,</span>
					<span class="shopping-element__size">Size: ${index.sizes}, </span>
					<span class="shopping-element__amount"> Amount: ${amount}</span>
					<div class='shopping-element__amount-chage'><span><button class="shopping-element__plus" onclick="shoppingPage.addObj(this, '${id}')"></button></span>
					<span><button class="shopping-element__minus" onclick="shoppingPage.deleteObj(this, '${id}')"></button></span></div>
				</div>
				`;

			}

			if (productsStore.length == 0) {
				htmlCatalog = `<h1 class="shopping-element__emty">Add products to busket</h1>
				<img src='../img/basket.jpg' class="shopping-element__img"/>
				
				`;
			}




		});


		const html = `
		<div class='shopping-container'>
		<div class="table">
		${htmlCatalog}
		<span class="shopping-element__sum">Сумма💲: ${sumCatalog.toLocaleString()}RUB</span>
		
		</div>
		<button class="shoppingPage__btn" onclick="shoppingPage.handleClear()">
		</button>

		<button class="shoppingPage__btn-clear" onclick="shoppingPage.clearBascket(this)">Clear basket</button>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}
const shoppingPage = new Shopping;
