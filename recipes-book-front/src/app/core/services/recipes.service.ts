import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { environment } from 'src/environments/environment';
import {
  BehaviorSubject,
} from 'rxjs';
const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: ''});

  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  recipes$ = this.http
    .get<Recipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) {}

  updateFilter(criteria: Recipe) {
    console.log(criteria);
    this.filterRecipeSubject.next(criteria);
  }
}
