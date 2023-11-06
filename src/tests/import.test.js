describe("importing from excel test",()=>{
const prisma = jestPrisma.client;

    test("Count pokemons ensuring that import was successful", async () => {
            expect(await prisma.pokemon.count()).toBe(822);
          });    
})