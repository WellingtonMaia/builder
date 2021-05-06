import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {

  private readonly __children: Array<MealCompositeProtocol> = [];

  getPrice(): number {
    return this.__children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this.__children.push(item));
  }
}