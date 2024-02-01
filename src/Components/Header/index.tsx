import { useRef, useState } from "react";
import "./Header.css";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <header className="header">
            <nav className="nav">
                <span className="logo">BLUEBAY</span>
                <span
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="menu"
                >
                    <img src="https://img.icons8.com/ios-filled/30/FFFFFF/menu--v6.png" />
                </span>
                <ul
                    className={`nav__list ${
                        toggleMenu ? "menu__opened" : "menu__closed"
                    }`}
                >
                    <li>About</li>
                    <li>Location</li>
                    <li>Contact</li>
                    <li>carwash</li>
                    <li>cars</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
