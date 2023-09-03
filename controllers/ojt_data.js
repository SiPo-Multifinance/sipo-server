const {OJTData} = require('../models');

class OJTDataController {
    static async getAll(req, res) {
        try {
            const ojt_data = await OJTData.findAll();
            res.status(200).json(ojt_data);
        } catch (err) {
            next(err);
        }
    }

    static async getAllByUser(req, res, next) {
      try {
          const userId = req.query.user_id; 
          if (!userId) {
              
            return res.status(400).json({ message: 'user_id is required in the query parameters' });
          }
  
          const ojt_data = await OJTData.findAll({
              where: {
                  user_id: userId
              }
          });
          res.status(200).json(ojt_data);
      } catch (err) {
          next(err);
      }
  }

    static async getOne(req, res) {
        try {
            const ojt_data = await OJTData.findByPk(req.params.id);
            if (!ojt_data) {
                return res.status(404).json({ message: 'OJT Data not found' });
            }
            res.status(200).json(ojt_data);
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
          const { title, user_id } = req.body;
          const odpGroup = await OJTData.create({ title, user_id});
          res.status(201).json(odpGroup);
        } catch (err) {
          next(err);
        }
      }
    
      static async update(req, res, next) {
        try {
          const { id } = req.params;
          const { title} = req.body;
    
          const odpGroup = await OJTData.findByPk(id);
          if (!odpGroup) {
            return res.status(404).json({ message: 'Data detail not found' });
          }
    
          await odpGroup.update({ title });
    
          res.status(200).json(odpGroup);
        } catch (err) {
          next(err);
        }
      }
    
      static async delete(req, res, next) {
        try {
          const { id } = req.params;
          const odpGroup = await OJTData.findByPk(id);
          if (!odpGroup) {
            return res.status(404).json({ message: 'Detail not found' });
          }
    
          await odpGroup.destroy();
          res.status(204).send();
        } catch (err) {
          next(err);
        }
      }
}

module.exports = OJTDataController;