import axios from "axios";
import { useState } from "react";

function CreateAccount() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleCreatingAccount = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/user',
                JSON.stringify({ name, email, password }),
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

    return (
        <div className="login-from-wrap">
            {user == null ? (
                <div>
                    <h2>Create Account</h2>
                    <form className="login-form">
                        <input type="name"
                            name="name"
                            placeholder='Name'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
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
                            onClick={(e) => handleCreatingAccount(e)}>Create</button>
                    </form>
                    <p>{error}</p>
                </div>
            ) : (
                <div>
                    <h2>Conta Criada com sucesso</h2>
                </div>
            )}
        </div>
    )
}

export default CreateAccount;