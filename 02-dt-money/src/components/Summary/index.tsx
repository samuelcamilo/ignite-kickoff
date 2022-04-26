import IncomeSvg from "../../assets/Entradas.svg";
import OutComeSvg from "../../assets/Saídas.svg";
import TotalSvg from "../../assets/Total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeSvg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutComeSvg} alt="" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalSvg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
