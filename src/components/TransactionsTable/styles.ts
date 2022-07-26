import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }

    td:first-child {
      //pra chamar o primeiro filho td
      color: var(--text-title);
    }

    .deposit {
      //para chamar a classe deposit e pintar de verde
      color: var(--green);
    }

    .withdraw {
      color: var(--red); //para chamar a classe withdraw e pintar de red
    }
  }
`
