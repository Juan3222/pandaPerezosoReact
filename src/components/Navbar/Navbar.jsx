import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
	return (
		<>
			<header className="header">
				<h1>Librería PandaPerezoso</h1>
				{/* <img src="src\assets\pandaIcon.png" alt="" /> */}

				<nav>
					<ul className="header_ul">
						<li>
							<button href="">Inicio</button>
						</li>
						<li>
							<button href="">Libros</button>
						</li>
						<li>
							<button href="">Comics</button>
						</li>
					</ul>
					<CartWidget />
				</nav>
			</header>
		</>
	);
}
export default Navbar;
