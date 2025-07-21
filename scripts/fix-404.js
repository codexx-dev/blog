import { rename, rm } from "fs/promises";
import { existsSync } from "fs";

const from = "./.output/public/404/index.html";
const to = "./.output/public/404.html";

if (existsSync(from)) {
  await rename(from, to);
  await rm("./.output/public/404", { recursive: true });
  console.log("✅ 404.html moved.");
} else {
  console.warn("⚠️ 404/index.html not found.");
}