import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG from "../assets/image/1.png";
import { useEditProfileMutation, useGetProfileQuery } from "../services/apis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditProfileAdmin = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [editProfile, { data }] = useEditProfileMutation();

	const profileData = useSelector((state) => state.constants.profileData);
	const { data: profileInfo, refetch } = useGetProfileQuery(id);

	useEffect(() => {
		refetch();
	}, [id]);

	console.log(profileInfo, "XXXXXX");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [bio, setBio] = useState("");
	const [image, setImage] = useState("");
	const [email, setEmail] = useState("");
	const [link, setLink] = useState("");
	const [occupation, setOccupation] = useState("");
	const [phone, setPhone] = useState("");

	const [imageUrl, setImageUrl] = useState("");

	const handleImage = (event) => {
		const newFile = event.target.files[0];
		setImage(newFile);
		setImageUrl(URL.createObjectURL(newFile));
	};

	useEffect(() => {
		setName(profileInfo?.data?.name);
		setEmail(profileInfo?.data?.email);
		setOccupation(profileInfo?.data?.occupation);
		setBio(profileInfo?.data?.bio);
		setImageUrl(
			`http://localhost:4000/public/userImage/${profileInfo?.data?.display_picture}`
		);
		setPhone(profileInfo?.data?.phone_no);
		setLink(profileInfo?.data?.link);
	}, [profileInfo]);

	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("phone_no", phone);
		formData.append("name", name);
		formData.append("display_picture", image);
		formData.append("bio", bio);
		formData.append("email", email);
		formData.append("link", link);
		formData.append("occupation", occupation);
		editProfile(formData);
	};

	useEffect(() => {
		if (data?.success) {
			alert("Profile edit successfully");
			if (profileData?.data?.role === "admin") {
				navigate("/admin");
			}

			if (profileData?.data?.role === "user") {
				navigate("/profile");
			}
		}
	}, [data]);
	return (
		<>
			<Navbar />
			<section className="bg-white mt-56 ">
				<div className="profile-container">
					<h2 className="text-6xl text-bold text-center pt-20 pb-16 font-bold">
						Profile Details
					</h2>

					<div className="form-box">
						<div className="w-1/2 cat-img">
							<img
								src={profileInfo?.data?.display_picture ? imageUrl : IMG}
								alt=""
								className="w-full rounded-xl"
								style={{ height: "300px" }}
							/>

							<div></div>

							<label class="input label">
								<input type="file" required onChange={handleImage} />
								<span>
									<i class="fa-solid fa-upload text-3xl text-white"></i>
								</span>
							</label>
						</div>
					</div>
					<form action="">
						<div className="form-box">
							<label htmlFor="">Address</label>
							<input
								type="text"
								value={profileData?.data?.wallet_address}
								disabled
							/>
						</div>
						<div className="form-box">
							<label htmlFor="">Display Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-box">
							<label htmlFor="">Bio</label>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={bio}
								onChange={(e) => setBio(e.target.value)}
							></textarea>
						</div>
						<div className="form-box">
							<label htmlFor="">Email</label>
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="form-box">
							<label htmlFor="">Phone Number</label>
							<input
								type="text"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>

						<div className="form-box">
							<label htmlFor="">Occupation</label>
							<input
								type="text"
								value={occupation}
								onChange={(e) => setOccupation(e.target.value)}
							/>
						</div>

						<div className="form-box">
							<label htmlFor="">Website Link</label>
							<input
								type="text"
								value={link}
								onChange={(e) => setLink(e.target.value)}
							/>
						</div>
					</form>
					<div className="form-button">
						<button className="profile-btn">Cancel</button>
						<button className="profile-btn" onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default EditProfileAdmin;
