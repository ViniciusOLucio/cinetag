import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import Card from "../../components/Card";

function Home() {
    return (
        <div>
            <Header/>
            <Banner img="home"/>
            <Hero>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Hero>
            <Card
                id="1"
                title="gato"
                thumb="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png"
            >

            </Card>
            <Footer/>
        </div>
    )
}

export default Home;