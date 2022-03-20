import "../styles/repositories.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_link: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="repository-item">
      <h2>{props.repository?.name ?? "Default"}</h2>
      <p>{props.repository.description}</p>
      <a className="repository-btn" href={props.repository.html_link}>
        Acessar repositório
      </a>
    </li>
  );
}
