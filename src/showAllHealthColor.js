export function sort(characters) {
	const charactersSorted = characters.sort((a, b) => b.health - a.health);
	return charactersSorted;
}

export function showAllHealthColor(characters) {
	for (let i = 0; i < charactersSorted.length; i++) {
		if (characters[i].health >= 50) {
			return "healthy";
		} else if (characters[i].health >= 15 && characters[i].health <= 50) {
			return "wounded";
		}
		return "critical";
	}
}
