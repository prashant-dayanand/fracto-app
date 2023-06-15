import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG from "../assets/image/1.png";

const AddNft = () => {
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
								</span>
								<input type="file" name="file_upload" className="hidden" />
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
							<input type="text" value={"asdf-123-asdf-123"} />
						</div>
						<div className="form-box">
							<label htmlFor="">NFT Name</label>
							<input type="text" />
						</div>
						<div className="form-box">
							<label htmlFor="">Description</label>
							<p>
								The description will be included on the item's detail page
								underneath its image.
							</p>
							<textarea name="" id="" cols="30" rows="10"></textarea>
						</div>
						<div className="form-box">
							<label htmlFor="">External Link</label>
							<p>
								It will include a link to this URL on this item's detail page,
								so that users can click to learn more about it.
							</p>
							<input type="text" />
						</div>

						<div className="form-box">
							<label htmlFor="">Category</label>
							<p>This is the Category where your item will appear.</p>

							<select name="" id="">
								<option value="">Category 1</option>
								<option value="">Category 2</option>

								<option value="">Category 3</option>

								<option value="">Category 4</option>
							</select>
						</div>
					</form>
					<div className="form-button">
						<button className="profile-btn">Cancel</button>
						<button className="profile-btn">Submit</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AddNft;
