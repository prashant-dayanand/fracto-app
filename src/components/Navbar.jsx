import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
	setLoginState,
	setProfileData,
	setWalletInfo,
} from "../services/slices/constants";
import { useConnectMutation, useDisconnectMutation } from "../services/apis";
import WalletIcon from "../assets/image/plolygon.png";
import Logo from "../assets/image/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const profileData = useSelector((state) => state.constants.profileData);

	const [connect, { data }] = useConnectMutation();
	const { disconnect } = useDisconnectMutation();

	const loginState = useSelector((state) => state?.constants?.loginState);
	const walletInfo = useSelector((state) => state?.constants?.walletInfo);
	const [roleStatus, setRoleStatus] = useState(0);
	const [isShow, setIsShow] = useState(false);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
	const [connectState, setConnectState] = useState(1);
	const [isMetamaskConnected, setIsMetamaskConnected] = useState(true);
	const [address, setAddress] = useState("");
	const [walletBalance, setWalletBalance] = useState(0);

	console.log("address", data);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const getbalance = async (walletAdress) => {
		await window.ethereum
			.request({
				method: "eth_getBalance",
				params: [walletAdress, "latest"],
			})
			.then((balance) => {
				setWalletBalance(ethers.utils.formatEther(balance));
				dispatch(
					setWalletInfo({
						address: walletAdress,
						balance: ethers.utils.formatEther(balance),
					})
				);
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
				// disconnect();
				navigate("/");
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

	useEffect(() => {
		if (data?.success) {
			dispatch(setProfileData(data));
		}
		if (data?.success && data?.data?.role === "user") {
			localStorage.setItem("token", data?.accessToken);
			navigate("/profile");
		}

		if (data?.success && data?.data?.role === "admin") {
			localStorage.setItem("token", data?.accessToken);

			navigate("/admin");
		}
	}, [data]);

	const connectToWallet = async () => {
		if (window.ethereum && window.ethereum !== "undefined") {
			setShowMetaMaskModal(false);
			setIsMetamaskConnected(false);
			setLoginState(false);
			window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
				if (res[0]) {
					accountChangehandleUserConnect(res[0]);
					setAddress(res[0]);
					dispatch(setLoginState(1));

					console.log("address");
					connect({
						wallet_address: res[0],
					});

					console.log("TOKKKKK", data);
				} else {
					alert("Please connect to metamask or restart your browser.");
				}
			});
		} else {
			setShowMetaMaskModal(true);
		}
	};

	return (
		<>
			<header className="header">
				<input type="checkbox" name id="chk1" />
				<Link className="logo" to="/">
					<img src={Logo} alt="" style={{ width: "130px" }} />
				</Link>
				<div className="search-box">
					<form action>
						<input
							type="text"
							name="search"
							id="srch"
							placeholder="Search NFTs"
						/>
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
							<Link
								to={profileData?.data?.role === "admin" ? "/admin" : "/profile"}
							>
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
					<div className="pb-20 text-center">
						<span className="text-4xl font-bold">Set Display Name</span>
						<div className="mt-6 text-gray-700 text-2xl">
							<span>{walletInfo?.address}</span>
						</div>
					</div>
					<div className="text-center border-solid border-2 border-gray-300 py-8 px-28">
						<p className="text-2xl">Wallet Balance</p> <br />
						<img src={WalletIcon} alt="" className="w-16 mx-auto mb-4" />
						<h2 className="text-5xl font-bold">
							{(Math.round(walletInfo?.balance * 100) / 100).toFixed(2)} MATIC
						</h2>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Navbar;
