import React from "react";

const Sidebar = () => {
	return (
		<>
			<div className="right-column">
				<select>
					<option>Default sorting</option>
					<option>Select</option>
					<option>Select</option>
					<option>Select</option>
				</select>
				<h2>PRICE FILTER</h2>
				<input
					defaultValue={1000}
					min={1000}
					max={50000}
					step={500}
					type="range"
				/>
				<p>
					Price <span> $400 — $1500</span>
				</p>
				<h1>Product categories</h1>
				<ul>
					<li>Initech</li>
					<li>Massive Dynamic</li>
					<li>Umbrella Corporation</li>
					<li>Stark Industries</li>
					<li>Wonka Industries</li>
					<li>Sterling Cooper</li>
					<li>Acme Corporation</li>
				</ul>
				<h1>Product tags</h1>
				<button>lorem</button>

				<h1>Follow us</h1>
				<a href="#" className="fab fa-facebook-f" />
				<a href="#" className="fab fa-twitter" />
				<a href="#" className="fab fa-instagram" />
				<a href="#" className="fab fa-linkedin" />
			</div>
		</>
	);
};

export default Sidebar;
