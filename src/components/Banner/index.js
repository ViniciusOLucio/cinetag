import styles from './Banner.module.css';

function Banner({img}){
    return(
        <div
            className={styles.capa}
             style={{ backgroundImage: `url('/img/banner-${img}.png')`}}
        >
        </div>
    )
}
export default Banner;