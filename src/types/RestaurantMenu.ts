export interface RestaurantMenu {
  monday: Dish[];
  tuesday: Dish[];
  wednesday: Dish[];
  thursday: Dish[];
  friday: Dish[];
}

export interface Dish {
  index: number;
  dish: string;
  type: "vegetarian" | "standard";
}