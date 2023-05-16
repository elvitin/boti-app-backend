import { createPerson, deletePerson } from "../database/controller.js";

class PersonController {
  async create(req, res) {
    createPerson(req.body);

    return res.json("Usuário criado");
  }

  async delete(req, res) {
    deletePerson(Number(req.params.id));

    res.json(deletePerson(Number(req.params.id)));
  }
}

export default new PersonController();
