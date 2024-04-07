import { Link } from 'react-router-dom';
import './FooterMenu.css';
import { FootermenuProps } from './FooterMenu.props';
import { MdLink } from "react-icons/md";

const FooterMenu: React.FC<FootermenuProps> = ()=>{
    return <div className='footer__menu'>
        <h3 className='footer__headline'>Navegación</h3>
        <nav className='footer__nav'>
            <ul className='footer_nav-list'>
                <li>
                    <Link className="footer__link" to={"results"}>
                        <MdLink/>
                        Buscar
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}
export default FooterMenu;