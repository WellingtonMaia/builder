import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { VeganDishBuilder } from "./standard-dishes/vegan-dish-builder";

export class VeganMealDirector implements MealBuilderProtocol {
  makeMeal(): this {
    const meal = new VeganDishBuilder();
    meal.makeMeal();
    console.log(meal.getMeal());
    console.log("Price: " + meal.getPrice());
    return this;
  }

}