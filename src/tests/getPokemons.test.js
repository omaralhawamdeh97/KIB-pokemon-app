const request = require("supertest");
const app = require("../");

describe("getService", () => {

    it("should return legendary pokemons", async () => {
          const response = await request(app).get("/").query({ legendary: 0 });
          // Expect a successful response with all the legendary Pokemons
          expect(response.status).toBe(200);
          expect(response.body.data.totalRecords).toBe(742); // Should return only one legendary Pokemon
        }); 

    it("should return pokemon with id = 1", async () => {
          const response = await request(app).get("/1");
          // Expect a successful response with all the legendary Pokemons
          expect(response.status).toBe(200);
          expect(response.body.data.id).toBe(1); // Should return only one legendary Pokemon
        }); 
})
    
   
    
    
    
  
    
  

    