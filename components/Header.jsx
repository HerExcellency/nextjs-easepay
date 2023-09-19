import styles from '../styles/header.module.css'
import Head from 'next/head';
import Image from 'next/image'
import logo from '../public/logo.png'

const Header = () => {
    return (
            <Head>
                <div className={styles.navbar}>
                    <div className={styles.leftside}>
                        <Image src={logo} alt="easepay logo" />
                        <nav className={styles.nav}>
                            <ul className={styles.listy}>
                                <li className={styles.linky}><a href='#'>Products</a></li>
                                <li className={styles.linky}><a href='#'>Solutions</a></li>
                                <li className={styles.linky}><a href='#'>Resources</a></li>
                                <li className={styles.linky}><a href='#'>Company</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.rightSide}>
                        <button className={styles.button}>Contact Us</button>
                    </div>
                </div>
            </Head>
    )
}
export default Header;