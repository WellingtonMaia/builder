import { MealBuilderProtocol } from "../../interfaces/meal-builder-protocol";
import { Beans } from "../dishes/beans";
import { Beverage } from "../dishes/beverage";
import { Dessert } from "../dishes/dessert";
import { Meat } from "../dishes/meat";
import { Rice } from "../dishes/rice";
import { MealBox } from "../meal-box";


export class MainDishBuilder implements MealBuilderProtocol {
  private __meal: MealBox = new MealBox();

  reset(): this {
    this.__meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz Temperado', 5.00);
    const beans = new Beans('Feijão Carioca', 7.50);
    const meat = new Meat('Alcatra', 10.00);
    this.__meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Coca-Cola', 5.00);
    this.__meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 4.00);
    this.__meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this.__meal;
  }

  getPrice(): number {
    return this.__meal.getPrice();
  }

}