const { ODPGroup, User, UserODPGroup } = require('../models');

class ODPGroupController {
  static async getAll(req, res, next) {
    try {
      const odp_groups = await ODPGroup.findAll();
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
          attributes: ['id', 'username'],
          through: UserODPGroup,
        },
      });

      const users = odp_group.Users.map(user => ({
        id: user.id,
        username: user.username,
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