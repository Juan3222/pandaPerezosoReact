import React from "react";
import { useContext } from "react";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
	const { totalQuantity } = useCart();
	return (
		<>
			<div>
				<Link to="/cart">d{totalQuantity}</Link>
			</div>
		</>
	);
};

export default CartWidget;
