import React from "react";
import TREND_1 from "../assets/image/t1.png";
import TREND_2 from "../assets/image/t2.png";
import TREND_3 from "../assets/image/t3.png";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

const Trending = () => {
	return (
		<section className="review" id="review">
			<h1 className="heading">Trending ARTs</h1>
			<div className="swiper review-slider">
				<div className="swiper-wrapper">
					<Splide
						hasTrack={false}
						options={{
							rewind: true,
							width: "100%",
							type: "slide",
							padding: "5rem",
							gap: "1rem",
							perPage: 3,
							arrows: true,
						}}
					>
						<SplideTrack>
							<SplideSlide>
								<div className="swiper-slide box">
									<img src={TREND_1} alt />
									<p>#1 Trending</p>
									<h3>Herwitz</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui
										ratione voluptatem sequi nesciunt.
									</p>
								</div>
							</SplideSlide>
							<SplideSlide>
								<div className="swiper-slide box">
									<img src={TREND_2} alt />
									<p>#2 Trending</p>
									<h3>Gouse</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui
										ratione voluptatem sequi nesciunt.
									</p>
								</div>
							</SplideSlide>
							<SplideSlide>
								<div className="swiper-slide box">
									<img src={TREND_3} alt />
									<p>#3 Trending</p>
									<h3>Stanton</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui
										ratione voluptatem sequi nesciunt.
									</p>
								</div>
							</SplideSlide>
						</SplideTrack>
					</Splide>
				</div>
			</div>
		</section>
	);
};

export default Trending;
