const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class UserController {

  static async login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
          throw {name: 'InvalidCredential'};
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw {name: 'InvalidCredential'};
        }
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
            is_admin: user.is_admin,
            is_student: user.is_student,
            first_name: user.first_name,
            last_name: user.last_name,
            nik: user.nik
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1d',
          }
        );
        res.status(200).json({ user_id: user.id, token, is_admin: user.is_admin, is_student: user.is_student, name: user.first_name + ' ' + user.last_name, nik: user.nik});
      } catch (err) {
        if (err.name === 'InvalidCredential') {
          return res.status(401).json({ message: 'Invalid Credential' });
        }
        console.log(err)
    }
  }

  static async register(req, res, next) {
    try {
      const { username, password, is_admin, is_student, nik, first_name, last_name } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        password: hashedPassword,
        is_admin,
        is_student,
        nik,
        first_name,
        last_name
      });

      res.status(201).json(user);
    } catch (err) {
      console.log(err)
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.log('ERROOOOOOOOOOOOR', err)
      console.log(err)
    }
  }

  static async getOne(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err)
    }
  }

  static async create(req, res, next) {
    try {
      const { username, password, is_admin, is_student } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        password: hashedPassword,
        is_admin,
        is_student,
      });

      res.status(201).json(user);
    } catch (err) {
      console.log(err)
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username, password, is_admin, is_student } = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await user.update({
          username,
          password: hashedPassword,
          is_admin,
          is_student,
        });
      } else {
        await user.update({
          username,
          is_admin,
          is_student,
        });
      }

      res.status(200).json(user);
    } catch (err) {
      console.log(err)
    }
  }

  static async delete(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.destroy();
      res.status(204).send();
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = UserController;
