import logoImg from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div className="header__content">
        <img src={logoImg} alt="dt money logo"/>
        <button type="button">
          Nova transação
        </button>
      </div>
    </HeaderContainer>
  );
}