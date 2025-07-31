import styles from './Favoritos.module.css';
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import videos from "../../json/db.json";
import Card from "../../components/Card";
import Container from "../../components/Container";
import {useFavoriteContext} from "../../Context/Favoritos";

function Favoritos(){
    const { favorito } = useFavoriteContext();
    return(
        <>
            <Banner img={'favorito'} />
            <Container>
                <Hero>
                    <h1>
                        Meus Favoritos
                    </h1>
                </Hero>
                <section className={styles.container}>
                    {favorito.map((fav) => {
                        return <Card {...fav} key={fav.id} />
                    })}
                </section>
            </Container>
        </>
    )
}

export default Favoritos;
