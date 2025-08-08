import React, { useState } from 'react';
import axios from 'axios';

export default function Pagamento() {
    const [conta, setConta] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const valorNum = parseFloat(valor);
        if (!valorNum || valorNum <= 0) {
            setMensagem('O valor deve ser maior que zero.');
            return;
        }
        if (descricao.trim() === '') {
            setMensagem('Por favor, informe a descrição do pagamento.');
            return;
        }

        try {
            const token = localStorage.getItem('user_token');
            if (!token) {
                setMensagem("Sessão expirada. Por favor, faça o login novamente.");
                return;
            }

            const dadosPagamento = {
                contaDestino: conta,
                valor: valorNum,
                descricao,
            };

            await axios.post('http://localhost:8080/transacoes/pagamento', dadosPagamento, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setMensagem('Pagamento realizado com sucesso!');
            setConta('');
            setValor('');
            setDescricao('');

        } catch (error) {
            console.error("Erro ao realizar pagamento:", error);
            const errorMsg = error.response?.data?.message || "Não foi possível realizar o pagamento.";
            setMensagem(errorMsg);
        }
    };

    return (
        <div className="page-container">
            <h2>Pagamento</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Conta de Destino:
                    <input
                        type="text"
                        value={conta}
                        onChange={(e) => setConta(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Valor (R$):
                    <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Confirmar Pagamento</button>
            </form>
            {mensagem && <p className="mensagem-feedback">{mensagem}</p>}
        </div>
    );
}