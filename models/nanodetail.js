'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NanoDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NanoDetail.belongsTo(models.DataDetail, {foreignKey: 'data_details_id'})
    }
  }
  NanoDetail.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    data_details_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NanoDetail',
  });
  return NanoDetail;
};