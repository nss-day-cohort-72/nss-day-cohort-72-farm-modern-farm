

export const Catalog = (harvestedPlant) => {
    const container = document.querySelector(".container");

    harvestedPlant.forEach (plant => {
        const section = document.createElement('section');
        section.classList.add('plant');
        section.textContent = `${plant.icon} `;
        container.appendChild(section);


    });

}