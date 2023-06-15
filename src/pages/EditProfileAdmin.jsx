import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG from "../assets/image/1.png";

const EditProfileAdmin = () => {
	return (
		<>
			<Navbar />
			<section className="bg-white mt-56 ">
				<h2 className="text-6xl text-bold">Profile Details</h2>

				<div>
					<img
						src={IMG}
						alt=""
						className="h-72 w-72 bg-gray-100 my-8 rounded"
					/>
				</div>
				<form action="">
					<div className="form-box">
						<label htmlFor="">Address</label>
						<input
							type="text"
							value={"0x5d95717dFd3D2f306a4114B3420746c3DfD10e84"}
						/>
					</div>
					<div className="form-box">
						<label htmlFor="">Display Name</label>
						<input type="text" />
					</div>
					<div className="form-box">
						<label htmlFor="">Bio</label>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<div className="form-box">
						<label htmlFor="">Email</label>
						<input type="text" />
					</div>

					<div className="form-box">
						<label htmlFor="">Website Link</label>
						<input type="text" />
					</div>
				</form>
				<div className="form-button">
					<button className="profile-btn">Cancel</button>
					<button className="profile-btn">Submit</button>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default EditProfileAdmin;
