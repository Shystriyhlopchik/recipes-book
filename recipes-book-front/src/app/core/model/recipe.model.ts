export interface Recipe {

    id?: number;
    title?: string;
    ingredients?: string;
    tags?: string;
    imageUrl?: string;
    category?: string;
    cookingTime?: number;
    prepTime?: number;
    yield?: number;
    steps?: string;
    rating?:number;
}

