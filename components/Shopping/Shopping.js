

class Shopping {

	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render() {

		const productsStore = localStorageUtil.getProducts();
		let sumCatalog = 0;
		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price }) => {

			if (productsStore.indexOf(id) !== -1) {

				htmlCatalog += `
				<tr>
					<td class="shopping-element__name">${name}</td>
					<td class="shopping-element__price">👉 ${price.toLocaleString()} RUB</td>
				</tr>
				`;
				sumCatalog += price;
			}
		});


		const html = `
		<div class='shopping-container'>
		<table>
		${htmlCatalog}
		<tr>
					<td class="shopping-element__name">Сумма</td>
					<td class="shopping-element__price">💲 ${sumCatalog.toLocaleString()} RUB</td>
				</tr>
		</table>
		<button class="shoppingPage__btn" onclick="shoppingPage.handleClear()">
		close
		</button>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}
const shoppingPage = new Shopping;
