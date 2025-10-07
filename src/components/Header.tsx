import { Moon, Sun } from "lucide-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import logo_dark from "../assets/logo_dark.svg";
import logo_light from "../assets/logo_light.svg";
import headerStyles from "../scss/components/header.module.scss";
import { getInitialTheme } from "../utils/getTheme";
import SearchItem from "./Search";
import { debounce } from "lodash";
import { SearchContext } from "../App";
import styles from "../scss/app.module.scss";

function Header() {
	const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());
	const { setSearchValue } = useContext(SearchContext);

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

	const updateSearchValue = useCallback(
		debounce((value: string) => {
			setSearchValue(value);
		}, 250),
		[],
	);

	return (
		<>
			<header className={headerStyles.header}>
				<div className={headerStyles.header__container}>
					<Link to="/" className={headerStyles.header__logo}>
						<span>
							<img
								src={theme === "dark" ? logo_light : logo_dark}
								alt="FWT logo"
							/>
						</span>
					</Link>
					<div className={headerStyles.header__theme} onClick={toggleTheme}>
						{theme === "light" ? <Moon /> : <Sun />}
					</div>
					<div className={styles.search}>
						<SearchItem updateSearchValue={updateSearchValue} />
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
