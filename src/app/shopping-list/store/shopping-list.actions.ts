import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_Ingredient = 'ADD_INGREDIENT'

export class ADD_INGREDIENT implements Action {
    readonly type = ADD_INGREDIENT
    payload: Ingredient
}