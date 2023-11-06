const pokemonService = require('../services/pokemonService');

const getPokemons = async (req, res) => {
  try {
    const serviceResult = await pokemonService.getPokemons(req.query);
    if (serviceResult.success) {
      res.json(serviceResult)
    }else{
      res.status(400).json(serviceResult)
    }
  } catch (error) {
    res.status(400).json({ error:"Error while controlling fetching pokemons process" });
  }
};


const newPokemon = async (req, res) => {
  try {
    const serviceResult = await pokemonService.newPokemon(req.body);
    if (serviceResult.success) {
      res.status(201).json(serviceResult)
    }else{
      res.status(400).json(serviceResult)
    }
  } catch (error) {
    res.status(400).json({ error:"Error while controlling the request body" });
  }
};



const deletePoke = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceResult = await pokemonService.deletePoke(+id);

    if (serviceResult.success) {
      res.json(serviceResult);
    }else{
      res.status(400).json(serviceResult)
    }
  } catch (error) {
    res.status(400).json({ error:"Error while controlling the request params" });
  }
};



const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceResult = await pokemonService.updatePokemon(+id,req.body);

    if (serviceResult.success) {
      res.json(serviceResult);
    }else{
      res.status(400).json(serviceResult)
    }
  } catch (error) {
    res.status(400).json({ error:"Error while controlling the request params" });
  }
};


const getPokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceResult = await pokemonService.getPokeById(+id);

    if (serviceResult.success) {
      res.json(serviceResult);
    }else{
      res.status(400).json(serviceResult)
    }
  } catch (error) {
    res.status(400).json({ error:"Error while controlling the request params" });
  }
};

module.exports = {
  getPokemons,
  newPokemon,
  deletePoke,
  updatePokemon,
  getPokeById
};