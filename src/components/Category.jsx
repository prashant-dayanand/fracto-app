import React from "react";
import BG1 from "../assets/image/b1.png";
import BG2 from "../assets/image/b2.png";

import BG3 from "../assets/image/b3.png";

import BG4 from "../assets/image/b4.png";

const Category = () => {
	return (
		<section className="blogs" id="blogs">
			<h1 className="heading2"> Browse by Category </h1>
			<div className="box-container">
				<div className="box">
					<img src={BG1} alt />
					<div className="content">
						<h3>ART 1</h3>
					</div>
				</div>
				<div className="box">
					<img src={BG2} alt />
					<div className="content">
						<h3>ART 2</h3>
					</div>
				</div>
				<div className="box">
					<img src={BG3} alt />
					<div className="content">
						<h3>ART 3</h3>
					</div>
				</div>
				<div className="box">
					<img src={BG4} alt />
					<div className="content">
						<h3>ART 4</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Category;
