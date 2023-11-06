-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pokedexNumber" INTEGER NOT NULL,
    "imgName" TEXT,
    "generation" INTEGER NOT NULL,
    "evolutionStage" TEXT,
    "evolved" BOOLEAN,
    "familyID" INTEGER,
    "crossGen" BOOLEAN,
    "type1" TEXT NOT NULL,
    "type2" TEXT,
    "weather1" TEXT NOT NULL,
    "weather2" TEXT,
    "statTotal" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "sta" INTEGER NOT NULL,
    "legendary" INTEGER,
    "acquirable" INTEGER,
    "spawns" BOOLEAN,
    "regional" BOOLEAN,
    "raidable" INTEGER,
    "hatchable" INTEGER,
    "shiny" BOOLEAN,
    "nest" BOOLEAN,
    "new" BOOLEAN,
    "notGettable" BOOLEAN,
    "futureEvolve" BOOLEAN,
    "cpAt40" INTEGER NOT NULL,
    "cpAt39" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_id_key" ON "Pokemon"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");
