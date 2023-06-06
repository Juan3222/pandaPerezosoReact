// import { useState, useEffect } from "react";

// const ItemList = ({ books }) => {
// 	{
// 		console.log(books);
// 		// let bookImg = books.volumeInfo.imageLinks;
// 		// console.log(bookImg);
// 	}
// 	return (
// 		<div>
// 			{books.map((book) => (
// 				<div key={book.id} style={{ marginLeft: "20px" }}>
// 					<h3>{book.volumeInfo.title}</h3>
// 					<img></img>
// 					{console.log(book)}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// const Libros = () => {
// 	const [books, setbooks] = useState([]);
// 	const [input, setInput] = useState("randomize");

// 	useEffect(() => {
// 		fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((res) => {
// 				setbooks(res.items);
// 			});
// 	}, [input]);
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				value={input}
// 				onChange={(e) => {
// 					setInput(e.target.value);
// 				}}
// 			/>

// 		</div>
// 	);
// };

// export default Libros;
