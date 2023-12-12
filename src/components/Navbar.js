import styles from '../styles/Components.module.css';

export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li><a href='/'>Home</a></li>
                <li><a href='/categorias'>Categorias</a></li>
                <li><a href='/sobre'>Sobre Nós</a></li>
            </ul>
        </div>
    )
}