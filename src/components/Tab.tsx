import { baseURL } from "~/app";


export default function Tab() {
  return (
    <nav>
      <a href={`${baseURL}/`}>Home</a>
      <a href={`${baseURL}/posts`}>Posts</a>
      <a href={`${baseURL}/projects`}>Projetos</a>
      <a href={`${baseURL}/about`}>Sobre</a>
    </nav>
  );
}