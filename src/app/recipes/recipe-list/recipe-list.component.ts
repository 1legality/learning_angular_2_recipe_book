import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // Observer emitter for recipe detail
  @Output() recipeSelected = new EventEmitter();
  // Create a dummy receipe
  recipe = new Recipe('Dummy', 'Dummy', 'https://rlv.zcache.com/crash_test_dummy_marker_classic_round_sticker-r8b36e2d5c0f74a4c843565523094b867_v9wth_8byvr_324.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
