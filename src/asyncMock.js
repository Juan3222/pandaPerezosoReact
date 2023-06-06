const books = [
	{
		id: "0",
		title: "Harry Potter y la Orden del Fenix",
		author: "J.K Rowling",
		price: "1300",
		cover: "https://m.media-amazon.com/images/I/81-XD0DJiKL.jpg",
		genre: "Fantasía",
		stock: "10",
	},
	{
		id: "1",
		title: "Juego de Tronos",
		author: "George R.R Martin",
		price: "800",
		cover: "https://www.penguinlibros.com/uy/2385579/juego-de-tronos-cancion-de-hielo-y-fuego-1.jpg",
		genre: "Fantasía",
		stock: "10",
	},
	{
		id: "2",
		title: "Dune",
		author: "Frank Herbert",
		price: "450",
		cover: "https://1.bp.blogspot.com/-ZyR9QhRn2MY/XvxFKYjBAFI/AAAAAAAAZPs/WIcAZt8Mkn0YriEGLXWgsRBWOCXlz7ykQCNcBGAsYHQ/s1600/dune.jpg",
		genre: "Ciencia Ficción",
		stock: "10",
	},
	{
		id: "3",
		title: "Un mundo sin fin",
		author: "Ken Follet",
		price: "1190",
		cover: "https://fajabooks.com/wp-content/uploads/2020/11/un.mundo_.sin_.fin_.jpg",
		genre: "Novela Histórica",
		stock: "10",
	},
];

export const getBooks = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(books);
		}, 500);
	});
};
