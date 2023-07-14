import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/1.png";
import moment from "moment";

import { useNavigate } from "react-router-dom";
import UserList from "./UserList";
import Users from "./Users";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../services/apis";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "../services/slices/constants";

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const walletInfo = useSelector((state) => state.constants.walletInfo);
	const profileData = useSelector((state) => state.constants.profileData);

	const { data, refetch } = useGetProfileQuery(profileData?.data?._id);

	useEffect(() => {
		refetch();
	}, []);

	console.log(data, "XXXXXX");

	const handleLogout = () => {
		dispatch(setLoginState(0));
		// disconnect();
		navigate("/");
	};

	return (
		<>
			<Navbar />
			<div className="bg-white mt-56">
				<section className="container">
					<div className="mt-20 flex items-center">
						<img
							src={
								data?.data?.display_picture
									? `http://localhost:4000/public/userImage/${data?.data?.display_picture}`
									: IMG
							}
							alt=""
							className="w-80 h-80 rounded-full shadow-2xl"
						/>
						<div className="ml-10 text-left">
							<h3 className="text-6xl font-bold">
								{data?.data?.name || "Unnamed"}
							</h3>
							<p className="text-xl text-gray-400 mt-3">
								{profileData?.data?.wallet_address}
							</p>
							<p className="text-2xl text-gray-600 mt-2">
								Joined on{" "}
								{moment(profileData?.data?.createdAt).format("DD MMM YYYY")}
							</p>
							<div className="mt-8">
								<button
									className="profile-btn"
									onClick={() => navigate("/add-nft")}
								>
									Add NFT
								</button>
								<button
									className="profile-btn"
									onClick={() =>
										navigate(`/edit-profile/${profileData?.data?._id}`)
									}
								>
									Edit Profile
								</button>
								{/* <button
									className="profile-btn"
									onClick={() => navigate("/sell")}
								>
									Sell NFT
								</button> */}
								<button className="profile-btn" onClick={handleLogout}>
									Logout
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
						</tbody>
					</table>
				</section>
				<Users />
				<UserList />
			</div>
			<Footer />
		</>
	);
};

export default UserProfile;
