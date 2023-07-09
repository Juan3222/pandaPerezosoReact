import { useCart } from "../../context/cartContext";

export const CartItem = ({ id, title, autor, cover, price, quantity }) => {
	const { removeBook } = useCart();
	return (
		<div>
			<img src={cover} alt={title} />
			<h1>{title}</h1>
			<h3>{autor}</h3>
			<h4>${price}</h4>
			<h4>Cantidad: {quantity}</h4>
			<h4>Subtotal: ${quantity * price}</h4>
			<button onClick={() => removeBook(id)}>
				<p>X</p>
			</button>
		</div>
	);
};
