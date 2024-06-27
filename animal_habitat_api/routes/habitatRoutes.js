const express = require('express');
const {
  getAllHabitats,
  getHabitatById,
  createHabitat,
  updateHabitat,
  deleteHabitat
} = require('../controllers/habitatController');
const router = express.Router();

router.get('/habitats', getAllHabitats);
router.get('/habitats/:id', getHabitatById);
router.post('/habitats', createHabitat);
router.put('/habitats/:id', updateHabitat);
router.delete('/habitats/:id', deleteHabitat);

module.exports = router;
