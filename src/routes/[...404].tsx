import { HttpStatusCode } from "@solidjs/start";

export default function status404(){
  return (
    <div>
      <HttpStatusCode code={404} />
      <h1>{"404 - Página não existe :("}</h1>
    </div>
  );
}

