import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
export const plantSeeds = (plan) => {
    plan.forEach(row => {
        row.forEach(foodType => {
            let seed;
            switch (foodType) {
                case "Asparagus":
                    seed = createAsparagus();
                    break;
                case "Corn":
                    seed = createCorn();
                    break;
                case "Soybean":
                    seed = createSoybean();
                    break;
                case "Wheat":
                    seed = createWheat();
                    break;
                case "Potato":
                    seed = createPotato();
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    break;
            }
            addPlant(seed);
        });
    });
};
