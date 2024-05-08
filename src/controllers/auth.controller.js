const bcrypt = require('bcrypt');
const db = require('@/helpers/db');
const { users } = require('@/schema');
const { eq } = require('drizzle-orm');

class AuthController {
  login(req, res) {
    return res.render('auth/login', {
      title: 'Login',
    });
  }

  register(req, res) {
    return res.render('auth/register', {
      title: 'Register',
    });
  }

  async actionLogin(req, res) {
    const { email, password } = req.body;

    const user = await db.select().from(users).where(eq(users.email, email));

    if (user.length > 0) {
      const isSuccess = bcrypt.compareSync(password, user[0].password);

      if (isSuccess) {
        return res.send(user);
      }

      return res.send('Unauthorized');
    }

    return res.send('User not found');
  }

  async actionRegister(req, res) {
    const { email, password, firstName, lastName } = req.body;

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await db.insert(users).values({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });

    return res.redirect('/login');
  }
}

module.exports = new AuthController();
