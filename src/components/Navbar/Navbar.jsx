import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<header className="header">
				<h1>Librería PandaPerezoso</h1>

				<nav className="Categories">
					<NavLink
						className={({ isActive }) =>
							isActive ? "ActiveOption" : "Option"
						}
						to={"/"}
					>
						<p>Inicio</p>
					</NavLink>
					<NavLink
						to={"/category/Libro"}
						className={({ isActive }) =>
							isActive ? "ActiveOption" : "Option"
						}
					>
						<p>Libros</p>
					</NavLink>
					<NavLink
						to={"/category/Comic"}
						className={({ isActive }) =>
							isActive ? "ActiveOption" : "Option"
						}
					>
						<p>Comics</p>
					</NavLink>
					<CartWidget />
				</nav>
			</header>
		</>
	);
}
export default Navbar;
