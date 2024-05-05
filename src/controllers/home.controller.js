class HomeController {
  index(req, res) {
    res.render('home/index', {
      title: 'Home',
    });
  }
}

module.exports = new HomeController();
