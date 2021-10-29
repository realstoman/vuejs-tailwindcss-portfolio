import { ref } from '@vue/reactivity';

export default function useThemeSwitcher() {
	const currentTheme = ref('light');

	function toggleTheme() {
		if (currentTheme.value == 'dark') {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	}

	// Light Theme Function
	function setLightTheme() {
		currentTheme.value = 'light';

		process.isClient && localStorage.setItem('theme', 'light');
	}

	// Dark Theme Function
	function setDarkTheme() {
		currentTheme.value = 'dark';

		process.isClient && localStorage.setItem('theme', 'dark');
	}

	return {
		toggleTheme,
	};
}
