import { Link } from "react-router-dom";

export const Item = ({ id, title, author, price, cover, genre, stock }) => {
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
			</section>
			<footer className="bookFooter">
				<Link to={`/book/${id}`} className="Option">
					Detalles
				</Link>
			</footer>
		</article>
	);
};
