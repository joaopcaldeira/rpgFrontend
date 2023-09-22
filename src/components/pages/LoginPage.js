import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../contextes/UserContext";
import styles from "../Login.module.css"

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user, setUser } = useContext(UserContext)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login',
                JSON.stringify({ email, password }),
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log(response.data);
            setUser(response.data);

        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        setUser(null);
        setError('');
    }

    return user == null ? (
        <div className={styles.item}>
            <h1 className={styles.text}>Login</h1>
            <form>
                <input type="email"
                    name="emai"
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    name="password"
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'
                    className='btn-login'
                    onClick={(e) => handleLogin(e)}>Login</button>
            </form>
            <p>{error}</p>
        </div>
    ) : (
        <div className={styles.text}>
            <p>User: {user.name}</p>
            <button type="button"
                className='btn-login'
                onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default LoginPage;