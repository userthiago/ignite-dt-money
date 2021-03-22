import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;

    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    background: #e7e9ee;
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    border: 0;

    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .transaction-type {
    &__container {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.9, colors[activeColor]) 
    : 'transparent'};
  height: 4rem;
  border: 1px solid ${({ isActive, activeColor }) => isActive 
    ? colors[activeColor] 
    : '#d7d7d7'};
  border-radius: 0.25rem;

  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1.125rem;

    color: var(--text-title);
    font-size: 1rem;
  }
`;