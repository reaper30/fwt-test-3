import React from "react";
import styles from "../scss/components/not-found-block.module.scss";

const NotFoundBlock: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>Ничего не найдено😔</h1>
			<p className={styles.description}>
				К сожалению, данная страница отсутствует
			</p>
		</div>
	);
};

export default NotFoundBlock;
