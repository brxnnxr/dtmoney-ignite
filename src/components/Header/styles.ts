import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; //1rem = 16px 
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2; //td vez que a propriedade filter for alterada, faz uma transicao mais leve
  
  &:hover{ //quando passar o mause muda o jeito
    filter: brightness(0.9); //vai levemente escurecer o botao
  }
  }
`