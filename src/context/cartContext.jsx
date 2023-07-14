import { createContext, useState, useContext } from "react";

export const CartContext = createContext({
	cart: [],
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addBook = (book, quantity) => {
		console.log(book);
		if (!isInCart(book.id)) {
			setCart((prev) => [...prev, { ...book, quantity }]);
		} else {
			console.log("El libro ya fue agregado");
		}
	};
	const removeBook = (bookId) => {
		const cartUpdated = cart.filter((book) => book.id !== bookId);
		setCart(cartUpdated);
	};
	const clearCart = () => {
		setCart([]);
	};
	const isInCart = (bookId) => {
		return cart.some((book) => book.id === bookId);
	};
	const getTotalQuantity = () => {
		let totalQuantity = 0;

		cart.forEach((book) => {
			totalQuantity += book.quantity;
		});

		return totalQuantity;
	};
	const totalQuantity = getTotalQuantity();

	const getTotal = () => {
		let total = 0;

		cart.forEach((prod) => {
			total += prod.quantity * prod.price;
		});

		return total;
	};

	const total = getTotal();

	return (
		<CartContext.Provider
			value={{
				cart,
				addBook,
				removeBook,
				clearCart,
				totalQuantity,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export const useCart = () => {
	return useContext(CartContext);
};
