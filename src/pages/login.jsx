import React from 'react';
import '../styles/login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const token = localStorage.getItem("token");
   
        const login = document.getElementById('CPF').value;
        const password = document.getElementById('Senha').value;
       
        try {
            // Enviando a requisição POST
            const response = await api.post('/login', {
                login,
                password
            });

            // Exibindo mensagem de sucesso
            setMensagem("Login realizado com sucesso!");
        } catch (error) {
            // Tratando erros
            setMensagem("Erro ao realizar login. Tente novamente.");
            console.error(error);
        }
    };

    return (
        <div className='login-form-wrapper'>
            <div className="login-form">
                <h1>Internet Banking</h1>
                <div className="container">
                    <div className="main">
                        <div className="content">
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="CPF" required autoFocus />
                                <input type="password" placeholder="Senha" required />
                                <button className="btn" type="submit">Login</button>
                            </form>
                            <p className="account">
                                <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;