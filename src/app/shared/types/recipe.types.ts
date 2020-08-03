import { Ingredient } from './ingredient.types';

export interface Recipe {
    name: string;
    ingredients: Ingredient[];
    steps: RecipeStep[];
}

export interface RecipeStep {
    id: string;
    sequence: number;
    description: string;
}

