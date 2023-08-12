'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ODPGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ODPGroup.belongsToMany(models.User, {through: models.UserODPGroup, foreignKey: 'odp_group_id'})
    }
  }
  ODPGroup.init({
    name: DataTypes.STRING,
    batch: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ODPGroup',
  });
  return ODPGroup;
};