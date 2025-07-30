import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
function Card({ id, title, thumb}){
    return(
        <div className={styles.card}>
            <img
                src={thumb}
                alt={title}
                className={styles.capa}
            />
            <h2>
                {title}
            </h2>
            <img
                src={iconeFavoritar}
                alt="favoritar"
                className={styles.favoritar}
            />
        </div>
    )
}
export default Card;