import { showHealthColor } from "../showHealthColor";

test("showLifeColor status - healthy", () => {
	const character = { name: "Маг", health: 90 };

	const result = showHealthColor(character);

	expect(result).toBe("healthy");
});

test("showLifeColor status - wounded", () => {
	const character = { name: "Маг", health: 40 };

	const result = showHealthColor(character);

	expect(result).toBe("wounded");
});

test("showLifeColor status - critical", () => {
	const character = { name: "Маг", health: 10 };

	const result = showHealthColor(character);

	expect(result).toBe("critical");
});
