import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants} from "./harvester.js";



const yearlyPlan = createPlan();
console.log("Welcome to the main module")

plantSeeds(yearlyPlan);


const usePlantsVariable= usePlants();

// const harvestedPlants = harvestPlants(usePlantsVariable);

