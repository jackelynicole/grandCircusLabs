import VirtualPet from "./VirtualPet";

export default class Cat extends VirtualPet {
  color: string;

  constructor(name: string, color: string = "black") {
    super(name);
    this.color = color;
  }

  getAttitude(): string {
    const satisfaction = this.getSatisfaction();
    return satisfaction > 0 ? "inquisitive" : "grumpy";
  }

  describe(): string {
    return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Color: ${this.color}, Attitude: ${this.getAttitude()}`;
  }
}
