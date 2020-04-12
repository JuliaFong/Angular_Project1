import { NgModule, Component } from '@angular/core';
import { Routes } from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({

})
export class AppRoutingModule {

}