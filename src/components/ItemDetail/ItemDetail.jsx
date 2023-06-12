import ItemCount from "../ItemCount/ItemCount";

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
				<ItemCount
					initial={1}
					stock={stock}
					onAdd={(quantity) =>
						console.log("Cantidad agregada" + quantity)
					}
				/>
			</footer>
		</article>
	);
};
export default ItemDetail;
