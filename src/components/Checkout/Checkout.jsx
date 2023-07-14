import { useCart } from "../../context/cartContext";
import {
	collection,
	query,
	where,
	documentId,
	getDocs,
	writeBatch,
	addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";

const Checkout = () => {
	const { cart, total } = useCart();
	const [loading, setLoading] = useState(false);

	const createOrder = async () => {
		const objOrder = {
			buyer: {
				name: "Juan Torielli",
				phone: "12323232",
				email: "email@email.com",
			},
			item: cart,
			total,
		};

		try {
			const ids = cart.map((book) => book.id);
			const bookRef = query(
				collection(db, "books"),
				where(documentId(), "in", ids)
			);

			const { docs } = await getDocs(bookRef);

			const batch = writeBatch(db);
			const outOfStock = [];

			docs.forEach((doc) => {
				const fieldsDoc = doc.data();
				const stockDb = fieldsDoc.stock;
				const productAddedToCart = cart.find(
					(prod) => prod.id === doc.id
				);
				const prodQuantity = productAddedToCart?.quantity;

				if (stockDb >= prodQuantity) {
					batch.update(doc.ref, { stock: stockDb - prodQuantity });
				} else {
					outOfStock.push({ id: doc.id, ...fieldsDoc });
				}
			});

			if (outOfStock.length === 0) {
				batch.commit();

				const ordersRef = collection(db, "orders");

				const { id } = await addDoc(ordersRef, objOrder);

				<h2>La orden fue generada correctamente, ID: ${id}</h2>;
			}
		} catch (error) {
			<h1>Hubo un error en la generación de la orden</h1>;
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <h1>Se está generando la orden...</h1>;
	}

	return (
		<>
			<h1>Checkout</h1>
			<h2>Formulario</h2>
			<button onClick={createOrder}>Generar orden</button>
		</>
	);
};

export default Checkout;
