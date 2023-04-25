import React from "react";
import IMG from "../assets/image/4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Product = () => {
	return (
		<>
			<Navbar />
			<section className="gallery" id="gallery">
				<div className="product-container">
					<div className="left-column">
						<img data-image="red" className="active" src={IMG} alt />
					</div>
					{/* Right Column */}
					<div className="right-column">
						<h1 style={{ color: "white" }}>Tyeb Mehta, Kali, 1997</h1>
						<p>Acrylic on canvas, 30 x 35.9 inches</p>
						<h3>$477.99</h3>
						<p>
							Quem tota utroque mea ea, nam blandit disputando te, sale volutpat
							pri in. Mutat eleifend per ut, has ut nusquam accumsan mnesarchum.
							Solum reque signiferumque ius ea. In primis eripuit menandri his,
							usu modus munere at eos.
						</p>
						<select className="select">
							<option selected>Choose color</option>
							<option>Red</option>
							<option>Blue</option>
							<option>Black</option>
							<option>Yellow</option>
						</select>
						<br />
						<button className="btn">BUY NOW</button>
						<a href="#">
							<img src="image/heart.png" alt="wishlist" />
							Add to wishlist
						</a>
						<h6>
							No. <span>082</span>
						</h6>
						<h6>
							Category <span>face</span>
						</h6>
						<h6>
							Tag <span>Cosmetic</span>
						</h6>
						<h6>Share</h6>
						<a href="#" className="fab fa-facebook-f" />
						<a href="#" className="fab fa-twitter" />
						<a href="#" className="fab fa-instagram" />
						<a href="#" className="fab fa-linkedin" />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Product;
