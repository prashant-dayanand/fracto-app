import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item, url }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="shadow-card">
				<div style={{ padding: "1.3em" }}>
					<img
						src={`http://localhost:4000/public/nftImage/${item?.nft_media[0]}`}
						alt=""
					/>
					<div className="p-6" style={{ borderRadius: "0 0 10px 10px" }}>
						<h2 className="text-4xl font-bold mb-6">{item?.nft_name}</h2>

						<p className="text-xl  mb-4 text-gray-700">
							{item.description.substring(0, 80)}
						</p>

						<button
							className="mt-6 font-bold mx-auto w-full py-2"
							style={{
								fontSize: "14px",
								border: "2px solid #a12669 ",
								borderRadius: "5px",
							}}
							onClick={() => navigate(url)}
						>
							Sale NFT
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
