import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/1.png";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCollectionByIdQuery } from "../services/apis";
import moment from "moment";
import { setLoginState } from "../services/slices/constants";

const ViewCollection = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data: listCat, refetch: listLoad } = useCollectionByIdQuery(id);

	useEffect(() => {
		listLoad();
	}, []);

	return (
		<>
			<Navbar />
			<div className="bg-white mt-56">
				<section className="container">
					<div className="mt-20 flex ">
						<img
							src={
								listCat?.data?.image
									? `http://localhost:4000/public/collectionImage/${listCat?.data?.image}`
									: IMG
							}
							alt=""
							className="w-80 h-80 shadow-2xl"
						/>
						<div className="ml-10 text-left">
							<h3 className="text-6xl font-bold">
								{listCat?.data?.name || "Unnamed"}
							</h3>
							<p className="text-2xl text-gray-400 mt-3">
								{listCat?.data?.wallet_address}
							</p>
							<p className="text-2xl text-gray-600 mt-6 font-bold">
								Created on{" "}
								{moment(listCat?.data?.createdAt).format("DD MMM YYYY")}
							</p>
							<p className="text-2xl text-gray-600 mt-6 ">
								{listCat?.data?.description}
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className="flex items-center justify-between">
						<h2 className="mt-4 mb-4 text-4xl font-bold">Collection NFTs</h2>
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
						<div>
							<img
								src={`http://localhost:4000/public/collectionImage/${listCat?.data?.image}`}
								alt=""
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">
									Azuki NFT from original
								</h2>
								<strong className="font-bold text-3xl">12 MATIC</strong>
							</div>
						</div>

						<div>
							<img
								src={`http://localhost:4000/public/collectionImage/${listCat?.data?.image}`}
								alt=""
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">
									Azuki NFT from original
								</h2>
								<strong className="font-bold text-3xl">12 MATIC</strong>
							</div>
						</div>

						<div>
							<img
								src={`http://localhost:4000/public/collectionImage/${listCat?.data?.image}`}
								alt=""
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">
									Azuki NFT from original
								</h2>
								<strong className="font-bold text-3xl">12 MATIC</strong>
							</div>
						</div>

						<div>
							<img
								src={`http://localhost:4000/public/collectionImage/${listCat?.data?.image}`}
								alt=""
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">
									Azuki NFT from original
								</h2>
								<strong className="font-bold text-3xl">12 MATIC</strong>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ViewCollection;
