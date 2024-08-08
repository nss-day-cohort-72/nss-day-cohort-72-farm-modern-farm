import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js";

const yearlyPlan = createPlan();

console.log("Welcome to the main module")

const seed = [{
    type: "corn",
    height: 3,
    output: 4,
},{
    type:"corn",
    height: 3,
    output: 4
}];

addPlant(seed);

const usePlantsVariable= usePlants();
console.log(usePlantsVariable);


