import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNftByIdQuery } from "../services/apis";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collectionAddress } from "../utils/web3/address";
import { PopUp } from "../utils/alert";
import { ethers, Wallet } from "ethers";
import Web3Modal from "web3modal";
import { fractionAddress } from "../utils/web3/address";
import collectionABI from "../utils/web3/collectionABI.json";
import fractionABI from "../utils/web3/fractionABI.json";
import { useSaleNftMutation } from "../services/apis";

const SellNft = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, refetch } = useNftByIdQuery(id);
	const [saleNft, { data: saleData }] = useSaleNftMutation();

	const [amount, setAmount] = useState("");
	const [factionPerPrice, setFractionPrice] = useState("");
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		refetch();
	}, []);

	const handleApprove = async () => {
		if (!amount) {
			PopUp("please enter amount", "", "error");
			return;
		}

		if (!factionPerPrice) {
			PopUp("please enter Fraction Per Price Value", "", "error");
			return;
		}

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
			const token = new ethers.Contract(
				collectionAddress,
				collectionABI,
				signer
			);

			const tx = await token.approve(fractionAddress, data?.data?.token_id, {
				gasLimit: 1000000,
			});
			const result = await tx.wait();

			console.log("RESUKLT", result);
			if (result?.status === 1) {
				handleFraction();
			}
		} catch (err) {
			PopUp("User denied transaction", "", "error");
			console.log("ERR:::", err);
			setLoader(false);
		}
	};

	const handleFraction = async () => {
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

			const price = parseFloat(factionPerPrice).toFixed(12);

			console.log("TOKEN", token);

			const tx = await token.mintAndFractionalize(
				collectionAddress,
				data?.data?.token_id,
				amount,
				amount,
				ethers.utils.parseEther(price.toString()),
				{
					gasLimit: 1000000,
				}
			);
			const result = await tx.wait();
			// setTransactionHash(result?.transactionHash);

			console.log("RESUKLT", result);
			if (result?.status === 1) {
				handleSellNft();
			}
		} catch (err) {
			PopUp("User denied transaction", "", "error");
			console.log("ERR:::222222222222222222222222", err);

			setLoader(false);
		}
	};

	useEffect(() => {
		if (saleData?.success) {
			PopUp("NFT is on sale successfully", "", "success");
			setLoader(false);
			navigate("/admin");
		}
	}, [saleData]);

	const handleSellNft = () => {
		saleNft({
			id: data?.data?._id,
			price: Number(amount) * Number(factionPerPrice),
			amount: amount,
			fraction_amount: amount,
			per_fraction_price: factionPerPrice,
		});
	};

	return (
		<>
			<Navbar />
			<section className="bg-white mt-56 pb-32">
				<div className="profile-container ">
					<h2 className="text-6xl text-bold text-center mt-20">
						Sell Your Art
					</h2>
					<div className="p-8 bg-gray-100 rounded-xl mt-12">
						<div className="mb-4 flex" style={{ gap: "2em" }}>
							<img
								src={`http://localhost:4000/public/nftImage/${data?.data?.nft_media[0]}`}
								alt=""
								className="h-72 w-72 bg-gray-100 rounded-xl"
							/>
							<div>
								<h2 className="text-4xl text-bold">{data?.data?.nft_name}</h2>
								<p className="text-xl mt-4 text-gray-600">
									{data?.data?.description}
								</p>
							</div>
						</div>
					</div>
					<div className="h-10"></div>
					<form action="">
						<div className="sell-input mt-6">
							<div className="form-box">
								<label htmlFor="">TokenId</label>
								<p>This is used for your NFT identification</p>
								<input type="text" value={data?.data?.token_id} />
							</div>
							<div className="form-box">
								<label htmlFor="">Collection Address</label>
								<p>
									This will deducted your NFT value and goes to Administrator
								</p>
								<input type="text" value={collectionAddress} />
							</div>
						</div>
						<div className="sell-input">
							<div className="form-box">
								<label htmlFor="">Fraction Amount</label>
								<p>Your selling value</p>
								<input
									type="number"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
							</div>
							<div className="form-box">
								<label htmlFor="">Fractions</label>
								<p>It will divide your nft into chunks</p>
								<input type="text" value={amount + " Fractions"} disabled />
							</div>
						</div>

						<div className="sell-input">
							<div className="form-box">
								<label htmlFor="">Fraction per Price</label>
								<p>It is used for per fraction price</p>
								<input
									type="number"
									value={factionPerPrice}
									onChange={(e) => setFractionPrice(e.target.value)}
								/>
							</div>
							<div className="form-box">
								<label htmlFor="">NFT Price</label>
								<p>Generated according to Fraction per Price</p>
								<input
									type="text"
									value={amount * factionPerPrice + " " + "MATIC"}
									disabled
								/>
							</div>
						</div>
					</form>
					<div className="form-button">
						<button className="profile-btn">Cancel</button>
						<button
							className="profile-btn"
							onClick={handleApprove}
							disabled={loader}
						>
							{loader ? "Submitting..." : "Submit"}
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SellNft;
