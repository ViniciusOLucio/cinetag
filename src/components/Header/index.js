import {Link} from "react-router-dom";
import logo from './Logo-cinetag-branco 1.png';
import styles from './Header.module.css';
import HeaderLink from "../HeaderLink";

function Header() {
    return (
        <header
            className={styles.header}
        >
            <Link to="./">
                <img src={logo} alt="logo"/>
            </Link>

            <nav className={styles.nav}>
                <HeaderLink url={"./"}>
                    Home
                </HeaderLink>

                <HeaderLink url={"./Favoritos"}>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>

    )

}

export default Header;