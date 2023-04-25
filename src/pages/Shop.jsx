import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

const Shop = () => {
	return (
		<>
			<Navbar />
			{/* <section className="gallery" id="gallery"> */}
			<div className="product-container shop-back">
				<div className="left-column">
					<section className="gallery" id="gallery">
						<div className="container">
							<div className="image-container">
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
							</div>
						</div>
					</section>
				</div>
				<Sidebar />
			</div>
			{/* </section> */}
			<Footer />
		</>
	);
};

export default Shop;
