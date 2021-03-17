import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -7rem;

  .summary {
    &__item {
      background: var(--shape);
      padding: 1.56rem 1.25rem 1.125rem 2rem;
      border-radius: 0.25rem;

      color: var(--text-title);

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          line-height: 1.5rem;
        }
      }

      strong {
        display: block;

        margin-top: 0.875rem;
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 3.375rem;
      }

      &--hightlight {
        background-color: var(--green);
        color: var(--shape);
      }
    }
  }
`;
