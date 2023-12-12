import React from 'react';
import styles from '../styles/Pages.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Animais({ animais }) {
    return (
        <div>

            <Head>

                <title> Mundo Descrito </title>

            </Head>

            <Navbar />

            <div className={styles.categorias}>
            <h1> Animais </h1>
            {animais.map((animais, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`} class="blau">
                    <div key={animais.id}> <p> {animais.nome} </p> </div>
                </Link>
            ))}
            </div>

            <Footer />
            
        </div>
    )
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animais')
    const repo = await res.json()
    const animais = await repo;
    return {
        props: { animais }
    }
})


export default Animais;