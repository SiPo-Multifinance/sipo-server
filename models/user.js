'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.ODPGroup, {through: models.UserODPGroup, foreignKey: 'user_id'})
      User.hasMany(models.OJTData, {foreignKey: 'user_id'})
    }
  }
  User.init({
    is_admin: DataTypes.BOOLEAN,
    is_student: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};