import { Container, Image } from "./styles";
import IconIgnite from "../../assets/ignite-icon.svg";

export function Header() {
  return (
    <Container>
      <Image src={IconIgnite} alt="logo do ignite"></Image>
    </Container>
  );
}
