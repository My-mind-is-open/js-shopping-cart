

class About {




	render() {

		let html = `
		<div class='about-container'>
		<h1 class="about-title" id="about1">About</h1>
<div class="about-history">
<div class="text-container about-history__text-container">
<h4 class='subtitle'>History</h4>
<p class='lead'>
The idea for this site was born out of the need to help sell Nike products. We are the official distribution center, which was established in 2014 and has been functioning ever since. Our headquarters is located in London. The economic center of Europe.
</p>
</div>
<img src="https://i.ibb.co/D8hMC1h/apartament.jpg" alt="apartament" class="about__img"/>
</div>
<div class="about-goals">
<img src="https://i.ibb.co/9scy4mf/goalsjpeg.jpg" alt="goals" class="about__img-goals"/>
<div class="text-container about-goals__text-container">
<h4 class="subtitle">Our goals and mission</h4>
<p class="lead about-goals__lead">Our mission is for everyone to purchase comfortable footwear to make it easier to accomplish their athletic goals. To bring inspiration and innovation to every athlete in the world. If you have a body, you are an athlete, and our products stand out to our customers for their high quality, service and comfort.
Our goal is to expand the distribution areas of these products and make a profit.</p>
</div>
</div>
<h1 class="about-title">Our Portfolio</h1>
<div class="collection">
		<div class="collection__container">
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/1MT224w/col1.jpg" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>COLLABORATIONS</h3>
						<p>Jordan Brand s collaboration with Maison Château Rouge further cements the Jumpmans multifaceted
							connection to the city of Paris.</p>
					</div>
				</div>
			</div>
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/gwyTm0B/col2.jpg" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>PERFORMANCE</h3>
						<p>The prototype colorway of the Nike Air Zoom Alphafly NEXT% 2 releases in limited quantities
							beginning
							June 15.</p>
					</div>
				</div>
			</div>
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/1X55rjV/col4.jpg" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>NIKE N7</h3>
						<p>The N7 Collection is designed in the spirit of championing athletes and expanding sport for the
							next
							generation.</p>
					</div>
				</div>
			</div>
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/2Ps8gVr/col3.webp" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>NIKE BETRUE</h3>
						<p>Nike’s Be True collection recognizes athletes who are expanding sport for the next generation — on
							and
							off the field — and inspiring others to feel the joy in being authentically themselves.</p>
					</div>
				</div>
			</div>
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/QdF6zsd/col5.jpg" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>JERSEYS</h3>
						<p>England, France, the Netherlands, Portugal, Finland and Norway head into this summer’s competition
							with new designs.</p>
					</div>
				</div>
			</div>
			<div class="collection__card">
				<div class="collection__imgBx">
					<img class="collection__img" src="https://i.ibb.co/LvnT93P/col6.jpg" alt="">
				</div>
				<div class="collection__contentBx">
					<div class="collection__content">
						<h3>EARNINGS</h3>
						<p>BEAVERTON, Ore., June 27, 2022 — NIKE, Inc. (NYSE:NKE) today reported financial results for its
							fiscal
							2022 fourth quarter and full year ended May 31, 2022.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
		</div>
		`;
		ROOT_ABOUT.innerHTML = html
	}
}
const aboutPage = new About();