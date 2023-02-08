'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // sequelize.define('admin', {
      //   fullname: {
      //     type: DataTypes.STRING,
      //     allowNull: false
      //   },
      //   username: {
      //     type: DataTypes.STRING,
      //     allowNull: false
      //   }
      // })
    }
  }
  admin.init({
    fullname: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};