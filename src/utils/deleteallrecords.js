const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function clearAllRecords() {
  try {
    await prisma.pokemon.deleteMany().then(
      console.log("All records deleted successfully.")
    );

  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await prisma.$disconnect();
  }
}

clearAllRecords();
