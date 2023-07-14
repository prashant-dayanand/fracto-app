import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMG from "../assets/image/collection-dummy.png";
import { PopUp } from "../utils/alert";
import {
	useCollectionByIdQuery,
	useEditCollectionMutation,
} from "../services/apis";

import { useNavigate, useParams } from "react-router-dom";

const EditCollection = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [editCollection, { data }] = useEditCollectionMutation();

	const { data: listCat, refetch: listLoad } = useCollectionByIdQuery(id);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [image, setImage] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleImage = (event) => {
		const newFile = event.target.files[0];
		setImage(newFile);
		setImageUrl(URL.createObjectURL(newFile));
	};

	useEffect(() => {
		listLoad();
	}, [id]);

	useEffect(() => {
		setTitle(listCat?.data?.name);
		setDescription(listCat?.data?.description);
		setImageUrl(
			`http://localhost:4000/public/collectionImage/${listCat?.data?.image}`
		);

		setImage(`${listCat?.data?.image}`);
	}, [listCat]);

	const handleCategory = (e) => {
		e.preventDefault();

		if (!image) {
			PopUp("Please select image", "", "error");
			return;
		}

		if (!title) {
			PopUp("Please enter collection name", "", "error");
			return;
		}

		if (!description) {
			PopUp("Please enter description", "", "error");
			return;
		}
		const formData = new FormData();
		formData.append("name", title);
		formData.append("image", image);
		formData.append("description", description);
		formData.append("collection_id", id);

		editCollection(formData);
	};

	useEffect(() => {
		if (data?.success) {
			PopUp("Collection edit successfully", "", "success");
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
