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
