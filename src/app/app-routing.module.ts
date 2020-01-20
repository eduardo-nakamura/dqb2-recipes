import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomRecipeComponent,FoodRecipesComponent } from './recipes'
// import { RoomRecipeComponent } from './recipes/room-recipe/room-recipe.component'
const routes: Routes = [
  { path: 'room-recipes', component: RoomRecipeComponent },
  { path: 'food-recipes', component: FoodRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
