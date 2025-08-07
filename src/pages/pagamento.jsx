
import React, { useState } from 'react';

export default function Pagamento() {
    const [conta, setConta] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const valorNum = parseFloat(valor);
        if (valorNum <= 0) {
            alert('Valor deve ser maior que zero.');
            return;
        }
        if (descricao.trim() === '') {
            alert('Informe a descrição do pagamento.');
            return;
        }
        alert(`Pagamento de R$${valorNum.toFixed(2)} na conta ${conta} realizado com sucesso! Descrição: ${descricao}`);
        setConta('');
        setValor('');
        setDescricao('');
    };

    return (
        <div className="page-container">
            <h2>Pagamento</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Conta:
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
        </div>
    );
}
