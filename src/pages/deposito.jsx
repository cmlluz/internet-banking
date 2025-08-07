
import React, { useState } from 'react';

export default function Deposito() {
    const [conta, setConta] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const valorNum = parseFloat(valor);
        if (valorNum <= 0) {
            alert('Valor deve ser maior que zero.');
            return;
        }
        alert(`Depósito de R$${valorNum.toFixed(2)} na conta ${conta} realizado com sucesso!`);
        setConta('');
        setValor('');
    };

    return (
        <div className="page-container">
            <h2>Depósito</h2>
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
                <button type="submit">Confirmar Depósito</button>
            </form>
        </div>
    );
}
