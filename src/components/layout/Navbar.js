import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../../img/d20logo.png"

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="d20" />
                </Link>
                <ul class={styles.list}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/charselection'>CharSelection</Link>
                    </li>
                    <li>
                        <Link to='/newchar'>NewChar</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar