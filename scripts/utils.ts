import fs from "fs";
import path from "path";

export function getPostList() {
// gera a lista de posts no momento do build
const postsDir = path.resolve("src/routes/posts");
const files = fs.readdirSync(postsDir);

return files
.filter((f) => f.endsWith(".mdx"))
.map((f) => {
  const title = f.replace(".mdx", "");
  return {
    title,
    route: `/posts/${title}`,
  };
});
}