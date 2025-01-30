import Dog from "../src/models/Dog";

describe("Dog", () => {
    test("Constructor initializes correctly", () => {
        const dog = new Dog("Buddy");
        expect(dog.name).toBe("Buddy");
        expect(dog.hunger).toBe(50);
        expect(dog.happiness).toBe(50);
    });

    test("play method increases happiness by 15", () => {
        const dog = new Dog("Buddy");
        dog.play();
        expect(dog.happiness).toBe(65);
    });

    test("play method does not exceed 100 happiness", () => {
        const dog = new Dog("Buddy");
        dog.happiness = 95;
        dog.play();
        expect(dog.happiness).toBe(100);
    });
});