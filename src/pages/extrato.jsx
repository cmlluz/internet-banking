
import React, { useState } from 'react';

const dadosOperacoes = [
    { id: 1, tipo: 'Depósito', data: '2025-08-01', valor: 1000 },
    { id: 2, tipo: 'Saque', data: '2025-08-02', valor: 200 },
    { id: 3, tipo: 'Pagamento', data: '2025-08-03', valor: 150, descricao: 'Conta de luz' },
    { id: 4, tipo: 'Depósito', data: '2025-08-04', valor: 500 },
];

export default function Extrato() {
    const [tipoFiltro, setTipoFiltro] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    const filtrarOperacoes = () => {
        return dadosOperacoes.filter((op) => {
            const dataOp = new Date(op.data);
            const inicioValido = dataInicial ? dataOp >= new Date(dataInicial) : true;
            const fimValido = dataFinal ? dataOp <= new Date(dataFinal) : true;
            const tipoValido = tipoFiltro ? op.tipo === tipoFiltro : true;
            return inicioValido && fimValido && tipoValido;
        });
    };

    const operacoesFiltradas = filtrarOperacoes();

    return (
        <div className="page-container">
            <h2>Extrato</h2>

            <div className="filtros">
                <label>
                    Tipo:
                    <select value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="Depósito">Depósito</option>
                        <option value="Saque">Saque</option>
                        <option value="Pagamento">Pagamento</option>
                    </select>
                </label>

                <label>
                    Data Inicial:
                    <input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} />
                </label>

                <label>
                    Data Final:
                    <input type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
                </label>
            </div>

            <ul className="lista-operacoes">
                {operacoesFiltradas.length === 0 ? (
                    <li>Nenhuma operação encontrada.</li>
                ) : (
                    operacoesFiltradas.map((op) => (
                        <li key={op.id}>
                            <strong>{op.tipo}</strong> - {op.data} - R$ {op.valor.toFixed(2)}
                            {op.descricao ? ` - ${op.descricao}` : ''}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
