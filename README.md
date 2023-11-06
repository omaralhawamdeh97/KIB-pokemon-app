# Pokemon_Go Data App

The "Pokemon_Go Data" app is a Node.js-based API for managing and retrieving information about Pokémon from the Pokémon Go game. It uses Prisma as an ORM to interact with a PostgreSQL database. This README provides detailed instructions for setting up and running the application.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your system:
- docker-compose 

## Installation

To start the application using `docker-compose`, follow these steps:

1. Clone this repository to your local machine:
   git clone https://github.com/your-username/pokemon-go-data.git

2. Navigate to the project directory:
   cd pokemon-go-data

3. Start the application and the PostgreSQL database using `docker-compose`:
   docker-compose up

This command will start both the application and the database. The application will automatically import data from the provided Excel sheet into the PostgreSQL database. Ensure that the `pokemonData.xlsx` file is located in the root directory.

## Usage

API Endpoints

The API provides the following endpoints:

- GET /pokemons: Retrieve a list of Pokémon.
- GET /pokemons/:id: Retrieve a specific Pokémon by ID.
- POST /pokemons: Create a new Pokémon.
- PUT /pokemons/:id: Update an existing Pokémon.
- DELETE /pokemons/:id: Delete a Pokémon by ID.
