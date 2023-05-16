import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const fs = require("fs");
let data = require("./datas.json");

const dataAmount = 2;

export function createPerson({ name, surname, born }) {
  const id = dataAmount + 1;

  const person = {
    id,
    name,
    surname,
    born,
  };

  data.push(person);
  const updatedJson = JSON.stringify(data);

  return fs.writeFileSync("src/database/datas.json", updatedJson);
}

export function deletePerson(id) {
  const wantedPerson = data.find((person) => person.id === id);

  if (wantedPerson === undefined) return "Pessoa não encontrada";

  const newData = data.filter((pessoa) => pessoa.id !== id);

  const updatedJson = JSON.stringify(newData);

  fs.writeFileSync("src/database/datas.json", updatedJson);
  data = require("./datas.json");

  return "Usuário deletado";
}

export function updatePerson(id) {
  const wantedPerson = data.find((person) => person.id === id);

  if (wantedPerson === undefined) return "Pessoa não encontrada";

  data = data.filter((pessoa) => pessoa.id !== id);
  const updatedJson = JSON.stringify(data);

  fs.writeFileSync("src/database/datas.json", updatedJson);

  return "Usuário deletado";
}
