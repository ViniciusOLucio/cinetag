import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import videos from 'json/db.json';
import styles from './Home.module.css';
import Container from "../../components/Container";

function Home() {
    return (
        <div>

            <Banner img="home"/>
            <Container>
            <Hero>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Hero>
                <section className={styles.container}>
                    {videos.map((video => {
                        return <Card {...video} key={video.id}/>
                    }))}
                </section>
            </Container>
        </div>
    )
}

export default Home;