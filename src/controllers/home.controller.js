const db = require('@/helpers/db');

const { users } = require('@/schema');

class HomeController {
  async index(req, res) {
    return res.render('home/index', {
      title: 'Home',
    });
  }
}

module.exports = new HomeController();
