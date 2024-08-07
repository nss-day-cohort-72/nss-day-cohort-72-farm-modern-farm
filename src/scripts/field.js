let plantsInField = []

export const addPlant = (seed) => {
    plantsInField.push(seed)
    return plantsInField
}

export const usePlants = () => {
   return plantsInField.map(plant => ({...plant}))
}