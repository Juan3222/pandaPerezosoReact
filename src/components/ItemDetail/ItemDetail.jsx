import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({
	id,
	title,
	author,
	price,
	cover,
	genre,
	stock,
	category,
}) => {
	const [quantityAdded, setQuantityAdded] = useState(0);

	const { addBook } = useContext(CartContext);

	const handleOnAdd = (quantity) => {
		setQuantityAdded(quantity);

		const item = {
			id,
			title,
			price,
			author,
			cover,
		};

		addBook(item, quantity);
	};
	return (
		<article className="cardBook">
			<picture>
				<img src={cover} alt={title} className="bookCover" />
			</picture>
			<header className="cardHeader">
				<h2 className="bookTitle">{title}</h2>
				<h4 className="bookAuthor">{author}</h4>
			</header>

			<section>
				<p className="bookInfo" id="bookPrice">
					Precio: ${price}
				</p>
				<p className="bookInfo" id="bookGenre">
					Género: {genre}
				</p>
				<p className="bookInfo" id="bookStock">
					Stock: {stock}
				</p>
				<p className="bookInfo">Categoría: {category}</p>
			</section>
			<footer className="bookFooter">
				{quantityAdded > 0 ? (
					<Link to="/cart" className="Option">
						Terminar compra
					</Link>
				) : (
					<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
				)}
			</footer>
		</article>
	);
};
export default ItemDetail;
