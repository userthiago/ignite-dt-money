import { FormEvent, useRef, useState } from "react";
import Modal from "react-modal";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, RadioBox } from "./styles";
import { api } from "../../services/api";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw';

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const title = useRef<HTMLInputElement>(null);
  const amount = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLInputElement>(null);
  const [type, setType] = useState('deposit');

  function handleSetType(value: TransactionType) {
    setType(value);
  }

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title: title.current?.value, 
      amount: amount.current?.value, 
      type,
      category: category.current?.value
    };

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          ref={title}
        />
        <input 
          type="number" 
          placeholder="Valor" 
          ref={amount}
        />
        <div className="transaction-type__container">
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => handleSetType('deposit')}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => handleSetType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </div>
        <input 
          placeholder="Categoria" 
          ref={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}