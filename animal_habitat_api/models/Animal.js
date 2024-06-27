const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.ENUM('Macho', 'Hembra'),
    allowNull: false,
  },
  habitatId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Habitats',
      key: 'id',
    },
  },
}, {
  timestamps: false
});

module.exports = Animal;
