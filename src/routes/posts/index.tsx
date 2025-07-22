import { createEffect, createResource, For, Show } from "solid-js";
import { baseURL } from "~/app";

export default function posts(){

  return (
    <div>
      <h1>Posts</h1>
      <Show when={__postlist__} fallback={<p>Carregando posts...</p>}>
        <For each={__postlist__}>
          {(post) => <a href={`${baseURL}/${post.route}`}>{post.title}</a>}
        </For>
      </Show>
    </div>
  );
}