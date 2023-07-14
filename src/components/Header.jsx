import React, { useState } from "react";
import { ethers } from "ethers";

import HEAD_IMG from "../assets/image/image15.png";
import HOME_BACK from "../assets/image/bg2.png";

import CHART_IMG from "../assets/image/chart.PNG";
import Collection from "./Collection";
import Trending from "./Trending";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Category from "./Category";
import Footer from "./Footer";
import TrendingCollection from "./TrendingCollection";

const Header = () => {
	return (
		<>
			<Navbar />
			<div>
				<section
					className="home"
					id="home"
					style={{ backgroundImage: `url(${HOME_BACK})` }}
				>
					<div className="content">
						<h3>Discover, Collect, and Invest in the Bluechip Fine Arts.</h3>
						<pre>
							-----{"      "}New era of Investing in Fine Arts enabled by {"\n"}
							{"          "}Blockchain and NFTs.
						</pre>
						<a href="#" className="btn">
							Discover
						</a>
					</div>
				</section>
				{/* <section className="video" id="products">
					<div className="video-slider">
						<div className="swiper-wrapper">
							<div className="swiper-slide box">
								<img src={HEAD_IMG} alt />
							</div>
						</div>
					</div>
				</section> */}
				{/* <Gallery /> */}
				{/* <Collection /> */}
				<TrendingCollection />
				<Trending />
				{/* <Category /> */}
				{/* <section className="chart">
					<img src={CHART_IMG} alt />
				</section> */}
				{/* <section className="doller">
					<div className="box-container">
						<div className="box">
							<h1>$64.1B</h1>
							<p>Global sales for arts accounted in 2019</p>
						</div>
						<div className="box">
							<h1>$1.7 T</h1>
							<p>Global sales for arts accounted in 2019</p>
						</div>
						<div className="box">
							<h1>86%</h1>
							<p>Wealth managers surveyed recommend investing in Art</p>
						</div>
					</div>
				</section> */}
				<Footer />
			</div>
		</>
	);
};

export default Header;
