import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePurchaseNftMutation } from "../services/apis";

import { useNftByIdQuery } from "../services/apis";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";

import { PopUp } from "../utils/alert";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { fractionAddress, collectionAddress } from "../utils/web3/address";
import collectionABI from "../utils/web3/collectionABI.json";
import fractionABI from "../utils/web3/fractionABI.json";
const Product = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const { data, refetch } = useNftByIdQuery(id);
	const [loader, setLoader] = useState(false);
	const [isShow, setIsShow] = useState(false);

	const profileData = useSelector((state) => state.constants.profileData);

	const [fractionAmount, setFractionAmount] = useState(false);

	const [purchaseNft, { data: nftPurchase }] = usePurchaseNftMutation();

	useEffect(() => {
		refetch();
	}, []);

	console.log("profileData", profileData);

	const handlePurchase = async () => {
		setLoader(true);
		try {
			const web3Modal = new Web3Modal({
				network: "mumbai",
				cacheProvider: true,
			});
			const providerOptions = {};
			const provider = await web3Modal.connect(providerOptions);
			const ethersProvider = new ethers.providers.Web3Provider(provider);
			const signer = ethersProvider.getSigner();
			const token = new ethers.Contract(fractionAddress, fractionABI, signer);

			const tx = await token.purchaseFraction(
				collectionAddress,
				data?.data?.token_id,
				fractionAmount,
				{
					gasLimit: 1000000,
					value: ethers.utils.parseEther(
						(data?.data?.token_owner?.per_fraction_price * fractionAmount)
							.toFixed(7)
							.toString()
					),
				}
			);
			const result = await tx.wait();

			console.log("RESUKLT", result);
			if (result?.status === 1) {
				handlePurchaseNft();
			}
		} catch (err) {
			PopUp("User denied transaction", "", "error");
			setLoader(false);
		}
	};

	useEffect(() => {
		if (nftPurchase?.success) {
			PopUp("Nft sold successfully", "", "success");
			setIsShow(false);
			setFractionAmount("");
			refetch();
		}
	}, [nftPurchase]);

	const handlePurchaseNft = () => {
		purchaseNft({
			token_id: data?.data?._id,
			amount: data?.data?.token_owner?.per_fraction_price * fractionAmount,
			fractionPurchase: Number(fractionAmount),
		});
	};
	return (
		<>
			<Navbar />
			<section className="gallery mt-12" id="gallery">
				<div className="product-container">
					<div className="">
						<img
							data-image="red"
							className="active"
							src={`http://localhost:4000/public/nftImage/${data?.data?.nft_media[0]}`}
							style={{ height: "500px", width: "500px" }}
							alt
						/>
					</div>
					{/* Right Column */}
					<div className="right-column ml-10">
						<h1 style={{ color: "white", padding: "0px", marginTop: "0px" }}>
							{data?.data?.nft_name}
						</h1>
						<div>
							<h4 className="text-2xl font-bold text-white mb-2 mt-4">
								DESCRIPTION
							</h4>
							<p style={{ padding: "0px", fontSize: "15px", color: "#e2e2e2" }}>
								{data?.data?.description}
							</p>
						</div>
						<h3>{data?.data?.token_owner?.price} MATIC</h3>

						{/* <select className="select">
							<option selected>Choose color</option>
							<option>Red</option>
							<option>Blue</option>
							<option>Black</option>
							<option>Yellow</option>
						</select> */}
						<br />
						{profileData?.data?.role !== "admin" && (
							<input
								type="number"
								min="5"
								style={{
									border: "1px solid white",
									marginBottom: "2em",
									padding: ".5em 1em",
									borderRadius: "5px",
									fontSize: "14px",
								}}
								placeholder="Enter Fraction"
								value={fractionAmount}
								disabled={
									data?.data?.token_owner?.remaining_fraction === 0
										? true
										: false
								}
								onChange={(e) => setFractionAmount(e.target.value)}
							/>
						)}

						<br />
						{profileData?.data?.role !== "admin" && (
							<button
								className="text-2xl"
								disabled={
									data?.data?.token_owner?.remaining_fraction === 0
										? true
										: false
								}
								onClick={() => {
									if (!fractionAmount) {
										PopUp("Please add define", "", "error");
										return;
									}

									if (fractionAmount < 5) {
										PopUp("Fraction should be greater than 5", "", "error");
										return;
									}

									if (fractionAmount > data?.data?.token_owner?.amount) {
										PopUp("Fraction is not available", "", "error");
										return;
									}
									setIsShow(true);
								}}
								style={{ padding: ".5em 2em", borderRadius: "10px" }}
							>
								BUY NOW
							</button>
						)}

						{/* <a href="#">
							<img src="image/heart.png" alt="wishlist" />
							Add to wishlist
						</a> */}

						<div
							className="w-full p-10 bg-white rounded-xl"
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: "2em",
							}}
						>
							<div>
								<h6 className="text-4xl" style={{ marginTop: "0px" }}>
									TOTAL FRACTION
								</h6>
								<h5
									className="font-bold text-4xl text-gray-100"
									style={{ color: "black" }}
								>
									{data?.data?.token_owner?.amount}
								</h5>
							</div>

							<div>
								<h6 className="text-4xl" style={{ marginTop: "0px" }}>
									FRACTION SOLD
								</h6>
								<h5
									className="font-bold text-4xl text-gray-100"
									style={{ color: "black" }}
								>
									{" "}
									{data?.data?.token_owner?.amount -
										data?.data?.token_owner?.remaining_fraction}
								</h5>
							</div>

							<div>
								<h6 className="text-4xl" style={{ marginTop: "0px" }}>
									FRACTION PRICE
								</h6>
								<h5
									className="font-bold text-4xl text-gray-100"
									style={{ color: "black" }}
								>
									{data?.data?.token_owner?.price /
										data?.data?.token_owner?.amount}
								</h5>
							</div>

							<div>
								<h6 className="text-4xl" style={{ marginTop: "0px" }}>
									COLLECTION
								</h6>
								<h5
									className="font-bold text-4xl text-gray-100"
									style={{ color: "black" }}
								>
									Monkey
								</h5>
							</div>
						</div>

						{/* <h6>Share</h6>
						<a href="#" className="fab fa-facebook-f" />
						<a href="#" className="fab fa-twitter" />
						<a href="#" className="fab fa-instagram" />
						<a href="#" className="fab fa-linkedin" /> */}
					</div>
				</div>
			</section>
			<Footer />

			<Modal show={isShow} onClose={() => setIsShow(false)}>
				<div className="flex items-center p-8 justify-center flex-col">
					<h2 className="text-4xl font-bold text-center mb-12">Checkout</h2>
					<div style={{ width: "100%" }}>
						<div className="flex items-center justify-between w-full">
							<h3 className="text-xl font-bold text-center mb-4">NFT NAME</h3>
							<p className="text-xl text-center mb-4">{data?.data?.nft_name}</p>
						</div>

						<div className="flex items-center justify-between w-full">
							<h3 className="text-xl font-bold text-center mb-4">
								BUY FRACTION
							</h3>
							<p className="text-xl text-center mb-4">{fractionAmount}</p>
						</div>

						<div className="flex items-center justify-between w-full">
							<h3 className="text-xl font-bold text-center mb-4">
								Total Amount
							</h3>
							<p className="text-xl text-center mb-4">
								{data?.data?.token_owner?.per_fraction_price * fractionAmount}
							</p>
						</div>

						<div className="flex items-center  w-full mt-12 justify-around">
							<button
								className="btn btn-primary"
								style={{ fontSize: "14px" }}
								onClick={() => setIsShow(false)}
							>
								Cancel
							</button>
							<button
								className="btn btn-primary"
								style={{ fontSize: "14px" }}
								onClick={handlePurchase}
								disabled={loader}
							>
								{loader ? "Loading..." : "Confirm"}
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Product;
