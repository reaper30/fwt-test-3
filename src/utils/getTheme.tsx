export function getInitialTheme(): "light" | "dark" {
	if (typeof window === "undefined") {
		return "dark";
	}

	try {
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") {
			return saved;
		}
	} catch (error) {
		console.error(error);
	}
	const prefersLight
		= window.matchMedia("(prefers-color-scheme: light)")?.matches ?? false;
	return prefersLight ? "light" : "dark";
}
