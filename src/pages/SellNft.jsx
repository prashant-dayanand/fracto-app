import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG from "../assets/image/1.png";

const SellNft = () => {
	return (
		<>
			<Navbar />
			<section className="bg-white mt-56 pb-32">
				<div className="profile-container">
					<h2 className="text-6xl text-bold text-center mt-20">
						Sell Your Art
					</h2>

					<div className="nft-desc">
						<img src={IMG} alt="" className="h-72 w-72 bg-gray-100 rounded" />
						<div>
							<h2 className="text-3xl text-bold">NFT NAME</h2>
							<p className="text-xl mt-4 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								doloribus alias quae odit temporibus, nihil est illo dolores ea
								ut laboriosam explicabo praesentium itaque voluptatum.
								Praesentium reprehenderit, est tempore vel reiciendis assumenda
								placeat consectetur ut iusto, recusandae fugit delectus? Error
								suscipit veritatis odio ab. Voluptates amet animi exercitationem
								vitae quod?
							</p>
						</div>
					</div>
					<form action="">
						<div className="sell-input">
							<div className="form-box">
								<label htmlFor="">TokenId</label>
								<p>This is used for your NFT identification</p>
								<input type="text" value={"asdf-1234-asd-123"} />
							</div>
							<div className="form-box">
								<label htmlFor="">Commission</label>
								<p>
									This will deducted your NFT value and goes to Administrator
								</p>
								<input type="text" value={"10%"} />
							</div>
						</div>
						<div className="sell-input">
							<div className="form-box">
								<label htmlFor="">Price</label>
								<p>Your selling value</p>
								<input type="number" />
							</div>
							<div className="form-box">
								<label htmlFor="">Fraction</label>
								<p>It will divide your nft into chunks</p>
								<input type="number" />
							</div>
						</div>
					</form>
					<div className="form-button">
						<button className="profile-btn">Cancel</button>
						<button className="profile-btn">Sell</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SellNft;
