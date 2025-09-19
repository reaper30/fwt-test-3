import ContentLoader from "react-content-loader";

function ImgSkeleton() {
	return (
		<ContentLoader
			speed={3}
			width={392}
			height={260}
			viewBox="0 0 392 260"
			backgroundColor="#ecebeb"
			foregroundColor="#d4d4d4"
		>
			<rect x="0" y="0" rx="0" ry="0" width="392" height="260" />
		</ContentLoader>
	);
}

export default ImgSkeleton;
