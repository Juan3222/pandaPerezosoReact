import { useEffect, useState } from "react";
import { getBooks } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({}) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks()
			.then((res) => {
				setBooks(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<ItemList books={books}></ItemList>
		</div>
	);
};

export default ItemListContainer;
