# Pokemon_Go Data App

The "Pokemon_Go Data" app is a Node.js-based API for managing and retrieving information about Pokémon from the Pokémon Go game. It uses Prisma as an ORM to interact with a PostgreSQL database. This README provides detailed instructions for setting up and running the application.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your system:
- docker-compose 

## Installation

To start the application using `docker-compose`, follow these steps:

1. Clone this repository to your local machine:
   git clone https://github.com/omaralhawamdeh97/KIB-pokemon-app.git

2. Navigate to the project directory:
   cd KIB-pokemon-app

3. Start the application and the PostgreSQL database using `docker-compose`:
   sudo docker-compose up

This command will start both the application and the database. The application will automatically import data from the provided Excel sheet into the PostgreSQL database. Ensure that the `pokemonData.xlsx` file is located in the root directory.

## Usage

API Endpoints

The API provides the following endpoints:

- GET     localhost:8080:             Retrieve a list of Pokémon.
     This endpoint has the following query params:      
      - page:         Int
      - pageSize:     Int  //The default is 10
      - name:         String
      - legendary:    Int
      - type:         String
      - generation:   Int
  
- GET     localhost:8080/:id:         Retrieve a specific Pokémon by ID.
- POST    localhost:8080/:            Create a new Pokémon.
      There are required fields for creating a Pokemon here is an example of the required fields and their values:
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
- PUT     localhost:8080/:id:         Update an existing Pokémon.
- DELETE  localhost:8080/delete/:id:  Delete a Pokémon by ID.
