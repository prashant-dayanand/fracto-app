import React from "react";
import PRODUCT_IMG from "../assets/image/1.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
	return (
		<div>
			<img src={PRODUCT_IMG} alt />
			<div style={{ textAline: "left" }}>
				<Link to="/product/1">
					<h3>Fractor Art Defense</h3>
				</Link>
				<p>Acrylic on canvas, 30 x 35.9 inches</p>
				<span>$18.99</span>
			</div>
		</div>
	);
};

export default ProductCard;
