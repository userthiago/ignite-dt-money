import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--blue);

  .header {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 1120px;
      padding: 2rem 1rem 8.25rem;
      margin: 0 auto;
    }
  }

  button {
    background: var(--purple);
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    
    font-size: 1rem;
    color: var(--shape);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
