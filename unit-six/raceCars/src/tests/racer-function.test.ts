import { SolarCar } from "../classes/SolarCar";
import { GasCar } from "../classes/GasCar";
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../functions/racer-functions";

test("findRacersWithEmptyFuel", () => {
  const solarCar = new SolarCar("Solar Team");
  const gasCar1 = new GasCar("Gas Team 1", 0);
  const gasCar2 = new GasCar("Gas Team 2", 5);
  const racers = [solarCar, gasCar1, gasCar2];

  expect(findRacersWithEmptyFuel(racers)).toEqual([gasCar1]);
});

test("findAverageSpeed", () => {
  const car1 = new GasCar("Car 1", 10);
  car1.accelerate(); // Speed = 2
  const car2 = new SolarCar("Car 2");
  car2.accelerate(); // Speed = 1

  expect(findAverageSpeed([car1, car2])).toBe(1.5);
  expect(findAverageSpeed([])).toBe(0);
});

test("getFasterRacer", () => {
  const car1 = new GasCar("Car 1", 10);
  car1.accelerate(); // Speed = 2
  const car2 = new SolarCar("Car 2");
  car2.accelerate(); // Speed = 1

  expect(getFasterRacer(car1, car2)).toBe(car1);
  expect(getFasterRacer(car2, car2)).toBeNull();
});
