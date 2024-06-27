const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habitat = sequelize.define('Habitat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});

module.exports = Habitat;
