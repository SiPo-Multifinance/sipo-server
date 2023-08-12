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
}

module.exports = OJTDataController;