import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../../img/d20logo.png"

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="d20" width={51} height={51} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/charselection'>CharSelection</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/newchar'>NewChar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar