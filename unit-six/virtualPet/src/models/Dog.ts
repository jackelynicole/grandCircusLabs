import VirtualPet from "./VirtualPet";

export default class Dog extends VirtualPet {
    play() {
        this.happiness = Math.min(100, this.happiness + 15);
    }
}