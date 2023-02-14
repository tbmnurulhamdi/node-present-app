'use strict';

const fs = require('fs'); // import file system
const path = require('path'); // import path untuk melengkapi fs
const Sequelize = require('sequelize');
const process = require('process'); // import process untuk melengkapi koneksi
const basename = path.basename(__filename); // mengambil nama asli file
const env = process.env.NODE_ENV || 'development'; // keperluan koneksi
const config = require(__dirname + '/../config/config')[env]; // config untuk koneksi
const db = {}; // inisialisasi

// melakukan koneksi default sequelize-cli
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// akhir melakukan koneksi

// memulai pemeriksaan model (default sequelize-cli)
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// akhir pemeriksaan model (default sequelize-cli)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
