let plantsInField = []

export const addPlant = (seed) => {
    plantsInField.push(seed)
    return plantsInField
}

export const usePlant = () => {
   return plantsInField.map(plant => ({...plant}))
}