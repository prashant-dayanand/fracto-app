import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useNftListQuery } from "../services/apis";
import { useEffect } from "react";

const Shop = () => {
	const { data, refetch } = useNftListQuery();

	useEffect(() => {
		refetch();
	}, []);
	return (
		<>
			<Navbar />
			{/* <section className="gallery" id="gallery"> */}
			<div className="product-container shop-back">
				<div className="left-column">
					<section className="gallery" id="gallery">
						<div className="container">
							<div className="image-container">
								{data?.data?.length > 0 &&
									data?.data?.map((item) => {
										return <ProductCard key={item?._id} data={item} />;
									})}
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
