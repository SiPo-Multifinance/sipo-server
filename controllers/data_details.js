const {DataDetail} = require('../models');

class DataDetailsController {
  static async getAll(req, res) {
    try {
      const data_details = await DataDetail.findAll();
      res.status(200).json(data_details);
    } catch (err) {
      next(err);
    }
  }

    static async getOne(req, res) {
        try {
            const data_detail = await DataDetail.findByPk(req.params.id);
            if (!data_detail) {
                return res.status(404).json({ message: 'Data Detail not found' });
            }
            res.status(200).json(data_detail);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = DataDetailsController;