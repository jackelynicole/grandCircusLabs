import { makePet } from "../src/pet-functions";
import Dog from "../src/models/Dog";
import Cat from "../src/models/Cat";
import VirtualPet from "../src/models/VirtualPet";

describe("makePet", () => {
  test("Returns a Dog instance", () => {
    const pet = makePet("Buddy", "dog");
    expect(pet).toBeInstanceOf(Dog);
    expect(pet.name).toBe("Buddy");
  });

  test("Returns a Cat instance", () => {
    const pet = makePet("Whiskers", "cat");
    expect(pet).toBeInstanceOf(Cat);
    expect(pet.name).toBe("Whiskers");
  });

  test("Returns a VirtualPet instance for unknown type", () => {
    const pet = makePet("Generic", "unknown");
    expect(pet).toBeInstanceOf(VirtualPet);
    expect(pet.name).toBe("Generic");
  });
});