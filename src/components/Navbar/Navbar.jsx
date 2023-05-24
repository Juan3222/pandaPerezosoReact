import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
	return (
		<>
			<header className="header">
				<div className="header__iconh1">
					<img src="src\assets\pandaIcon.png" alt="" />
					<h1>Librería PandaPerezoso</h1>
				</div>
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
				</nav>
				<CartWidget />
			</header>
		</>
	);
}
export default Navbar;
