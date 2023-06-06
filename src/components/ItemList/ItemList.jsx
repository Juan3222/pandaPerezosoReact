import { Item } from "../Item/Item";

export const ItemList = ({ books }) => {
	{
		console.log(books);
	}
	return (
		<div className="listBooks">
			{books.map((book) => (
				<Item key={book.id} {...book} />
			))}
		</div>
	);
};
