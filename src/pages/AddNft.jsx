import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG from "../assets/image/1.png";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useListCategoryQuery, useAddNftMutation } from "../services/apis";
import { PopUp } from "../utils/alert";
import { ethers, Wallet } from "ethers";
import Web3Modal from "web3modal";
import { admin, collectionAddress } from "../utils/web3/address";
import collectionABI from "../utils/web3/collectionABI.json";
import { useNavigate } from "react-router-dom";
const AddNft = () => {
	const navigate = useNavigate();
	const { data: listCat, refetch: listLoad } = useListCategoryQuery();
	const [addNft, { data }] = useAddNftMutation();
	const [image, setImage] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [category, setCategory] = useState("");
	const [uuid, setUUid] = useState(0);
	const [transactionHash, setTransactionHash] = useState(0);

	const [loader, setLoader] = useState(false);

	useEffect(() => {
		function generateRandomNumber() {
			let randomNumber =
				Math.floor(Math.random() * 9000000000000) + 100000000000;
			return randomNumber;
		}

		var randomNum = generateRandomNumber();
		setUUid(randomNum);
		listLoad();
	}, []);

	const handleImage = (event) => {
		const newFile = event.target.files[0];
		setImage(newFile);
		setImageUrl(URL.createObjectURL(newFile));
	};

	useEffect(() => {
		if (data?.success) {
			PopUp("Nft created successfully", "", "success");
			setLoader(false);
			navigate("/admin");
		}
	}, [data]);

	const handleNft = () => {
		const formdata = new FormData();
		formdata.append("category_id", category);
		formdata.append("nft_name", name);
		formdata.append("external_link", link);
		formdata.append("description", description);
		formdata.append("token_id", uuid);
		formdata.append("nft_images", image);
		formdata.append("transaction_id", transactionHash);

		addNft(formdata);
	};

	const minNft = async () => {
		if (!image) {
			PopUp("Please select image", "", "error");
			return;
		}

		if (!name) {
			PopUp("Please enter name", "", "error");
			return;
		}

		if (!description) {
			PopUp("Please enter description", "", "error");
			return;
		}

		if (!category) {
			PopUp("Please select category", "", "error");
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

			const tx = await token.safeMint(admin, uuid);
			const result = await tx.wait();
			setTransactionHash(result?.transactionHash);

			console.log("RESUKLT", result);
			if (result?.status === 1) {
				handleNft();
			}
		} catch (err) {
			PopUp("User denied transaction", "", "error");
			setLoader(false);
		}
	};

	return (
		<>
			<Navbar />
			<section className="bg-white mt-56">
				<div className=" profile-container">
					<h2 className="text-6xl text-bold text-center mt-16">
						Create New Item
					</h2>

					<form action="">
						<div className="max-w-xl my-16">
							<label className="flex justify-center w-full h-96 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
								<span className="flex items-center space-x-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-gray-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										/>
									</svg>
									<span className="text-2xl text-gray-600">
										Upload your NFT image
										{/* <span className="text-blue-600 underline">browse</span> */}
									</span>
									<img
										src={imageUrl}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</span>
								<input
									type="file"
									name="file_upload"
									className="hidden"
									onChange={handleImage}
								/>
							</label>
							<p className="mt-3">
								File types supported: JPG, PNG, GIF. Max size: 100 MB
							</p>
						</div>
						<div className="form-box">
							<label htmlFor="">TokenId</label>
							<p className="mb-3">
								This is Auto Generated and used for your NFT identification
							</p>
							<input type="text" value={uuid} />
						</div>
						<div className="form-box">
							<label htmlFor="">NFT Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-box">
							<label htmlFor="">Description</label>
							<p>
								The description will be included on the item's detail page
								underneath its image.
							</p>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
						<div className="form-box">
							<label htmlFor="">External Link</label>
							<p>
								It will include a link to this URL on this item's detail page,
								so that users can click to learn more about it.
							</p>
							<input
								type="text"
								value={link}
								onChange={(e) => setLink(e.target.valuee)}
							/>
						</div>

						<div className="form-box">
							<label htmlFor="">Category</label>
							<p>This is the Category where your item will appear.</p>

							<select
								name=""
								id=""
								onChange={(e) => setCategory(e.target.value)}
							>
								{listCat?.data?.length > 0 &&
									listCat?.data?.map((item) => {
										return <option value={item?._id}>{item?.name}</option>;
									})}
							</select>
						</div>
					</form>
					<div className="form-button">
						<button className="profile-btn">Cancel</button>
						<button className="profile-btn" onClick={minNft} disabled={loader}>
							{loader ? "Submitting..." : "Submit"}
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AddNft;
