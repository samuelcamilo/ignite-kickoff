import { Container, Image, Profile, Footer, Button } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60" />

      <Profile>
        <strong>Samuel Camilo</strong>
        <span>BackEnd Developer</span>
      </Profile>

      <Footer>
        <Button href="#">Editar seu perfil</Button>
      </Footer>
    </Container>
  );
}
