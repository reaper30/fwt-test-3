import { debounce } from "lodash";
import { useCallback, useState } from "react";
import ImgBlock from "../components/ImgBlock";
import Pagination from "../components/Pagination";
import SearchItem from "../components/Search";
import ImgSkeleton from "../components/Skeletons/ImgSkeleton";
import { useAuthors } from "../hooks/useAuthors";
import { useLocations } from "../hooks/useLocations";
import { usePaintings } from "../hooks/usePaintings";
import styles from "../scss/app.module.scss";

function Home() {
	const [searchValue, setSearchValue] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const paintingsPerPage = 6;

	const {
		data: paintingsData,
		totalPaintings,
		isFetching,
	} = usePaintings({
		q: searchValue,
		currentPage,
		limit: paintingsPerPage,
	});

	const { data: authorsData } = useAuthors();
	const { data: locationsData } = useLocations();

	const updateSearchValue = useCallback(
		debounce((value: string) => {
			setSearchValue(value);
			setCurrentPage(1);
		}, 250),
		[],
	);

	return (
		<>
			<SearchItem updateSearchValue={updateSearchValue} />

			<div className={styles.container}>
				<div className={styles.content}>
					{isFetching
						? [...Array.from({ length: paintingsPerPage })].map((_, i) => (
								<ImgSkeleton key={i} />
							))
						: paintingsData.data.map((painting) => (
								<ImgBlock
									paintings={painting}
									authorsData={authorsData}
									locationsData={locationsData}
									key={painting.id}
								/>
							))}
				</div>
			</div>
			<div className="pagination">
				<Pagination
					currentPage={currentPage}
					totalPaintings={totalPaintings}
					paintingsPerPage={paintingsPerPage}
					onChangePage={(number) => setCurrentPage(number)}
				/>
			</div>
		</>
	);
}

export default Home;
