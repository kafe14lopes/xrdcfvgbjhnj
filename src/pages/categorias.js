import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';


export default function Home() {

    return (

        <div>
            <Head>

                <title> Mundo Descrito </title>

            </Head>

            <Navbar />

            <div className={styles.categorias}>
                <h1> Categorias </h1>

                <main>

                    <ul className={styles.lista_categorias}>
                        <li><button type='button'><a href='animais'>Animais</a></button></li>
                       
                    </ul>

                </main>

            </div>

            <Footer />
            
        </div>
    )
}
