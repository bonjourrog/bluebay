import { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = () => {
        setScrolling(window.scrollY > 6);
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav
                style={{
                    top: scrolling ? "1.5em" : "0em",
                    width: scrolling ? "97%" : "100%",
                    borderRadius: scrolling ? "1em" : "0em",
                    height: scrolling ? "4em" : "6em",
                    backgroundColor: scrolling
                        ? "rgba(255, 255, 255, 0.96)"
                        : "rgba(255, 255, 255, 0.901)",
                }}
                className="nav"
            >
                <p
                    style={{ fontSize: scrolling ? "1em" : "" }}
                    className="logo"
                >
                    BLUEBAY
                </p>
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
                    <li
                        style={{
                            fontWeight: scroll > 490 ? "700" : "400",
                            letterSpacing: scroll > 490 ? ".1em" : "0em",
                            borderBottom:
                                scroll > 490
                                    ? ".2em solid rgb(72, 95, 200)"
                                    : ".2em solid transparent",
                        }}
                    >
                        Fleet
                    </li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>carwash</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
