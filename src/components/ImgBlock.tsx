import type { Authors } from "../hooks/useAuthors";
import type { Locations } from "../hooks/useLocations";
import type { Paintings } from "../hooks/usePaintings";
import React from "react";
import styles from "../scss/app.module.scss";

interface ImgBlockProps {
	paintings: Paintings;
	authorsData: Authors[];
	locationsData: Locations[];
}

const ImgBlock: React.FC<ImgBlockProps> = ({
	paintings,
	authorsData,
	locationsData,
}) => {
	return (
		<>
			<div className={styles.img__block} key={paintings.id}>
				<img alt="" src={`${import.meta.env.BASE_URL}${paintings.imageUrl}`} />
				<div className={styles.img__header}>
					<div className={styles.img__header__title}>
						<h3>{paintings.name}</h3>
						<h4>{paintings.created}</h4>
					</div>
					<div className={styles.img__header__titlehover}>
						<h3>
							{authorsData.find((a) => a.id === paintings.authorId)?.name}
						</h3>
						<h4>
							{
								locationsData.find((l) => l.id === paintings.locationId)
									?.location
							}
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};
export default ImgBlock;
