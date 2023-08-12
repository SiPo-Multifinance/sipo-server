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
}

module.exports = ODPGroupController;