
class LocalStorageUtil {
	constructor() {
		this.keyName = 'products';

	}
	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage)
		}
		return [];
	}



	putProducts(id, size) {
		let obj = {
			name: id,
			sizes: size,
			// btn:
		}
		let products = this.getProducts();
		let pushProduct = false;


		// const index = products.indexOf(id);

		let index2 = products.find((e) => e.name == id)

		if (typeof index2 == 'undefined') {
			products.push(obj);
			pushProduct = true;
		} else {

			let newArr = products.findIndex(n => n.name === id);

			if (newArr !== -1) {
				products.splice(newArr, 1)
			}
		}


		localStorage.setItem(this.keyName, JSON.stringify(products));
		return {
			pushProduct,
			products,
		}
	}
}
const localStorageUtil = new LocalStorageUtil();


// getSizes() {
	// 	const sizesLocalStorage = localStorage.getItem(this.keySize);
	// 	if (sizesLocalStorage !== null) {
	// 		return JSON.parse(sizesLocalStorage)
	// 	} return [];
	// }
	// putSizes(size) {

	// 	let sizes = this.getSizes();
	// 	let pushSizes = false;
	// 	const indexSize = sizes.indexOf(size);

	// 	if (indexSize === -1) {
	// 		sizes.push(size);
	// 		pushSizes = true;
	// 	}
	// 	else {
	// 		sizes.splice(indexSize, 1);
	// 	}
	// 	localStorage.setItem(this.keySize, JSON.stringify(sizes));
	// 	return {
	// 		pushSizes,
	// 		sizes,
	// 	}

	// }