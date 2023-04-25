import React from "react";

const Footer = () => {
	return (
		<section className="footer">
			<div className="box">
				<input
					type="email"
					placeholder="your email address"
					className="email"
				/>
				<input type="submit" defaultValue="Submit" className="btn" />
			</div>
			<div className="box-container">
				<div className="box">
					<h3>Stay in the loop</h3>
					<p>
						Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit, sed quia non numquam eius modi tempora
						incidunt ut labore et dolore magnam aliquam quaerat voluptatem
					</p>
					<div className="share">
						{/* <a href="#" class="fab fa-facebook-f"></a>
      <a href="#" class="fab fa-twitter"></a>
      <a href="#" class="fab fa-instagram"></a>
      <a href="#" class="fab fa-linkedin"></a> */}
						<h3>LOGO</h3>
						<p>
							The world’s first and largest digital marketplace for crypto
							collectibles and non-fungible tokens (NFTs). Buy, sell, and
							discover exclusive digital assets. Ut enim ad minima veniam, quis
							nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
							aliquid ex ea commodi consequatur
						</p>
					</div>
				</div>
				<div className="box">
					<h2>Marketplace</h2>
					<a href="#" className="links">
						All NTFs
					</a>
					<a href="#" className="links">
						New
					</a>
					<a href="#" className="links">
						Music
					</a>
					<a href="#" className="links">
						Art
					</a>
					<a href="#" className="links">
						Visual world’s
					</a>
					<a href="#" className="links">
						Sports
					</a>
				</div>
				<div className="box">
					<h2>My Account</h2>
					<a href="#" className="links">
						Profile
					</a>
					<a href="#" className="links">
						Favorites
					</a>
					<a href="#" className="links">
						My Collection
					</a>
					<a href="#" className="links">
						categories{" "}
					</a>
					<a href="#" className="links">
						Setting
					</a>
				</div>
				<div className="box">
					<h2>Join Community</h2>
					<a href="#" className="links">
						Twitter
					</a>
					<a href="#" className="links">
						Instagram
					</a>
					<a href="#" className="links">
						Discord
					</a>
					<a href="#" className="links">
						Reddits
					</a>
				</div>
			</div>
			<div className="credit"> Privacy policy Term of Service</div>
		</section>
	);
};

export default Footer;
