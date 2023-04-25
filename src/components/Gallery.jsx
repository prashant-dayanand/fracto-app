import React from "react";
import IMG_1 from "../assets/image/1.png";
import IMG_2 from "../assets/image/2.png";
import IMG_3 from "../assets/image/3.png";
import IMG_4 from "../assets/image/4.png";
import IMG_5 from "../assets/image/5.png";
import IMG_6 from "../assets/image/6.png";

const Gallery = () => {
	return (
		<section className="gallery" id="gallery">
			<h1 className="heading">Our Gallery</h1>
			<div className="container">
				<div className="image-container">
					<img src={IMG_1} alt />
					<img src={IMG_2} alt />
					<img src={IMG_3} alt />
					<img src={IMG_4} alt />
					<img src={IMG_5} alt />
					<img src={IMG_6} alt />
				</div>
				<a href="#" className="btn">
					More
				</a>
			</div>
		</section>
	);
};

export default Gallery;
