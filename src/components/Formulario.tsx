import { useState } from 'react';
import { calcularComissao } from '../utils/calcularComissao';

export function Formulario() {
  const [ticketMedio, setTicketMedio] = useState('');
  const [vendas, setVendas] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = () => {
    const ticket = parseFloat(ticketMedio);
    const quantidade = parseInt(vendas);

    if (!isNaN(ticket) && !isNaN(quantidade)) {
      const comissao = calcularComissao(ticket, quantidade);
      setResultado(comissao);
    }
  };

return (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  }}>
    <div style={{
      maxWidth: 700,
      width: '100%',
      backgroundColor: '#fff',
      padding: '40px 30px',
      borderRadius: 10,
      boxShadow: '0 0 20px rgba(0,0,0,0.05)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Calculadora de Comissão</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input
          type="number"
          placeholder="Ticket Médio (em dólares)"
          value={ticketMedio}
          onChange={(e) => setTicketMedio(e.target.value)}
          style={{ padding: 10, fontSize: 16 }}
        />
        <input
          type="number"
          placeholder="Quantidade de Vendas"
          value={vendas}
          onChange={(e) => setVendas(e.target.value)}
          style={{ padding: 10, fontSize: 16 }}
        />
        <button
          onClick={handleCalcular}
          style={{
            padding: 12,
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: 16,
            cursor: 'pointer',
            borderRadius: 5,
          }}
        >
          Calcular
        </button>
        {resultado !== null && (
          <p style={{ fontSize: 18 }}>
            Comissão Total: <strong>R$ {resultado.toFixed(2)}</strong>
          </p>
        )}
      </div>

      <h2 style={{ marginTop: 50 }}>Tabela de Comissão</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
        <thead>
          <tr>
            <th style={thStyle}>Ticket Médio</th>
            <th style={thStyle}>Tier 1<br />R$1500 a R$2000</th>
            <th style={thStyle}>Tier 2<br />R$1200 a R$1499</th>
            <th style={thStyle}>Tier 3<br />Até R$1199</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1 a 5', 180, 180, 180],
            ['6 a 9', 300, 300, 200],
            ['10 a 14', 480, 320, 280],
            ['15 a 19', 580, 420, 320],
            ['20 a 25', 600, 580, 480],
            ['26 ou mais', 640, 620, 520],
          ].map(([faixa, t1, t2, t3], idx) => (
            <tr key={idx}>
              <td style={tdStyle}>{faixa}</td>
              <td style={tdStyle}>R$ {t1}</td>
              <td style={tdStyle}>R$ {t2}</td>
              <td style={tdStyle}>R$ {t3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

const thStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '12px',
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
};
