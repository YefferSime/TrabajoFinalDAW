const express = require('express');
const {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal
} = require('../controllers/animalController');
const router = express.Router();

router.get('/animals', getAllAnimals);
router.get('/animals/:id', getAnimalById);
router.post('/animals', createAnimal);
router.put('/animals/:id', updateAnimal);
router.delete('/animals/:id', deleteAnimal);

module.exports = router;
