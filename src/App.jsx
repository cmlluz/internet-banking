import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Home from './pages/home.jsx';
import Deposito from './pages/deposito.jsx';
import Saque from './pages/saque.jsx';
import Pagamento from './pages/pagamento.jsx';
import Extrato from './pages/extrato.jsx';
import MinhaConta from './pages/minhaConta.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deposito" element={<Deposito />} />
        <Route path="/saque" element={<Saque />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/minhaConta" element={<MinhaConta />} />
      </Routes>
    </Router>
  );
}

export default App;
