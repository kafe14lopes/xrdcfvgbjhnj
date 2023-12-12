import styles from '../styles/Pages.module.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Profile({ animais }) {
    return (
        <div>

            <Head>

                <title> Mundo Descrito </title>

            </Head>

            <Navbar />

            <div className={styles.categorias}>

                <div>
                    <h1> Animais</h1>
                </div>

                <main>

                    <div className={styles.caixa_animal}>

                        <p>Nome: {animais.nome}</p>
                        <p className={styles.sub_titulo}>Descrição:</p>
                        <p>{animais.descricao}</p>

                    </div>


                </main>

            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animais');
    const repo = await res.json();  
    const animais = repo[context.params.id]; // Ajuste para acessar corretamente os dados
    return {
        props: { animais }
    };
};


export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb');
    const repo = await res.json();
    const Animais = repo;
    const paths = Animais.map((animais, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}


export default Profile;
