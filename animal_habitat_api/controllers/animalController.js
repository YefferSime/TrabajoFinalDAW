const { Animal, Habitat } = require('../models');

exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.findAll({ include: Habitat });
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id, { include: Habitat });
    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json({ error: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAnimal = async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (animal) {
      await animal.update(req.body);
      res.json(animal);
    } else {
      res.status(404).json({ error: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (animal) {
      await animal.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
