import { SummaryContainer } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <SummaryContainer>
      <div className="summary__item">
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div className="summary__item">
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone Saídas"/>
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="summary__item summary__item--hightlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone Total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </SummaryContainer>
  );
}