export const barn = () => {
    let storageBarn = [];
    
    return {
        push: (crop) => {
            storageBarn.push(crop);
        },
        pop: () => {
            return storageBarn.pop()
        },
        peek: () => {
            return storageBarn.peek()
        },
    }
}