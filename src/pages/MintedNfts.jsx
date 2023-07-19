import React from "react";
import { useNftListQuery } from "../services/apis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import NoData from "../components/NoData";

const MintedNfts = () => {
	const { data, refetch } = useNftListQuery();

	const [search, setSearch] = useState("");

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
						border: "1px solid #b1b1b1",
						width: "32%",
						borderRadius: "5px",
					}}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			{data?.data?.length === 0 && <NoData />}

			<div className="nft-collection">
				{data?.data?.length > 0 &&
					data?.data
						?.filter((obj) => obj.nft_name.toLowerCase().includes(search))
						?.map((item) => {
							return (
								<>
									<Card item={item} url={`/sell/${item?._id}`} />
								</>
							);
						})}
			</div>
		</section>
	);
};

export default MintedNfts;
