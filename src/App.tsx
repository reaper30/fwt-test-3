import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFoundBlock from "./pages/NotFound";

interface SearchContextType {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
	searchValue: "",
	setSearchValue: () => {},
});

function App() {
	const [searchValue, setSearchValue] = useState("");

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<Home />} />
					<Route path="not-found" element={<NotFoundBlock />} />
					<Route path="*" element={<NotFoundBlock />} />
				</Route>
			</Routes>
		</SearchContext.Provider>
	);
}

export default App;
