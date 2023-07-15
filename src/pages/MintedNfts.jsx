import React from "react";
import { useNftListQuery } from "../services/apis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MintedNfts = () => {
	const navigate = useNavigate();
	const { data, refetch } = useNftListQuery();
	useEffect(() => {
		refetch();
	}, []);
	return (
		<section>
			<div className="flex items-center justify-between">
				<h2 className="mt-4 mb-4 text-4xl font-bold">Minted NFTs</h2>
				<input
					type="text"
					placeholder="Search NFT"
					className="border-gray-300 px-4 py-2 text-2xl"
					style={{
						border: "1px solid #e2e2e2",
						width: "30%",
						borderRadius: "5px",
					}}
				/>
			</div>
			<div className="nft-collection">
				{data?.data?.length > 0 &&
					data?.data?.map((item) => {
						return (
							<div>
								<img
									src={`http://localhost:4000/public/nftImage/${item?.nft_media[0]}`}
									alt=""
								/>
								<div className="p-6" style={{ borderRadius: "0 0 10px 10px" }}>
									<h2 className="text-4xl font-bold mb-6">{item?.nft_name}</h2>

									<button
										className="mt-6 font-bold mx-auto w-full py-2"
										style={{
											fontSize: "14px",
											border: "2px solid #a12669 ",
											borderRadius: "10px",
										}}
										onClick={() => navigate(`/sell/${item?._id}`)}
									>
										Sale
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default MintedNfts;
