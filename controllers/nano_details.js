const {NanoDetail} = require('../models')

class NanoDetailsController {
    static async getAll(req, res) {
        try {
            const nano_details = await NanoDetail.findAll();
            res.status(200).json(nano_details);
        } catch (err) {
            next(err);
        }
    }

    static async getOne(req, res) {
        try {
            const nano_detail = await NanoDetail.findByPk(req.params.id);
            if (!nano_detail) {
                return res.status(404).json({ message: 'Nano Detail not found' });
            }
            res.status(200).json(nano_detail);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = NanoDetailsController;