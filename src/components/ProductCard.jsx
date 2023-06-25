import React from "react";
import PRODUCT_IMG from "../assets/image/1.png";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
	return (
		<div>
			<img src={PRODUCT_IMG} alt />
			<div style={{ textAline: "left" }}>
				<Link to="/product/1">
					<h3>{data?.nft_name}</h3>
				</Link>
				<p>{data?.description}</p>
				<span>$18.99</span>
			</div>
		</div>
	);
};

export default ProductCard;
