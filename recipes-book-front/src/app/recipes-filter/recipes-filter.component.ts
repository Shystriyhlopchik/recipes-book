import { Component } from '@angular/core';
import { Recipe } from '../core/model/recipe.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../core/services/recipes.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.css',
})
export class RecipesFilterComponent {
  recipeForm = this.fb.group<Recipe>({
    title: '',
    category: '',
    ingredients: '',
    tags: '',
    prepTime: undefined,
    cookingTime: undefined,
  });

  constructor(
    private service: RecipesService,
    private fb: FormBuilder,
  ) {}

  filterResults() {
    this.service.updateFilter(<Recipe>this.recipeForm.value);
  }

  clearFilters() {
    this.recipeForm.reset();
  }
}
