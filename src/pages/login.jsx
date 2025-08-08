import React from 'react';
import '../styles/login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado');
        navigate('/home');
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