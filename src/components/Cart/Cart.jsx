import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
	const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

	if (totalQuantity === 0) {
		return (
			<div>
				<h1>No hay libros en el carrito</h1>
				<Link to="/" className="Option">
					Productos
				</Link>
			</div>
		);
	}
	return (
		<div className="cartBookContainer">
			{cart.map((p) => (
				<CartItem key={p.id} {...p} />
			))}
			<h3 className="total">Total: ${total}</h3>
			<button onClick={() => clearCart()} className="Button">
				Limpiar carrito
			</button>
			<Link to="/checkout" className="Option">
				Comprar
			</Link>
		</div>
	);
};
