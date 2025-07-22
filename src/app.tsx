import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Tab from "./components/Tab";

import "./app.css";

export const baseURL = import.meta.env.SERVER_BASE_URL;

export default function App() {
  return (
    <Router
      base={baseURL}
      root={props => (
        <main>
          <Tab/>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
