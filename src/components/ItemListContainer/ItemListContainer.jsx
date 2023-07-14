import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({}) => {
	const [books, setBooks] = useState([]);
	const { categoryId } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const booksRef = !categoryId
			? collection(db, "books")
			: query(
					collection(db, "books"),
					where("category", "==", categoryId)
			  );
		setLoading(true);
		getDocs(booksRef)
			.then((querySnapshot) => {
				const booksAdapted = querySnapshot.docs.map((book) => {
					const fields = book.data();
					return { id: book.id, ...fields };
				});
				setBooks(booksAdapted);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	return (
		<div>
			{loading ? (
				<h1>Cargando libros...</h1>
			) : (
				<div>
					<ItemList books={books}></ItemList>
				</div>
			)}
		</div>
	);
};

export default ItemListContainer;
{
	/*  */
}
