import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styles from '../styles/Pages.module.css';

export default function Home() {
  return (
      <div>

          <Head>

           <title> Mundo Descrito </title>

          </Head>

          <Navbar />

              <div className={styles.home}>

                <div>
                    <h1>Mundo Descrito</h1>
                </div>

                <main>

                    <h2> Bem Vindo ao Mundo Descrito</h2>

                </main>

              </div>
          <Footer />
      </div>
  )
}