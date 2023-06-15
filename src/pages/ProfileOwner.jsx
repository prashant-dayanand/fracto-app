import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/1.png";

import { useNavigate } from "react-router-dom";

const ProfileOwner = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<div className="bg-white mt-56">
				<section className="container">
					<div className="mt-20 flex">
						<img src={IMG} alt="" className="w-80 rounded-xl" />
						<div className="ml-6 text-left">
							<h3 className="text-6xl font-bold">Unnamed</h3>
							<p className="text-xl text-gray-400 mt-3">
								ghgh2gj1....fjfjhfy888
							</p>
							<p className="text-2xl text-gray-600 mt-2">Joined April 2023</p>
							<div className="mt-8">
								<button
									className="profile-btn"
									onClick={() => navigate("/add-nft")}
								>
									Add NFT
								</button>
								<button
									className="profile-btn"
									onClick={() => navigate("/profile-admin/2")}
								>
									Edit Profile
								</button>
								<button
									className="profile-btn"
									onClick={() => navigate("/sell")}
								>
									Sell NFT
								</button>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2 className="mt-4 mb-4 text-4xl font-bold">Created NFTs</h2>
					<table class="styled-table">
						<thead>
							<tr>
								<th>SN</th>
								<th>NFT NAME</th>
								<th>PRICE</th>
								<th>ADDRESS</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Fracto Art</td>
								<td>2 ETH</td>
								<td>GIGJGJI...UIU</td>
								<td>View</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Fracto Art</td>
								<td>2 ETH</td>
								<td>GIGJGJI...UIU</td>
								<td>View</td>
							</tr>{" "}
							<tr>
								<td>1</td>
								<td>Fracto Art</td>
								<td>2 ETH</td>
								<td>GIGJGJI...UIU</td>
								<td>View</td>
							</tr>{" "}
							<tr>
								<td>1</td>
								<td>Fracto Art</td>
								<td>2 ETH</td>
								<td>GIGJGJI...UIU</td>
								<td>View</td>
							</tr>{" "}
							<tr>
								<td>1</td>
								<td>Fracto Art</td>
								<td>2 ETH</td>
								<td>GIGJGJI...UIU</td>
								<td>View</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProfileOwner;
