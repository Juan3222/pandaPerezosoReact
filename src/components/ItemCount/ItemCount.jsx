import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const incrementar = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};
	const decrementar = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	return (
		<>
			<div className="count">
				<div className="count__buttons">
					<button className="button" onClick={incrementar}>
						+
					</button>
					<p>{count}</p>
					<button className="button" onClick={decrementar}>
						-
					</button>
				</div>
				<button
					className="count__agregar"
					onClick={() => onAdd(count)}
					disabled={!stock}
				>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};
export default ItemCount;
