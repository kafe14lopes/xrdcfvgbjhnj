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

            <div className={styles.sobre}>
                <h1> Sobre Nós</h1>

                <main>

                    <div className={styles.texto_sobre_nos}>
                        <h2>Alunos: Tainá Fernando e Rafael</h2>
                        <h2>Turma: 6B</h2>
                        <h3>Site de descrições</h3>
                    </div>

                </main>

            </div>

            <Footer />
            
        </div>
    )
}
