import React, { useEffect, useState } from "react";
import "./Header.css";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { Link as NavigateTo } from "react-router-dom";
import { HeaderProps } from "./Header.props";

const Header:React.FC<HeaderProps> = ({showNavbar}) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [_,setScroll] = useState<number>(0);

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
                    height: scrolling ? "4em" : "6em",
                    backgroundColor: scrolling
                        ? "rgba(255, 255, 255, 0.96)"
                        : "rgba(255, 255, 255, 0.901)",
                }}
                className="nav"
            >
                <NavigateTo to={"/"}
                    style={{ fontSize: scrolling ? "1em" : "" , margin:showNavbar?"0":"0 auto"}}
                    className="logo"
                >
                    BLUEBAY
                </NavigateTo>
                {showNavbar?(
                    <>
                        <span
                            onClick={() => setToggleMenu(!toggleMenu)}
                            className="menu"
                        >
                            <RiMenu4Fill style={{color: toggleMenu ? 'white' : '#09225D', fontSize:"2em"}}/>
                        </span>
                    
                        <ul
                            className={`nav__list ${
                                toggleMenu ? "menu__opened" : "menu__closed"
                            }`}
                        >
                            <li>
                                <Link onClick={()=>setToggleMenu(false)} className="unactive-link" to="fleet" smooth={true} activeClass="active-link" spy={true}>Flota</Link>
                                
                            </li>
                            <li>
                                <Link onClick={()=>setToggleMenu(false)} className="unactive-link" to="why-us" smooth={true} activeClass="active-link" spy={true}>Elígenos</Link>
                            </li>
                            <li>
                                <Link onClick={()=>setToggleMenu(false)} className="unactive-link" to="services" smooth={true} activeClass="active-link" spy={true}>Servicios</Link>
                            </li>
                            <li>
                                <Link onClick={()=>setToggleMenu(false)} className="unactive-link" to="contact" smooth={true} activeClass="active-link" spy={true}>Contacto</Link>
                            </li>
                        </ul>   
                    </>
                    )
                    :
                    undefined
                }
            </nav>
        </header>
    );
};

export default Header;
