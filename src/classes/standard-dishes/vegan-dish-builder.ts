import { MealBuilderProtocol } from "../../interfaces/meal-builder-protocol";
import { Beans } from "../dishes/beans";
import { Beverage } from "../dishes/beverage";
import { Dessert } from "../dishes/dessert";
import { Rice } from "../dishes/rice";
import { MealBox } from "../meal-box";

export class VeganDishBuilder implements MealBuilderProtocol {
  private __meal: MealBox = new MealBox();

  reset(): this {
    this.__meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5.00);
    const beans = new Beans('Feijão Carioca', 7.50);
    const salad = new Beans('Salada', 10.00);
    this.__meal.add(rice, beans, salad);
    return this;
  }

  getMeal(): MealBox {
    return this.__meal;
  }

  getPrice(): number {
    return this.__meal.getPrice();
  }

}