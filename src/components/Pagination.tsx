import React from "react";
import ReactPaginate from "react-paginate";
import styles from "../scss/app.module.scss";

interface PaginationProps {
	currentPage: number;
	paintingsPerPage: number;
	totalPaintings: number;
	onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	paintingsPerPage,
	totalPaintings,
	onChangePage,
}) => {
	const pageCount = Math.ceil(totalPaintings / paintingsPerPage);

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={e => onChangePage(e.selected + 1)}
			pageCount={pageCount}
			forcePage={currentPage - 1}
		/>
	);
};

export default Pagination;
