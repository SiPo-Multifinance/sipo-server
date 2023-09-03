const { ODPGroup, User, UserODPGroup } = require('../models');
const { Op } = require('sequelize');

class ODPGroupController {
  static async getAll(req, res, next) {
    try {
      const {search} = req.query;

      const whereClause = search ? {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { batch: { [Op.like]: `%${search}%` } }
        ]
      } : {};

      const odp_groups = await ODPGroup.findAll({
        where: whereClause
      });

      res.status(200).json(odp_groups);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const odp_group = await ODPGroup.findByPk(req.params.id, {
        include: {
          model: User,
          attributes: ['id', 'username', 'first_name', 'last_name', 'nik'],
          through: UserODPGroup,
        },
      });

      const users = odp_group.Users.map(user => ({
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        nik: user.nik
      }));

      const odpGroupJson = odp_group.toJSON();
      delete odpGroupJson.UserODPGroups;

      res.status(200).json({ ...odpGroupJson, Users: users });
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { name, batch } = req.body;
      const odpGroup = await ODPGroup.create({ name, batch });
      res.status(201).json(odpGroup);
    } catch (err) {
      next(err);
    }
  }

  static async assignStudents(req, res, next) {
    try {
      const { id } = req.params;
      const { student_ids } = req.body;
  
      const odpGroup = await ODPGroup.findByPk(id);
      if (!odpGroup) {
        return res.status(404).json({ message: 'ODP Group not found' });
      }
  
      const userODPGroupPromises = [];

      for (const student_id of student_ids) {
        const user = await User.findByPk(student_id);
        if (!user) {
          return res.status(404).json({ message: `User with ID ${student_id} not found` });
        }
      
        const userODPGroupPromise = UserODPGroup.create({ user_id: student_id, odp_group_id: id });
        userODPGroupPromises.push(userODPGroupPromise);
      }
      
      const createdUserODPGroups = await Promise.all(userODPGroupPromises);
      res.status(200).json(createdUserODPGroups);
    } catch (err) {
      next(err);
    }
  }  

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, batch } = req.body;

      const odpGroup = await ODPGroup.findByPk(id);
      if (!odpGroup) {
        return res.status(404).json({ message: 'ODP Group not found' });
      }

      await odpGroup.update({ name, batch });

      res.status(200).json(odpGroup);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const odpGroup = await ODPGroup.findByPk(id);
      if (!odpGroup) {
        return res.status(404).json({ message: 'ODP Group not found' });
      }

      await odpGroup.destroy();
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ODPGroupController;