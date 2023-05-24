import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting={"Holaaa"} />
		</>
	);
}

export default App;
