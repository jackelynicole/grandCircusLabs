import Cat from "../src/models/Cat";

describe("Cat", () => {
  test("Constructor initializes correctly", () => {
    const cat = new Cat("Whiskers", "orange");
    expect(cat.name).toBe("Whiskers");
    expect(cat.color).toBe("orange");
    expect(cat.hunger).toBe(50);
    expect(cat.happiness).toBe(50);
  });

  test("getAttitude returns correct attitude", () => {
    const cat = new Cat("Whiskers");
    cat.happiness = 60;
    cat.hunger = 40;
    expect(cat.getAttitude()).toBe("inquisitive");

    cat.hunger = 60;
    expect(cat.getAttitude()).toBe("grumpy");

    cat.happiness = 50;
    expect(cat.getAttitude()).toBe("grumpy");
  });

  test("describe returns full description", () => {
    const cat = new Cat("Whiskers", "white");
    expect(cat.describe()).toBe(
      "Name: Whiskers, Hunger: 50, Happiness: 50, Color: white, Attitude: grumpy"
    );
  });
});