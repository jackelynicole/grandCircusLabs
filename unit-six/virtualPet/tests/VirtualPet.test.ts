import VirtualPet from "../src/models/VirtualPet";

describe("VirtualPet", () => {
  test("initializes properties correctly", () => {
    const pet = new VirtualPet("Fluffy");
    expect(pet.name).toBe("Fluffy");
    expect(pet.hunger).toBe(50);
    expect(pet.happiness).toBe(50);
  });

  test("describe method returns correct string", () => {
    const pet = new VirtualPet("Fluffy");
    expect(pet.describe()).toBe("Name: Fluffy, Hunger: 50, Happiness: 50");
  });

  test("getSatisfaction method calculates satisfaction correctly", () => {
    const pet = new VirtualPet("Fluffy");
    pet.hunger = 40;
    pet.happiness = 60;
    expect(pet.getSatisfaction()).toBe(20);
  });

  test("makeSound method returns correct string", () => {
    const pet = new VirtualPet("Fluffy");
    expect(pet.makeSound("woof")).toBe("Fluffy says woof");
  });

  test("feed method decreases hunger but does not go below 0", () => {
    const pet = new VirtualPet("Fluffy");
    pet.feed();
    expect(pet.hunger).toBe(40);
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.hunger).toBe(0);
  });

  test("play method increases happiness but does not go above 100", () => {
    const pet = new VirtualPet("Fluffy");
    pet.play();
    expect(pet.happiness).toBe(60);
    for (let i = 0; i < 10; i++) {
      pet.play();
    }
    expect(pet.happiness).toBe(100);
  });
});
