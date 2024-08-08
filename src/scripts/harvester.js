export const harvestPlants = (plants) => {      //from Field module usePlant() that returns a copy of the array of plants
    const seeds = []
  
    for (const plant of plants) {
        if (plant.type === "Corn") {
            const numberOfSeedsToAdd = Math.floor(plant.output /2)
            for (let i = 0; i < numberOfSeedsToAdd; i++) {
                seeds.push(plant);
            }
        }else {
            for (let i = 0; i <plant.output; i++){
                seeds.push(plant)
            }
        }
    }

    return seeds
}