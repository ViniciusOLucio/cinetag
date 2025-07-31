import { useFavoriteContext } from "../../Context/Favoritos";
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

function Card({ id, title, thumb }) {
    const { favorito, adicionarFavorito } = useFavoriteContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.card}
             onClick={() => {
                 adicionarFavorito({ id, title, thumb });
             }}>
            <img
                src={thumb}
                alt={title}
                className={styles.capa}
            />
            <h2>{title}</h2>
            <img
                src={icone}
                alt="favoritar"
                className={styles.favoritar}

            />
        </div>
    );
}

export default Card;
