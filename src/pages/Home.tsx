import qs from "qs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ImgBlock from "../components/ImgBlock";
import Pagination from "../components/Pagination";
import ImgSkeleton from "../components/Skeletons/ImgSkeleton";
import { useAuthors } from "../hooks/useAuthors";
import { useLocations } from "../hooks/useLocations";
import { usePaintings } from "../hooks/usePaintings";
import styles from "../scss/app.module.scss";
import { SearchContext } from "../App";

function Home() {
	const navigate = useNavigate();
	const { searchValue } = useContext(SearchContext);
	const [currentPage, setCurrentPage] = useState(1);
	const paintingsPerPage = 6;

	const {
		data: paintingsData,
		totalPaintings,
		isFetching,
		isSuccess,
	} = usePaintings({
		q: searchValue,
		currentPage,
		limit: paintingsPerPage,
	});
	const { data: authorsData } = useAuthors();
	const { data: locationsData } = useLocations();

	//useEffect(() => {
	//	const queryString = qs.stringify({
	//		q: searchValue,
	//		currentPage,
	//	});
	//	if (isSuccess && paintingsData && paintingsData.data.length === 0) {
	//		// перенаправить
	//		navigate("/not-found", { replace: true });
	//	}
	//}, []);

	return (
		<>
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
			{isSuccess && (
				<div className="pagination">
					<Pagination
						currentPage={currentPage}
						totalPaintings={totalPaintings}
						paintingsPerPage={paintingsPerPage}
						onChangePage={(number) => setCurrentPage(number)}
					/>
				</div>
			)}
		</>
	);
}

export default Home;
