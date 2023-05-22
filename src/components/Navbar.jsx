import "./Navbar.css";

function Navbar() {
	return (
		<>
			<header className="header">
				<h1>Librería PandaPerezoso</h1>
				<nav>
					<ul className="header_ul">
						<li>
							<a href="">Inicio</a>
						</li>
						<li>
							<a href="">Libros</a>
						</li>
						<li>
							<a href="">Comics</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
export default Navbar;
