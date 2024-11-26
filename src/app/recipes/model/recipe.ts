export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id?: string;
  title: string;
  portions: number;
  ingredients: Ingredient[];
  caloriesPerPortion: number;
  proteinPerPortion: number;
  carbsPerPortion: number;
  fatsPerPortion: number;
  instructions: string;
  author: string;
  createdAt?: Date;
  tags?: string[];
  imageUrl?: string;
}
