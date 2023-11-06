const excel = require("exceljs");
const prisma = require("../../prisma");
const path = require('path');
const pokemonData = path.resolve(__dirname, '../../pokemonData.xlsx');

async function importData() {
  try {
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile(pokemonData);
    const worksheet = workbook.getWorksheet(1);
    const records = [];

    // Loop through rows and prepare records for insertion
    worksheet.eachRow(async (row, rowNumber) => {
      if (rowNumber === 1) return; // Skip the header row
      const [
        ,
        ,
        name,
        pokedexNumber,
        imgName,
        generation,
        evolutionStage,
        evolved,
        familyID,
        crossGen,
        type1,
        type2,
        weather1,
        weather2,
        statTotal,
        atk,
        def,
        sta,
        legendary,
        acquirable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        isNew,
        notGettable,
        futureEvolve,
        cpAt40,
        cpAt39,
      ] = row.values;

      const existingRecord = await prisma.pokemon.findFirst({
        where: {
          name: name,
        },
      });

      if (existingRecord) {
        console.log(existingRecord.name, "already exists in db");
        process.exit(0);
      }

      if (!existingRecord) {
      // Map columns to their respective fields in the database
        records.push({
          name,
          pokedexNumber,
          imgName: imgName?.toString(),
          generation,
          evolutionStage: evolutionStage?.toString(),
          evolved: evolved ? true : false,
          familyID,
          crossGen: crossGen ? true : false,
          type1,
          type2,
          weather1,
          weather2,
          statTotal,
          atk,
          def,
          sta,
          legendary,
          acquirable,
          spawns: spawns ? true : false,
          regional: regional ? true : false,
          raidable,
          hatchable,
          shiny: shiny ? true : false,
          nest: nest ? true : false,
          new: isNew ? true : false,
          notGettable: notGettable ? true : false,
          futureEvolve: futureEvolve ? true : false,
          cpAt40,
          cpAt39,
        });
      }

      if (records.length === worksheet.rowCount - 1) {
        try {
          console.log(`Importing data from ${pokemonData}`);
          await prisma.pokemon.createMany({
              data: records,
            })
            .then(console.log("Data imported successfully."));
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
  } 
}

importData();
