export function showHealthColor(character) {
	if (character.health >= 50) {
		return "healthy";
	} else if (character.health >= 15 && character.health <= 50) {
		return "wounded";
	}
	return "critical";
}
