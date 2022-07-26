import styled from "styled-components";

export const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr); //3 colunas de tamanhos iguais
  width: 100%;
  gap: 2rem; //espaçamento entre as colunas
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {  //puxar uma classe da div
      background: var(--green);
      color: #FFF;
    }
  }
`;

