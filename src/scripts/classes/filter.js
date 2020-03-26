import images from '../../assets/products/*.png';
import Storage from './storage';
import Bag from './bag';

const $arrFilterWomenBtns = document.querySelectorAll('.filter--women');
const $arrFilterMenBtns = document.querySelectorAll('.filter--men');
const $arrFilterAllProductsBtns = document.querySelectorAll('.filter--all');
const $productsContainer = document.querySelector('.allwatches__cards');
const $title = document.querySelector('.allwatches__cards-section .title');

// let arrAllProducts = JSON.parse(window.localStorage.all_products);
// let arrAllProducts = Storage.getAllProducts();
// let arrWomen = arrAllProducts.filter(product => product.gender == 'unisex' || product.gender == 'female');
// let arrMen = arrAllProducts.filter(product => product.gender == 'unisex' || product.gender == 'male')


// let arrObj = Object.values(images);

export default class Filter {
	arrAllProducts = Storage.getAllProducts();
	arrWomen = this.arrAllProducts.filter(product => product.gender == 'unisex' || product.gender == 'female');
	arrMen = this.arrAllProducts.filter(product => product.gender == 'unisex' || product.gender == 'male');

	static get arrObjImgs() {
		return Object.values(images);
	}

	displayProducts(products) {
		let productsRender = '';
		let arrImgs = this.constructor.arrObjImgs;
		products.forEach(product => {
			productsRender += `
				<article class="card">
					<figure class="card__figure">
						<img src="${arrImgs[product.id-1]}" alt="hand-watch-with-title-${product.title}" class="card__img" />
					</figure>
					
					<div class="card__informations">
						<h3 class="card__title">${product.title}</h3>
						<h4 class="card__subtitle">${product.brand}</h4>
						<p class="card__price">$ ${product.price}</p>
					</div>

					<button class="btn-addtobag" data-id=${product.id}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786"><path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/></svg>
					</button>

					<svg xmlns="http://www.w3.org/2000/svg" data-id=${product.id} class="card__fav card-fav-btn" width="43.938" height="39.367" viewBox="0 0 43.938 39.367">
						<path d="M38.151,3.608A11.143,11.143,0,0,0,29.863,0a10.425,10.425,0,0,0-6.511,2.247A13.321,13.321,0,0,0,20.72,5a13.314,13.314,0,0,0-2.633-2.749A10.423,10.423,0,0,0,11.576,0,11.143,11.143,0,0,0,3.287,3.608,12.953,12.953,0,0,0,0,12.453c0,3.5,1.306,6.712,4.11,10.1,2.508,3.026,6.113,6.1,10.288,9.656,1.426,1.215,3.041,2.592,4.719,4.059a2.433,2.433,0,0,0,3.2,0C24,34.8,25.615,33.42,27.042,32.2c4.174-3.557,7.779-6.629,10.287-9.656,2.8-3.383,4.11-6.591,4.11-10.1a12.951,12.951,0,0,0-3.287-8.845Zm0,0" transform="translate(1.25 1.25)"/>
					</svg>
				</article>
			`
		});
		$productsContainer.innerHTML = productsRender;
	}

	filterProducts(_filterArrBtns, _arrForDisplay, _title) {
		_filterArrBtns.forEach(filterBtn => {
			filterBtn.addEventListener('click', () => {
				// this.displayProducts(_arrForDisplay);
				this.displayProducts(_arrForDisplay);
				this.changeTitle(_title);
				// new Bag().getAddToBagBtns();
			})
		})
	}

	changeTitle(title) {
		if($title) {
			// $title.classList.add('title--anim');
			$title.innerText = title;

			// setTimeout(() => {
			// 	$title.classList.remove('title--anim');
			// }, 500);
		}
		//todo dodati animaciju
	}

	setup_filter() {
		this.filterProducts($arrFilterWomenBtns, this.arrWomen, 'for women');
		this.filterProducts($arrFilterMenBtns, this.arrMen, 'for men');
		this.filterProducts($arrFilterAllProductsBtns, this.arrAllProducts, 'all watches');
	};
}