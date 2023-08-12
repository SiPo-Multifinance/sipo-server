'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserODPGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserODPGroup.belongsTo(models.User, {foreignKey: 'user_id'})
      UserODPGroup.belongsTo(models.ODPGroup, {foreignKey: 'odp_group_id'})
    }
  }
  UserODPGroup.init({
    user_id: DataTypes.INTEGER,
    odp_group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserODPGroup',
  });
  return UserODPGroup;
};