class PersonController {
  async index(req, res) {
    return res.send(`Home!`);
  }
}

export default new PersonController();
