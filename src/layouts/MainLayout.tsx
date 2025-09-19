import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "../scss/app.module.scss";

export const MainLayout: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;
