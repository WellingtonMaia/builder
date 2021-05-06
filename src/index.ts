
import { MainMealDirector } from "./classes/main-meal-director";
import { VeganMealDirector } from "./classes/vegan-meal-director";

console.log("-------------------FIRST ORDER------------------");
new MainMealDirector().makeMeal();

console.log("-------------------SECOND ORDER------------------");
new MainMealDirector().makeMeal();

console.log("-------------------THIRD ORDER------------------");
new VeganMealDirector().makeMeal();

console.log("-------------------FOURTH ORDER------------------");
new VeganMealDirector().makeMeal();