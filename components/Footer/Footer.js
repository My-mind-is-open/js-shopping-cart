
class Footer {
	render() {

		const ppp = document.querySelector('.Login-btn');
		console.log(ppp)


		let html = `
		<div class="footer">

		<ul class="footer-social__icon">
		<li class="footer-social__icon-item"><a href-# class="footer__link"><img src="https://i.ibb.co/JqDzB4B/twitter.png"class="footer__icons"/> </a></li>
		<li class="footer-social__icon-item"><a href="#" class="footer__link"><img src="https://i.ibb.co/nPKhW5F/facebook.png"class="footer__icons"/></a></li>
		<li class="footer-social__icon-item"><a href="#" class="footer__link"><img src="https://i.ibb.co/n6H6PFV/telegram.png"class="footer__icons"/></a></li>
		<li class="footer-social__icon-item"><a href="#"class="footer__link"><img src="https://i.ibb.co/LRqZP29/instagram.png"class="footer__icons"/></a></li>
		</ul>
		<ul class="footer__menu">
		<li class="footer__menu-item"><a href="#OurHits"class="footer__menu-link">Our hits</a></li>
		<li class="footer__menu-item"><a href="#ForMen"class="footer__menu-link">For men</a></li>
		<li class="footer__menu-item"><a  href="#ForWomen" class="footer__menu-link">For women</a></li>
		<li class="footer__menu-item"><a href="#about1"class="footer__menu-link">About</a></li>
		</ul>
		</div>
		`;
		ROOT_FOOTER.innerHTML = html;

	}
}
const footerPage = new Footer()
