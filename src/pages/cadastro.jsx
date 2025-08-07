import React, { useState } from "react";
import '../styles/cadastro.css';

function Cadastro() {
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensagem("Cadastro realizado com sucesso!");
    };

    return (
        <div className="cadastro-form">
            <h1>Cadastro de Usuário</h1>
            <form id="cadastroForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="nome"
                    placeholder="Nome completo"
                    required
                    autoFocus
                />
                <input
                    type="text"
                    id="cpf"
                    placeholder="CPF "
                    pattern="\d{11}"
                    title="Digite 11 números"
                    required
                />
                <input type="email" id="email" placeholder="E-mail" required />
                <input
                    type="password"
                    id="senha"
                    placeholder="Senha"
                    minLength="6"
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <p className="mensagem" id="mensagem">{mensagem}</p>
        </div>
    );
}

export default Cadastro;
