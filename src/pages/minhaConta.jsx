import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/minhaConta.css';

export default function MinhaConta() {
    const navigate = useNavigate();

    const [dadosConta, setDadosConta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDadosConta = async () => {
            try {
                const token = localStorage.getItem('user_token');
                if (!token) {
                    setError('Acesso negado. Por favor, faça o login novamente.');
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:8080/minha-conta', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setDadosConta(response.data);

            } catch (err) {
                console.error("Erro ao buscar dados da conta:", err);
                setError('Não foi possível carregar os dados da conta.');
            } finally {
                setLoading(false);
            }
        };

        fetchDadosConta();
    }, []);

    if (loading) {
        return <div className="minha-conta-container"><h2>Carregando dados...</h2></div>;
    }
    if (error) {
        return <div className="minha-conta-container error-message"><h2>{error}</h2></div>;
    }

    return (
        <div className="minha-conta-container">
            <h2>Minha Conta</h2>

            <section className="conta-corrente">
                <h3>Conta Corrente</h3>
                <p><strong>Número da conta:</strong> {dadosConta?.numero}</p>
                <p><strong>Agência:</strong> {dadosConta?.agencia}</p>
                <p><strong>Saldo:</strong> {dadosConta?.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </section>

            <section className="dados-usuario">
                <h3>Dados do Usuário</h3>
                <p><strong>Nome:</strong> {dadosConta?.usuario?.nome}</p>
                <p><strong>CPF:</strong> {dadosConta?.usuario?.cpf}</p>
            </section>

            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}