'use strict';
const {
  Model
} = require('sequelize');
const user = require("./user")
module.exports = (sequelize, DataTypes) => {
  class presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  presence.init({
    id_user: DataTypes.INTEGER,
    times: DataTypes.TIME,
    dates: DataTypes.DATEONLY,
    present: DataTypes.BOOLEAN,
    validation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'presence',
  });
  return presence;
  presence.hasOne(user, {foreignKey: id_user});
  presence.belongsTo(user)
};