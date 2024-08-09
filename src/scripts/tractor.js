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
                    seed.icon = "🥬"
                    break;
                case "Corn":
                    seed = createCorn();
                    seed.forEach(corn => {
                        
                        corn.icon = "🌽"
                    });
                    break;
                case "Soybean":
                    seed = createSoybean();
                    seed.icon = "🫛"
                    break;
                case "Wheat":
                    seed = createWheat();
                    seed.icon = "🌾"
                    break;
                case "Potato":
                    seed = createPotato();
                    seed.icon = "🥔"
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    seed.icon = "🌻"
                    break;
            }
            addPlant(seed);
        });
    });
};
