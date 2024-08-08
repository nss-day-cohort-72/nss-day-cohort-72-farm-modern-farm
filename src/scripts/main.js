import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants} from "./harvester.js";
import { Catalog } from "./catalog.js";



const yearlyPlan = createPlan();
console.log("Welcome to the main module")

plantSeeds(yearlyPlan);


const usePlantsVariable= usePlants();

const harvestedPlants = harvestPlants(usePlantsVariable).sort((a,b)=> 
    a.type.localeCompare(b.type));
let filteredArray = []
const plantCounts = harvestedPlants.reduce((prev,curr) => {
    
    if (curr.type !== prev[prev.length -1].type) {
        curr.quantity = 1
        filteredArray.push(curr)

        
    }else{
        filteredArray.forEach(plant =>{
            if (plant.type === curr.type) {
                plant.quantity++;
            }
        })
    }
    return filteredArray;
},[{type:"none"}]);







Catalog(plantCounts);