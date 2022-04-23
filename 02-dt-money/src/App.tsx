import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Hello World</h1>
    </div>
  );
}

/**
 
    Ao definir o component com export function, eu consigo
  importa-lo com o nome do componente, não conseguindo definir
  uma nomenclatura diferente. Ex: import { App } from "./App";

  O uso do styled components trás muitos beficios. 
  
  1 - A utilização da estilização somente dentro do componente. 
  2 - A estilização dinâmica, sendo possível adicionar lógica e paramêtros.
  3 - A a nomenclatura das classes é única. Desta forma, um estilo não 

**/
