import React, { useEffect } from "react";
import TREND_1 from "../assets/image/t1.png";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import { useListCategoryQuery } from "../services/apis";

import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const TrendingCollection = () => {
	const { data: listCat, refetch: listLoad } = useListCategoryQuery();

	useEffect(() => {
		listLoad();
	}, []);
	return (
		<section className="review" id="review">
			<h1 className="heading">Trending Collections</h1>
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
							{listCat?.data?.length > 0 &&
								listCat?.data?.map((item) => {
									return (
										<SplideSlide>
											<div
												className="swiper-slide box"
												style={{ backgroundColor: "white" }}
											>
												<img
													src={`http://localhost:4000/public/collectionImage/${item?.image}`}
													alt
												/>
												<Link to={`/collection/${item?._id}`}>
													<h3
														style={{
															textAlign: "center",
															color: "black",
															padding: "1em .5em",
														}}
													>
														{item?.name}
													</h3>
												</Link>
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

export default TrendingCollection;
