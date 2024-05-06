const db = require('@/helpers/db');

const { users } = require('@/schema');

class HomeController {
  async index(req, res) {
    const result = await db.select().from(users);

    return res.send(result);
  }
}

module.exports = new HomeController();
