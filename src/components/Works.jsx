import React from "react";
import WALLET_IMG from "../assets/image/wallet.png";

const Works = () => {
	return (
		<section className="works">
			<div className="box-container">
				<div className="box1">
					<h1>
						<u>How it works?</u>
					</h1>
					<p>
						Building a platform for investment in the fine arts for buying &amp;
						selling fractionalise ownership as NFT representing an investment in
						iconic blue-chip artworks of the world-famous Artists.
					</p>
				</div>
				<div className="box">
					<img src={WALLET_IMG} alt />
					<h1>Selection</h1>
					<p>
						But I must explain to you how all this mistaken idea of denouncing
						pleasure and praising pain was born and great explorer of the truth,
						the master-builder of human happiness
					</p>
				</div>
				<div className="box">
					<img src={WALLET_IMG} alt />
					<h1>Acquisition</h1>
					<p>
						But I must explain to you how all this mistaken idea of denouncing
						pleasure and praising pain was born and omnis voluptas assumenda est
					</p>
				</div>
				<div className="box">
					<img src={WALLET_IMG} alt />
					<h1>Fractionalisation</h1>
					<p>
						But I must explain to you how all this mistaken idea of denouncing
						pleasure and praising pain was born and trouble that are bound to
						ensue; and equal blame belongs pain and trouble that are bound
					</p>
				</div>
			</div>
		</section>
	);
};

export default Works;
