import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/minhaConta.css';

export default function MinhaConta() {
    const navigate = useNavigate();

    const contaCorrente = {
        numero: '123456-7',
        agencia: '0001',
        saldo: 'R$ 5.432,89',
    };

    const usuario = {
        nome: 'Camille Luz',
        cpf: '123.456.789-00',
    };

    return (
        <div className="minha-conta-container">
            <h2>Minha Conta</h2>

            <section className="conta-corrente">
                <h3>Conta Corrente</h3>
                <p><strong>Número da conta:</strong> {contaCorrente.numero}</p>
                <p><strong>Agência:</strong> {contaCorrente.agencia}</p>
                <p><strong>Saldo:</strong> {contaCorrente.saldo}</p>
            </section>

            <section className="dados-usuario">
                <h3>Dados do Usuário</h3>
                <p><strong>Nome:</strong> {usuario.nome}</p>
                <p><strong>CPF:</strong> {usuario.cpf}</p>
            </section>

            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}
