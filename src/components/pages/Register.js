import axios from "axios"
import { useState } from "react"
import styles from "../Login.module.css"

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/user',
                JSON.stringify({ name, email, password }),
                { headers: { 'Content-Type': 'application/json' } }
            );
            setError('Usuário registrado com sucesso')

        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    }




    return (
        <div >
            <h1 className={styles.text}>Create Account</h1>
            <form>
                <div>
                    <input type="name"
                        name="name"
                        placeholder='Name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input type="email"
                        name="emai"
                        placeholder='Email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input type="password"
                    name="password"
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'
                    className='btn-login'
                    onClick={(e) => handleRegister(e)}>Register</button>
            </form>
            <p>{error}</p>
        </div>
    )
}

export default Register