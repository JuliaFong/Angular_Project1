import { Ingredient } from '../shared/ingredient.model'

const intialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 8)
    ]
}

export function shoppingListReducer(state = intialState, action) {
    
}