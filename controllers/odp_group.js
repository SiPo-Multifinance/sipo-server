const { ODPGroup, User, UserODPGroup } = require('../models');

class ODPGroupController {
  static async getAll(req, res, next) {
    try {
      const odp_groups = await ODPGroup.findAll({
        include: {
          model: User,
          through: UserODPGroup,
        },
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
          through: UserODPGroup,
        },
      });
      res.status(200).json(odp_group);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ODPGroupController;