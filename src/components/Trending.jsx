import React from "react";
import TREND_1 from "../assets/image/t1.png";
import TREND_2 from "../assets/image/t2.png";
import TREND_3 from "../assets/image/t3.png";

import { useMarketplaceQuery } from "../services/apis";
import { useEffect } from "react";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

const Trending = () => {
	const { data, refetch } = useMarketplaceQuery();

	useEffect(() => {
		refetch();
	}, []);
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
							{data?.data?.length > 0 &&
								data?.data?.map((item, index) => {
									return (
										<SplideSlide>
											<div className="bg-white p-6 rounded-xl">
												<div className="swiper-slide box">
													<img
														src={`http://localhost:4000/public/nftImage/${item?.nft_media[0]}`}
														alt
														className="rounded-xl"
													/>
													<p style={{ color: "#444", fontSize: "14px" }}>
														#{index + 1} Trending
													</p>
													<h3 style={{ color: "#000" }}>{item?.nft_name}</h3>
													<p style={{ color: "#444", fontSize: "12px" }}>
														{item?.description}
													</p>
												</div>
											</div>
										</SplideSlide>
									);
								})}
						</SplideTrack>
					</Splide>
				</div>
			</div>
		</section>
	);
};

export default Trending;
