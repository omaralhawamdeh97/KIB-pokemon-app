describe("deleteService", () => {
const prisma = jestPrisma.client;

const createPokemon = async (data) => {
  return await prisma.pokemon.create({
    data,
  });
};

 it("should delete a Pokemon by ID", async () => {
   const newPokemon = await createPokemon({
          "name"           :"new-pokemon",  
          "pokedexNumber"  :8000,     
          "generation"     :2,
          "type1"          :"Electric",
          "weather1"       :"Snow",
          "statTotal"      :1000,
          "atk"            :320,
          "def"            :200,
          "sta"            :30,
          "cpAt40"         :700,
          "cpAt39"         :350,
          "spawns"         :true
        });

   const response = await prisma.pokemon.delete({where:{id:newPokemon.id}});
   expect(response.id).toBe(newPokemon.id);

   const deletedPokemon = await prisma.pokemon.findUnique({
     where: { id: newPokemon.id },
   });

   expect(deletedPokemon).toBeNull();
 });

 it("should return an error if the Pokemon ID is invalid", async () => {
   const invalidId = 99999; // An ID that doesn't exist in the database
try {
   await prisma.pokemon.delete({where:{id:invalidId}});
} catch (error) {
  expect(error.code).toBe('P2025'); // Code from prisma response
  
}
 });
});