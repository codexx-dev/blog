import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import tailwindcss from '@tailwindcss/vite'
const { default: mdx } = pkg;
import { getPostList } from "./scripts/utils";


const postList = getPostList()
console.log("Post List:", postList);

export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      tailwindcss()
    ],
    define:{
      __postlist__: JSON.stringify(postList),
    }
  },
  server:{
    baseURL: process.env.BASE_PATH,
    preset: "static",
    prerender: {
      failOnError: true,
      routes: ["/", "/404", ...(postList.map(post => post.route))],
      crawlLinks: true,
      //interval: 500,
      //retry: 2,
      //retryDelay: 500
    },
  }
});
