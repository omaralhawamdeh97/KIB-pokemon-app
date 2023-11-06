const request = require("supertest");
const app = require("../");

describe("createService", () => {
const prisma = jestPrisma.client;

test("Add pokemon", async () => {
        const createdUser = await prisma.pokemon.create({
          data: {
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
          }
        });
        expect(
          await prisma.pokemon.findFirst({
            where: {
              name: "new-pokemon",
            },
          }),
        ).toStrictEqual(createdUser);
      });
      });
    
   
    
    
    
  
    
  

    