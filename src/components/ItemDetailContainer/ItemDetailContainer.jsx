import { getBookById } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [books, setbooks] = useState(null);
	const { bookId } = useParams();

	useEffect(() => {
		getBookById(bookId)
			.then((res) => {
				setbooks(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [bookId]);
	return (
		<div className="itemDetailContainer">
			<ItemDetail {...books} />
		</div>
	);
};

export default ItemDetailContainer;
