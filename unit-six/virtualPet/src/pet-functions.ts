import VirtualPet from "./models/VirtualPet";
import Dog from "./models/Dog";
import Cat from "./models/Cat";

export function decay(pet: VirtualPet): void {
  pet.hunger = Math.min(100, pet.hunger + 5);
  pet.happiness = Math.max(0, pet.happiness - 5);
}

export function makePet(name: string, type: string): VirtualPet {
  if (type === "dog") return new Dog(name);
  if (type === "cat") return new Cat(name, "black");
  return new VirtualPet(name);
}