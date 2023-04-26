import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

const Navbar = () => {
	const [roleStatus, setRoleStatus] = useState(0);
	const [isShow, setIsShow] = useState(false);

	console.log(isShow);
	return (
		<>
			<header className="header">
				<input type="checkbox" name id="chk1" />
				<Link className="logo" to="/">
					Fracto
				</Link>
				<div className="search-box">
					<form action>
						<input type="text" name="search" id="srch" placeholder="SEARCH" />
						<button type="submit">
							<i className="fa fa-arrow-right" />
						</button>
					</form>
				</div>
				<ul>
					{/* <li>
					<a href="product.html">DISCOVER</a>
				</li> */}
					<li>
						<Link to="/shop">SHOP</Link>
					</li>

					{roleStatus === 1 ? (
						<>
							<div>
								<li>
									<button onClick={() => setIsShow(true)}>
										<i class="fa-solid fa-wallet text-2xl"></i>
									</button>
								</li>
							</div>
							<Link to="/profile">
								<li className="ml-8 text-2xl">
									<button>
										<i class="fa-solid fa-user"></i>
									</button>
								</li>
							</Link>
						</>
					) : (
						<li onClick={() => setRoleStatus(1)}>
							<button>Connect</button>
						</li>
					)}
				</ul>
				<div className="menu">
					<label htmlFor="chk1">
						<i className="fa fa-bars" />
					</label>
				</div>
				<div className="icons">
					<div className="fas" id="menu-btn" />
					<div className="fas" id="search-btn" />
					<div className="fas" id="cart-btn" />
					<div className="fas" id="login-btn" />
				</div>
			</header>
			<Modal show={isShow} onClose={() => setIsShow(false)}>
				<div className="flex items-center p-8 justify-center flex-col">
					<p className="text-2xl">Wallet Balance</p> <br />
					<h2 className="text-3xl font-bold">30 ETH</h2>
				</div>
			</Modal>
		</>
	);
};

export default Navbar;
