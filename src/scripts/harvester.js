let currentId = 1; // Initialize a variable to keep track of the unique ID

export const harvestPlants = (plants) => {
    const seeds = [];

    for (const plant of plants) {
        let numberOfSeedsToAdd;

        if (plant.type === "Corn") {
            numberOfSeedsToAdd = Math.floor(plant.output / 2);
        } else {
            numberOfSeedsToAdd = plant.output;
        }

        for (let i = 0; i < numberOfSeedsToAdd; i++) {
            // Create a new object for each seed with a unique ID
            const harvestedSeed = {
                ...plant,
                id: currentId++
            };
            seeds.push(harvestedSeed);
        }
    }

    return seeds;
};