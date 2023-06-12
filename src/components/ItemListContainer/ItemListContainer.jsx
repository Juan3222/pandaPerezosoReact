import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooks, getBooksByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({}) => {
	const [books, setBooks] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const asyncFunction = categoryId ? getBooksByCategory : getBooks;

		asyncFunction(categoryId)
			.then((res) => {
				setBooks(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [categoryId]);

	return (
		<div>
			<ItemList books={books}></ItemList>
		</div>
	);
};

export default ItemListContainer;
