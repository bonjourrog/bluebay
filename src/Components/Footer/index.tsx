import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FooterProps } from "./Footer.props";

const Footer:React.FC<FooterProps> = ({DarkBg}) => {
    return (
        <footer className="Footer" style={{backgroundColor:DarkBg?'var(--app-gray)':'white'}}>
            <p className="Footer__logo">BLUEBAY</p>
            <p className="Footer__message" style={{color:DarkBg?'white':'var(--app-gray)'}}>Siguenos en redes sociales</p>
            <div className="Footer__socials">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=61555585719547">
                    <FaFacebook className="business__social-icon" />
                </a>
                <a target="_blank" href="https://www.instagram.com/bluebaycarrentalpco/">
                    <RiInstagramFill className="business__social-icon" />
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=526383805280&text=Hola, quisiera más información sobre los autos de renta.">
                    <IoLogoWhatsapp className="business__social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
