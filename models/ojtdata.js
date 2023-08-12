'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OJTData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OJTData.belongsTo(models.User, {foreignKey: 'user_id'})
      OJTData.hasMany(models.DataDetail, {foreignKey: 'ojt_data_id'})
    }
  }
  OJTData.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OJTData',
  });
  return OJTData;
};