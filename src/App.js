import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/product.css";
import "./assets/css/shop.css";
import "./assets/css/style.css";
import "./App.css";

import Header from "./components/Header";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import AddNft from "./pages/AddNft";
import ProfileOwner from "./pages/ProfileOwner";
import EditProfileAdmin from "./pages/EditProfileAdmin";
import SellNft from "./pages/SellNft";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/add-nft" element={<AddNft />} />
					<Route path="/profile" element={<ProfileOwner />} />
					<Route path="/sell" element={<SellNft />} />

					<Route path="/product/:id" element={<Product />} />
					<Route path="/profile-admin/:id" element={<EditProfileAdmin />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
