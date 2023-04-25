import React from "react";
import FRAME_1 from "../assets/image/Frame1.png";
import FRAME_2 from "../assets/image/Frame2.png";
import FRAME_3 from "../assets/image/Frame3.png";

const Collection = () => {
	return (
		<section className="categories" id="categories">
			<h1 className="heading">Top Collection</h1>
			<div className="box-container">
				<div className="box">
					<img src={FRAME_1} alt />
				</div>
				<div className="box">
					<img src={FRAME_2} alt />
				</div>
				<div className="box">
					<img src={FRAME_3} alt />
				</div>
				<div className="box">
					<img src={FRAME_2} alt />
				</div>
				<div className="box">
					<img src={FRAME_3} alt />
				</div>
			</div>
		</section>
	);
};

export default Collection;
