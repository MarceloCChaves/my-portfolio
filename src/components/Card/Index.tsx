import "./Styles.scss"

type CardProject = {
  name: string,
  description: string,
  photo: string;
  link: string,
}

export default function Index(props: CardProject) {
  return (
    <article className="card">
      <img src={props.photo} alt={props.name} />
      <strong>{props.name}</strong>
      <hr />
      <p>{props.description}</p>
      <a href={props.link} target="_blank">Visualizar repositório</a>
    </article>
  )
}
