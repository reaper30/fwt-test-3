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
				<img src={`${import.meta.env.BASE_URL}${paintings.imageUrl}`} />
				<div className={styles.img__header}>
					<div className={styles.img__header__title}>
						<p>{paintings.name}</p>
						<p>{paintings.created}</p>
					</div>
					<div className={styles.img__header__titlehover}>
						<p>{authorsData.find((a) => a.id === paintings.authorId)?.name}</p>
						<p>
							{
								locationsData.find((l) => l.id === paintings.locationId)
									?.location
							}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ImgBlock;
