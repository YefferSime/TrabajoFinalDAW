const { Habitat, Animal } = require('../models');

exports.getAllHabitats = async (req, res) => {
  try {
    const habitats = await Habitat.findAll();
    res.json(habitats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHabitatById = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id, { include: Animal });
    if (habitat) {
      res.json(habitat);
    } else {
      res.status(404).json({ error: 'Habitat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.create(req.body);
    res.status(201).json(habitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id);
    if (habitat) {
      await habitat.update(req.body);
      res.json(habitat);
    } else {
      res.status(404).json({ error: 'Habitat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id);
    if (habitat) {
      await habitat.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Habitat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
