const pokemonController = require('../controllers/pokemonControllers');

const router = require('express').Router();

router.get('/', pokemonController.getPokemons)
router.post('/', pokemonController.newPokemon)
router.put('/:id', pokemonController.updatePokemon)
router.get('/:id', pokemonController.getPokeById)
router.delete('/delete/:id', pokemonController.deletePoke)

module.exports = router