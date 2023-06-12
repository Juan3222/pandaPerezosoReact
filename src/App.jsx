import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />}></Route>
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer />}
					></Route>
					<Route
						path="/book/:bookId"
						element={<ItemDetailContainer />}
					></Route>
					<Route
						path="*"
						element={<h1>Error 404 Not Found</h1>}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
