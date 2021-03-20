import { useEffect } from 'react';
import { api } from '../../services/api';
import { TransactionsTableContainer } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <TransactionsTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel do apartamento</td>
            <td className="withdraw">- R$1.200,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
}