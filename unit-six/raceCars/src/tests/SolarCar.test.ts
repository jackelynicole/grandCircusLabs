import { SolarCar } from "../classes/SolarCar";

test("SolarCar properties and methods", () => {
  const car = new SolarCar("Team Solar");
  expect(car.team).toBe("Team Solar");
  expect(car.speed).toBe(0);

  car.accelerate();
  expect(car.speed).toBe(1);

  car.accelerate();
  expect(car.speed).toBe(2);

  expect(car.isFuelEmpty()).toBe(false);
});
