import React, { useState } from "react";
import '../styles/cadastro.css';
import api from "../api/api";

function Cadastro() {
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const token = localStorage.getItem("token");
   
        const name = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;
       
        try {
            // Enviando a requisição POST
            const response = await api.post('/users', {
                name,
                cpf,
                email,
                password
            });

            // Exibindo mensagem de sucesso
            setMensagem("Cadastro realizado com sucesso!");
        } catch (error) {
            // Tratando erros
            setMensagem("Erro ao realizar cadastro. Tente novamente.");
            console.error(error);
        }
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