export const countOrderIngredients = (data: any): number => {
    const fixedItemsCount = 5
    let arrayLength: number = 0

    if(data.length >= fixedItemsCount + 1) {
        arrayLength = data.slice(fixedItemsCount).length
    }

    return arrayLength
}