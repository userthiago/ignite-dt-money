import logoImg from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <HeaderContainer>
      <div className="header__content">
        <img src={logoImg} alt="dt money logo"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </HeaderContainer>
  );
}