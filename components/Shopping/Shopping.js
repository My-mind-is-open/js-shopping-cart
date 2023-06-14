

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
				<tr>
					<td class="shopping-element__name">${name}</td>
					<td class="shopping-element__price">👉 ${price.toLocaleString()} RUB</td>
					<td class="shopping-element__size">Size: ${index.sizes}, </td>
					<td class="shopping-element__size">Amount: ${amount}</td>
					<td><button class="shopping-element__plus" onclick="shoppingPage.addObj(this, '${id}')"></button></td>
					<td><button class="shopping-element__minus" onclick="shoppingPage.deleteObj(this, '${id}')"></button></td>
				</tr>
				`;

			}

		});
		const html = `
		<div class='shopping-container'>
		<table class="table">
		${htmlCatalog}
		<tr>
					<td class="shopping-element__name">Сумма</td>
					<td class="shopping-element__price">💲 ${sumCatalog.toLocaleString()} RUB</td>
				</tr>
		</table>
		<button class="shoppingPage__btn" onclick="shoppingPage.handleClear()">
		</button>
		

		<button class="shoppingPage__btn-clear" onclick="shoppingPage.clearBascket(this)">Clear basket</button>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}
const shoppingPage = new Shopping;
