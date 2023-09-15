import { FaLinkedin, FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <Link to="https:www.linkedin.com/in/joaopedrocaldeira/">
                <FaLinkedin />
            </Link>
            <Link to="https://github.com/joaopcaldeira">
                <FaGithub />
            </Link>
        </ul>
        <p className={styles.copy_right}>Email: joaopccaldeira1999@gmail.com </p>
        <p className={styles.copy_right}><span>RPG System</span> Criado por João Pedro Caldeira &copy; 2023</p>
    </footer>)
}

export default Footer