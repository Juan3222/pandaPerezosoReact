import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer />
			<ItemCount
				initial={1}
				stock={10}
				onAdd={(count) => console.log("Cantidad agregada", count)}
			/>
		</>
	);
}

export default App;
