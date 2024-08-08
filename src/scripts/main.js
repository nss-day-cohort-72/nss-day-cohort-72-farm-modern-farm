import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js";


const yearlyPlan = createPlan();
console.log("Welcome to the main module")

plantSeeds(yearlyPlan);


const usePlantsVariable= usePlants();

// const harvestedPlants = harvestPlants(usePlantsVariable);

