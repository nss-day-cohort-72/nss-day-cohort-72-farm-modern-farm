let plantsInField = [];

export const addPlant = (seedObj)=>{
    if(Array.isArray(seedObj)){
        seedObj.forEach(obj => {
            plantsInField.push(obj);
            
        });
    }else{  
        plantsInField.push(seedObj);
    }
}

export const usePlants = () =>{
    return plantsInField.map(plants =>({...plants}))
}

