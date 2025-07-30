import styles from './Hero.module.css';

function Hero({ children}){
    return(
        <div ClassName={styles.title}>
                {children}
        </div>
    )
}
export default Hero;