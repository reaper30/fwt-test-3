import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo_dark from "../assets/logo_dark.svg";
import logo_light from "../assets/logo_light.svg";
import headerStyles from "../scss/components/header.module.scss";

function Header() {
	const getInitialTheme = (): "light" | "dark" => {
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
		const prefersLight =
			window.matchMedia("(prefers-color-scheme: light)")?.matches ?? false;
		return prefersLight ? "light" : "dark";
	};

	const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("theme", theme);
		} catch (error) {
			console.error(error);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.container}>
				<Link to="/">
					<span className={headerStyles.container__logo}>
						<img
							src={theme === "dark" ? logo_light : logo_dark}
							alt="FWT logo"
						/>
					</span>
				</Link>
				<div className={headerStyles.header__theme} onClick={toggleTheme}>
					{theme === "light" ? <Moon /> : <Sun />}
				</div>
			</div>
		</header>
	);
}

export default Header;
