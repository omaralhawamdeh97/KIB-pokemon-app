describe("updateService",()=>{
    const prisma = jestPrisma.client;

    const createPokemon = async (data) => {
        return await prisma.pokemon.create({
          data,
        });
      };
      

    it("should update a Pokemon's information", async () => {    
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

        const updatedData = {
          name: "test23",
          type1: "updated-Water",
        };
        await prisma.pokemon.update({
        where:{
            id:newPokemon.id
            },
        data:updatedData
    })        
          const updatedPokemon = await prisma.pokemon.findUnique({
              where: { id: newPokemon.id },
            });
        expect(updatedPokemon.name).toBe("test23");
        expect(updatedPokemon.type1).toBe("updated-Water");
      });
    
      it("should return an error if the Pokemon ID is invalid", async () => {
        try {
            const invalidId = 99999; // An ID that doesn't exist in the database
            const updatedData = {
              name: "updated-pokemon",
              type1: "Electric",
            };
           await prisma.pokemon.update({where:{id:invalidId},data:updatedData})        
        } catch (error) {
            expect(error.code).toBe('P2025'); // code from prisma
        }        
})

})