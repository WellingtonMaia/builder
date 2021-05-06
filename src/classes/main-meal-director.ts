import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MainDishBuilder } from "./standard-dishes/main-dish-builder";

export class MainMealDirector implements MealBuilderProtocol {
  makeMeal(): this {
    const meal = new MainDishBuilder();
    meal.makeMeal().makeBeverage().makeDessert();
    console.log(meal.getMeal());
    console.log("Price: " + meal.getPrice());
    return this;
  }

}