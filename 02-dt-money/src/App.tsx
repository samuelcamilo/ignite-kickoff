import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
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
