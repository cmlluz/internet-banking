import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
    const navigate = useNavigate();

    const handleMinhaConta = () => {
        navigate('/minhaConta');
    };

    const handleSair = () => {
        alert('Você saiu da conta.');
        navigate('/');
    };
    const handleDeposito = () => {
        navigate('/deposito');
    };

    const handleSaque = () => {
        navigate('/saque');
    };

    const handlePagamento = () => {
        navigate('/pagamento');
    };

    const handleExtrato = () => {
        navigate('/extrato');
    };

    return (
        <div className="dashboard-wrapper">
            <header className="header-top">
                <span className="welcome-text">Bem-vindo!</span>
                <div className="button-group">
                    <button className="header-button" onClick={handleMinhaConta}>
                        Minha Conta
                    </button>
                    <button className="header-button sair" onClick={handleSair}>
                        Sair
                    </button>
                </div>
            </header>

            <div className="dashboard-container">
                <div className="dashboard-card">
                    <div className="balance-section">
                        <h2 className="balance-label">Saldo Atual:</h2>
                        <h1 className="balance-value">R$ 5.432,89</h1>
                    </div>

                    <div className="actions">
                        <button className="action-button" onClick={handleDeposito}>
                            Depósito
                        </button>
                        <button className="action-button" onClick={handleSaque}>
                            Saque
                        </button>
                        <button className="action-button active" onClick={handlePagamento}>
                            Pagamento
                        </button>
                        <button className="action-button" onClick={handleExtrato}>
                            Extrato
                        </button>
                    </div>

                    <div className="transactions">
                        <h3 className="transactions-title">Transações Recentes</h3>
                        <div className="transaction-list">
                            <div className="transaction-item">
                                <span className="transaction-name">McDonalds</span>
                                <span className="transaction-date">20/05/25</span>
                                <span className="transaction-amount">R$ 35,90</span>
                            </div>
                            <div className="transaction-item">
                                <span className="transaction-name">Amazon.com - Compra Online</span>
                                <span className="transaction-date">22/04/25</span>
                                <span className="transaction-amount">R$ 78,99</span>
                            </div>
                            <div className="transaction-item">
                                <span className="transaction-name">Sephora</span>
                                <span className="transaction-date">Vencimento</span>
                                <span className="transaction-amount">R$ 120,50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
