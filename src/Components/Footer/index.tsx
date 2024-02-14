import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="Footer">
            <p className="Footer__logo">BLUEBAY</p>
            <p className="Footer__message">Siguenos en redes sociales</p>
            <div className="Footer__socials">
                <a href="#">
                    <FaFacebook className="business__social-icon" />
                </a>
                <a href="#">
                    <RiInstagramFill className="business__social-icon" />
                </a>
                <a href="#">
                    <IoLogoWhatsapp className="business__social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
