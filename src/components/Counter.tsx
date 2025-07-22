import { createSignal, For, JSX } from "solid-js";

const [count, setCount] = createSignal(0);

export default function Counter() {
  
  const clickHandle = () => {
    setCount(count() + 1);
  };

  return (
    <div>
      <button class="btn" onClick={clickHandle}>
        Clicks: {count()}
      </button>
      <div>
        <For each={Array.from({ length: count() })}>
          {(_, i) => <img src="/cat-spinning.gif" class="w-40 inline-block"/>}
        </For>
      </div>
    </div>

  );
}
