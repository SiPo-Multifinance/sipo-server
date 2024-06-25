const {DataDetail, OJTData} = require('../models');

class DataDetailsController {
    static async getAll(req, res) {
        try {
        const data_details = await DataDetail.findAll();
        res.status(200).json(data_details);
        } catch (err) {
        console.log(err)
        }
    }

    static async getOne(req, res) {
        try {
            const data_detail = await DataDetail.findAll({ where: { ojt_data_id: req.params.id } })
            if (!data_detail) {
                return res.status(404).json({ message: 'Data Detail not found' });
            }
            res.status(200).json(data_detail);
        } catch (err) {
            console.log(err)
        }
    }

    static async create(req, res, next) {
        try {
          const { title, date, description, ojt_data_id } = req.body;
          const odpGroup = await DataDetail.create({ title, date, description, ojt_data_id});
          res.status(201).json(odpGroup);
        } catch (err) {
          console.log(err)
        }
      }
    
      static async update(req, res, next) {
        try {
          const { id } = req.params;
          const { title, date, description } = req.body;
    
          const odpGroup = await DataDetail.findByPk(id);
          if (!odpGroup) {
            return res.status(404).json({ message: 'Data detail not found' });
          }
    
          await odpGroup.update({ title, date, description});
    
          res.status(200).json(odpGroup);
        } catch (err) {
          console.log(err)
        }
      }
    
      static async delete(req, res, next) {
        try {
          const { id } = req.params;
          const odpGroup = await DataDetail.findByPk(id);
          if (!odpGroup) {
            return res.status(404).json({ message: 'Detail not found' });
          }
    
          await odpGroup.destroy();
          res.status(204).send();
        } catch (err) {
          console.log(err)
        }
      }
};

module.exports = DataDetailsController;