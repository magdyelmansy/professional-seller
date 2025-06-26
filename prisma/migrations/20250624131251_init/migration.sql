-- CreateTable
CREATE TABLE "Landing" (
    "id" INTEGER NOT NULL,
    "header" TEXT NOT NULL,
    "headerDescription" TEXT NOT NULL,
    "tipSectionTitle" TEXT NOT NULL,
    "tipSectionDescription" TEXT NOT NULL,
    "goalSection" JSONB NOT NULL,
    "featuresSection" JSONB NOT NULL,
    "citiesSection" JSONB NOT NULL,
    "sliderSection" JSONB NOT NULL,
    "operatingEntitiesSection" JSONB NOT NULL,

    CONSTRAINT "Landing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registered" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Registered_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Landing_id_key" ON "Landing"("id");
