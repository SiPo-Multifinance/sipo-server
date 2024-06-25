const {NanoDetail, DataDetail} = require('../models')

class NanoDetailsController {
  static async getAll(req, res) {
      try {
          const nano_details = await NanoDetail.findAll();
          res.status(200).json(nano_details);
      } catch (err) {
          console.log(err);
      }
  }

static async getOne(req, res) {
    try {
        const nano_detail = await NanoDetail.findAll({ where: { data_details_id: req.params.id } });
        if (!nano_detail) {
            return res.status(404).json({ message: 'Nano Detail not found' });
        }
        res.status(200).json(nano_detail);
    } catch (err) {
        console.log(err);
    }
}

static async create(req, res, next) {
    try {
      const { title, date, description, data_details_id } = req.body;
      const odpGroup = await NanoDetail.create({ title, date, description, data_details_id});
      res.status(201).json(odpGroup);
    } catch (err) {
      console.log(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, date, description } = req.body;

      const odpGroup = await NanoDetail.findByPk(id);
      if (!odpGroup) {
        return res.status(404).json({ message: 'Data detail not found' });
      }

      await odpGroup.update({ title, date, description});

      res.status(200).json(odpGroup);
    } catch (err) {
      console.log(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const odpGroup = await NanoDetail.findByPk(id);
      if (!odpGroup) {
        return res.status(404).json({ message: 'Detail not found' });
      }

      await odpGroup.destroy();
      res.status(204).send();
    } catch (err) {
      console.log(err);
    }
  }

  static async setStatus(req, res,next) {
    try {
      const {status, id} = req.body

      if (status) {
        await NanoDetail.update({status}, {where: {id}})

        return res.status(200).json({message: 'Status updated'})
      }

    } catch (err) {
      next(err)
    }
  }
}

module.exports = NanoDetailsController;