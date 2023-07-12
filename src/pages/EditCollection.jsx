import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/1.png";
import { useAddCategoryMutation } from "../services/apis";

import { useNavigate } from "react-router-dom";
import UserList from "./UserList";

const EditCollection = () => {
	const navigate = useNavigate();
	const [addCotegory, { data }] = useAddCategoryMutation();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [image, setImage] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleImage = (event) => {
		const newFile = event.target.files[0];
		setImage(newFile);
		setImageUrl(URL.createObjectURL(newFile));
	};

	const handleCategory = (e) => {
		const formData = new FormData();
		formData.append("name", title);
		formData.append("image", image);
		formData.append("description", description);

		e.preventDefault();
		addCotegory(formData);
	};

	useEffect(() => {
		if (data?.success) {
			alert("Category created successfully");
			navigate("/admin");
		}
	}, [data]);

	console.log("image", image);
	return (
		<>
			<Navbar />
			<div className="bg-white mt-56 pb-20">
				<section className="container">
					<div className="mt-20 flex gap-10">
						<div className="w-1/2 cat-img">
							<img
								src={imageUrl || IMG}
								alt=""
								className="w-full rounded-xl"
								style={{ height: "400px" }}
							/>

							<label class="input label">
								<input type="file" required onChange={handleImage} />
								<span>
									<i class="fa-solid fa-upload text-3xl text-white"></i>
								</span>
							</label>
						</div>
						<div className="w-2/3">
							<form action="" className="form-box  text-left">
								<div>
									<label htmlFor="">Collection Name</label>
									<input
										type="text"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div>
									<label htmlFor="">Description</label>
									<textarea
										name=""
										id=""
										cols="30"
										rows="10"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>
								<button class="btn btn-primary" onClick={handleCategory}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default EditCollection;
