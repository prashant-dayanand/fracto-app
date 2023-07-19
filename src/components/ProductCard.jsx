import React from "react";
import PRODUCT_IMG from "../assets/image/1.png";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
	return (
		<div
			className="p-6 bg-white"
			style={{
				borderRadius: "10px",
			}}
		>
			<div className="sold-nft">
				{data?.token_owner?.remaining_fraction === 0 && (
					<div className="sold-box">
						<p>SOLD</p>
					</div>
				)}

				<img
					src={`http://localhost:4000/public/nftImage/${data?.nft_media[0]}`}
					style={{
						opacity: data?.token_owner?.remaining_fraction === 0 ? "0.3" : "1",
						height: "220px",
						borderRadius: "10px",
					}}
					alt
				/>
				<div
					style={{ textAline: "left" }}
					className="bg-white mt-0 text-left p-8"
				>
					<Link to={`/product/${data?._id}`} state={{ item: data }}>
						<h3 className="text-black text-3xl font-bold mb-2">
							{data?.nft_name}
						</h3>
					</Link>
					{/* <p>{data?.description}</p> */}
					<div className="flex justify-between">
						<div>
							<h3 className="text-gray-400 text-2xl font-bold mt-4">
								FRACTIONS{" "}
							</h3>
							<p className="text-black text-2xl font-bold">
								#{data?.token_owner?.amount}
							</p>
						</div>
						<div>
							<h3 className="text-gray-400 text-2xl font-bold mt-4">PRICE </h3>
							<p className="text-black text-2xl font-bold">
								{data?.token_owner?.price} MATIC
							</p>
						</div>
					</div>
				</div>
			</div>
			<button class="bg-pink-200 w-full p-4 text-3xl uppercase font-bold rounded-xl text-pink-700">
				Buy
			</button>
		</div>
	);
};

export default ProductCard;
