import style from './Footer.module.css';
import HeaderLink from "../HeaderLink";

function Footer() {
    return (
        <footer>
            <div className={style.footer}>
                <div className={style.footer_block}>
                    <p>
                        Site para devs
                    </p>
                </div>
                <div className={style.footer_block}>
                    <p>
                        Navegação
                    </p>
                    <ul>
                        <li>
                            <HeaderLink url={"./Favoritos"}>
                                Favoritos
                            </HeaderLink>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={`${style.footer_bottom} ${style.footer_block}`}>

                <p>
                    site criado por vinecius
                </p>
            </div>
        </footer>
    )
}

export default Footer;