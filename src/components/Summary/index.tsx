import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });
  
  return (
    <SummaryContainer>
      <div className="summary__item">
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone Entradas"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)
          }
        </strong>
      </div>
      <div className="summary__item">
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone Saídas"/>
        </header>
        <strong>
          - {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)
          }
        </strong>
      </div>
      <div className="summary__item summary__item--hightlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone Total"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>
    </SummaryContainer>
  );
}