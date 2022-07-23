import { Post } from "../Post";
import { Sidebar } from "../Sidebar";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Sidebar />
      <main>
        <Post
          author="Samuel Camilo"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, iure quis ex reprehenderit veniam provident earum hic ea dicta fuga odit sequi maxime aperiam, a itaque quam temporibus non rem!"
        />
        <Post
          author="Beatriz Felix"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, iure quis ex reprehenderit veniam provident earum hic ea dicta fuga odit sequi maxime aperiam, a itaque quam temporibus non rem!"
        />
      </main>
    </Container>
  );
}
