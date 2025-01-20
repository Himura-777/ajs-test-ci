import { sort } from "../showAllHealthColor";
import { showAllHealthColor } from "../showAllHealthColor";

const characters = [
	{ name: "мечник", health: 10 },
	{ name: "маг", health: 100 },
	{ name: "лучник", health: 80 },
];

const charactersSorted = [
	{ name: "маг", health: 100 },
	{ name: "лучник", health: 80 },
	{ name: "мечник", health: 10 },
];

test("showing health color", () => {
	const result = sort(characters);
	expect(result).toEqual(charactersSorted);
});

test("showLifeColor status - healthy", () => {
	for (let i = 0; i < characters.length; i++) {
		characters[i] = { name: "мечник", health: 100 };

		const result = showAllHealthColor(characters);

		expect(result).toBe("healthy");
	}
});

test("showLifeColor status - wounded", () => {
	for (let i = 0; i < characters.length; i++) {
		characters[i] = { name: "лучник", health: 40 };

		const result = showAllHealthColor(characters);

		expect(result).toBe("wounded");
	}
});

test("showLifeColor status - critical", () => {
	for (let i = 0; i < characters.length; i++) {
		characters[i] = { name: "мечник", health: 10 };

		const result = showAllHealthColor(characters);

		expect(result).toBe("critical");
	}
});
