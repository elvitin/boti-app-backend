import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const data = require("./datas.json");

console.log(data);
