const sequelize = require('../config/database');
const Animal = require('./Animal');
const Habitat = require('./Habitat');

Habitat.hasMany(Animal, { foreignKey: 'habitatId' });
Animal.belongsTo(Habitat, { foreignKey: 'habitatId' });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  Animal,
  Habitat,
};
