const Joi = require('joi');

const pokemonSchema = Joi.object({
    name           :Joi.string().required(),
    pokedexNumber  :Joi.number().required(),     
    type1          :Joi.string().required(),
    generation     :Joi.number().required(),    
    weather1       :Joi.string().required(),
    atk            :Joi.number().required(),
    statTotal      :Joi.number().required(),
    def            :Joi.number().required(),
    sta            :Joi.number().required(),
    cpAt40         :Joi.number().required(),
    cpAt39         :Joi.number().required(),
    familyID       :Joi.number(),
    crossGen       :Joi.boolean(),
    imgName        :Joi.string(),
    spawns         :Joi.boolean(),
    evolutionStage :Joi.string(),
    evolved        :Joi.boolean(),
    type2          :Joi.string(),
    weather2       :Joi.string(),
    legendary      :Joi.number(),
    acquirable     :Joi.number(),
    regional       :Joi.boolean(),
    raidable       :Joi.number(),
    hatchable      :Joi.number(),
    shiny          :Joi.boolean(),
    nest           :Joi.boolean(),
    new            :Joi.boolean(),
    notGettable    :Joi.boolean(),
    futureEvolve   :Joi.boolean(),
  });

  module.exports = pokemonSchema