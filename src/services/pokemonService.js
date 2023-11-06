const prisma = require("../../prisma");
const pokemonSchema = require("./pokemonJoiSchema");

const getPokemons = async (queryParams) => {
  try {
    const { name, type, generation, legendary, page = 1, pageSize = 10 } = queryParams;
    // Ensure that page is a positive integer
    const validPage = parseInt(page);
    // Calculate the number of records to skip based on validPage
    const skip = (validPage - 1) * pageSize;

    const query = {
      where: {
        AND: [
          name ? { name: { startsWith: name, mode: "insensitive" } } : {},
          type ? { OR: [{ type1: type }, { type2: type }] } : {},
          generation ? { generation: +generation } : {},
          legendary ? { legendary: +legendary } : {},
        ],
      },
      skip,
      take: +pageSize 
    };

    // Fetch the filtered Pokémon records
    const filteredPokemon = await prisma.pokemon.findMany(query);

    const totalRecords = await prisma.pokemon.count({ where: query.where });

    const totalPages = Math.ceil(totalRecords / pageSize );

    if(validPage > totalPages ){
      return {
          success: false,
          error: { message: `Invalid page number. Total pages: ${totalPages}`, name: 'ValidationError' },
          };    
}


    const serviceResult = {
      pokemons: filteredPokemon,
      totalRecords,
      totalPages,
      currentPage: validPage,
      recordsOnThisPage: filteredPokemon.length,
    };

    return { success: true, data: serviceResult };
  } catch (error) {
    return { success: false, error: { message: error.message, name: error.name } };
  }
};


  const newPokemon = async (user) => {
    try {
     
      const { error, value } = pokemonSchema.validate(user);
      if (error) {
        return {
          success: false,
          error: { message: error.details[0].message, name: 'input error' },
        };
      }
      const createdUser = await prisma.pokemon.create({data:value});
      return {
        success:true,
        data:createdUser
      }
 } 
    catch (error) {
        return { 
          success: false,
          error:{message:error.message,name:error.name}
        };
    }
  };
  


const deletePoke = async (id) => {
  try {
    const deletedPoke = await prisma.pokemon.delete({
      where: { id } ,
    });
    return{success: true , data:`Pokémon with ID ${id} has been deleted successfully`};
} 
  catch (error) {
    return { 
      success: false,
      error:{message:error.message,name:error.name}
    };
  }
};


const updatePokemon = async (id, data) => {
  try {
    const updatedPokemon = await prisma.pokemon.update({
      where: {
        id,
      },
      data,
    });

    if (!updatedPokemon) {
      return { success: false, error: { message: 'Pokemon not found', name: 'NotFoundError' } };
    }

    return { success: true, data: updatedPokemon };
  } catch (error) {
    return { success: false, error: { message: error.message, name: error.name } };
  }
};

const getPokeById = async (id) => {
  try {
    const foundPokemon = await prisma.pokemon.findFirst({
      where: {
        id,
      },     
    });  
    if (!foundPokemon) {
      return { success: false, error: { message: 'Pokemon not found', name: 'NotFoundError' } };
    }
    return { success: true, data: foundPokemon };
  } catch (error) {
    return { success: false, error: { message: error.message, name: error.name } };
  }
};

module.exports = {
    getPokemons,
    newPokemon,
    deletePoke,
    updatePokemon,
    getPokeById
  };