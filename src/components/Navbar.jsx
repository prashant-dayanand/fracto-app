import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginState } from "../services/slices/constants";

const Navbar = () => {
	const navigate = useNavigate();

	const loginState = useSelector((state) => state?.constants?.loginState);
	const [roleStatus, setRoleStatus] = useState(0);
	const [isShow, setIsShow] = useState(false);
	const dispatch = useDispatch();

	console.log(loginState, "loginState");

	const [show, setShow] = useState(false);
	const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
	const [connectState, setConnectState] = useState(1);
	const [isMetamaskConnected, setIsMetamaskConnected] = useState(true);
	const [address, setAddress] = useState("");
	const [walletBalance, setWalletBalance] = useState();

	const getbalance = async (walletAdress) => {
		await window.ethereum
			.request({
				method: "eth_getBalance",
				params: [walletAdress, "latest"],
			})
			.then((balance) => {
				setWalletBalance(ethers.utils.formatEther(balance));
			});
	};

	const accountChangehandleUserConnect = async (account) => {
		setAddress(account);
		getbalance(account);
		navigate("/");
	};

	// useEffect(() => {
	// 	dispatch(setLoginState(0));
	// }, []);

	useEffect(() => {
		const handleAccountsChanged = (accounts) => {
			if (accounts.length === 0) {
				dispatch(setLoginState(0));
			}
		};

		const provider = window.ethereum;
		if (provider) {
			provider.on("accountsChanged", handleAccountsChanged);
		}

		return () => {
			if (provider) {
				provider.removeListener("accountsChanged", handleAccountsChanged);
			}
		};
	}, []);

	const connectToWallet = async () => {
		if (window.ethereum && window.ethereum !== "undefined") {
			setShowMetaMaskModal(false);
			setIsMetamaskConnected(false);
			setLoginState(false);
			window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
				if (res[0]) {
					accountChangehandleUserConnect(res[0]);
					dispatch(setLoginState(1));
					navigate("/");
				} else {
					alert("Please connect to metamask or restart your browser.");
				}
			});
		} else {
			setShowMetaMaskModal(true);
		}
	};

	console.log(walletBalance, "walletBalance");

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

					{loginState === 1 ? (
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
						<li onClick={connectToWallet}>
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
