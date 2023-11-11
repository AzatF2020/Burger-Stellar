
export const countFeedIngredients = (ingredients, ingredientId) => {
  return ingredients?.filter((ingredient) => ingredient?._id === ingredientId).length
}

