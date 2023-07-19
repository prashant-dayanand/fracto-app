import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/user-dummy.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery } from "../services/apis";
import moment from "moment";
import { setLoginState } from "../services/slices/constants";

const ProfileOwner = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const profileData = useSelector((state) => state.constants.profileData);

	const { data, refetch } = useGetProfileQuery(profileData?.data?._id);

	useEffect(() => {
		refetch();
	}, []);

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
							className="w-80 h-80 rounded-full shadow-lg"
						/>
						<div className="ml-10 text-left">
							<h3 className="text-6xl font-bold">
								{data?.data?.name || "Unnamed"}
							</h3>
							<p className="text-2xl text-gray-400 mt-3">
								{profileData?.data?.wallet_address}
							</p>
							<p className="text-2xl text-gray-600 mt-6 font-bold">
								Joined{" "}
								{moment(profileData?.data?.createdAt).format("DD MMM YYYY")}
							</p>
							<div className="mt-8">
								<button
									className="profile-btn"
									onClick={() =>
										navigate(`/edit-profile/${profileData?.data?._id}`)
									}
								>
									Edit Profile
								</button>
								<button className="profile-btn" onClick={handleLogout}>
									Logout
								</button>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2 className="mt-4 mb-4 text-4xl font-bold">Purchased NFTs</h2>
					<div className="nft-collection">
						<div>
							<img
								src={`http://localhost:4000/public/userImage/${data?.data?.display_picture}`}
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
								src={`http://localhost:4000/public/userImage/${data?.data?.display_picture}`}
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
								src={`http://localhost:4000/public/userImage/${data?.data?.display_picture}`}
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
								src={`http://localhost:4000/public/userImage/${data?.data?.display_picture}`}
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

export default ProfileOwner;
