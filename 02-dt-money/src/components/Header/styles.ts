import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

/*
    - max-width: ajusta os limites da largura do componente, já o margin, centraliza o componente.
  
    - margin: o margin aplicado está centralizando o componente. Ele está colocando 0px em cima e embaixo
    e auto nas laterais.

    - padding: o padding está definindo 2rem em cima, 1rem nas laterais e 12rem no botton.
    
    - display: foi aplicado o flexbox 

    - align-itens: estabelece um alinhamento dos itens dentro do bloco.

    - justify-content: define uma espaço absoluto entre os itens com base no max-width.
*/

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
