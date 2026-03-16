import { useState } from "react";
import "./header.scss";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
   
    return(
        <header className="header">
            <div className="logo">
                <i className="fa-solid fa-hexagon"></i>
                <div className="logo_text">
                    <strong>Topaz Farm</strong>
                    <span>TRADIÇÃO ARTESANAL</span>
                </div>
            </div>

            <div className="menu_button" onClick={() => setMenuOpen(!menuOpen) }>
                <i className="fa-solid fa-bars"></i>
            </div>

            <nav className={`nav_bar ${menuOpen ? 'active' : ''}`}>
                <ul className="nav_list">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">História</a></li>
                    <li><a href="#">Pedidos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

                <button className="header_order">Fazer Pedido</button>
            </nav>
        </header>
    )
}

export default Header;