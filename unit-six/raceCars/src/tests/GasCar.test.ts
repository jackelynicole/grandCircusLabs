import { GasCar } from "../classes/GasCar";

test("GasCar properties and methods", () => {
  const car = new GasCar("Team Gas", 5);
  expect(car.team).toBe("Team Gas");
  expect(car.speed).toBe(0);
  expect(car.fuel).toBe(5);

  const defaultFuelCar = new GasCar("Default Team");
  expect(defaultFuelCar.fuel).toBe(10);

  car.accelerate();
  expect(car.speed).toBe(2);
  expect(car.fuel).toBe(4);

  car.accelerate();
  expect(car.speed).toBe(4);
  expect(car.fuel).toBe(3);

  expect(car.isFuelEmpty()).toBe(false);

  car.fuel = 0;
  expect(car.isFuelEmpty()).toBe(true);
});
