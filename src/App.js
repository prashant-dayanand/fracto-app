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
import EditCollection from "./pages/EditCollection";
import SellNft from "./pages/SellNft";
import UserProfile from "./pages/UserProfile";
import AddCategory from "./pages/AddCategory";
import ViewCollection from "./pages/ViewCollection";

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
					<Route path="/edit-profile/:id" element={<EditProfileAdmin />} />
					<Route path="/edit-collection/:id" element={<EditCollection />} />

					<Route path="/admin" element={<UserProfile />} />
					<Route path="/add-category" element={<AddCategory />} />
					<Route path="/collection/:id" element={<ViewCollection />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
