import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
	const [books, setbooks] = useState(null);
	const { bookId } = useParams();

	useEffect(() => {
		const bookRef = doc(db, "books", bookId);
		getDoc(bookRef).then((querySnapshot) => {
			const fields = querySnapshot.data();
			const bookAdapted = { id: querySnapshot, ...fields };

			setbooks(bookAdapted);
		});
	}, [bookId]);
	return (
		<div className="itemDetailContainer">
			<ItemDetail {...books} />
		</div>
	);
};

export default ItemDetailContainer;
