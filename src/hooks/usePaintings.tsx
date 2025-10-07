import { useQuery } from "@tanstack/react-query";
import { ApiRoutes } from "../services/constans";
import { axiosInstance } from "../services/instance";

export interface Paintings {
	authorId: number;
	created: number;
	id: number;
	imageUrl: string;
	locationId: number;
	name: string;
}

interface SearchQuery {
	q?: string;
	currentPage: number;
	limit: number; // сколько картин на странице
}

export interface PaintingsResponse {
	data: Paintings[];
	totalPaintings: number;
}

async function getPaintings({
	q,
	currentPage,
	limit,
}: SearchQuery): Promise<PaintingsResponse> {
	const res = await axiosInstance.get<Paintings[]>(`${ApiRoutes.PAINTINGS}`, {
		params: {
			q,
			_page: currentPage,
			_limit: limit,
		},
	});
	const totalPaintings = Number(res.headers["x-total-count"] ?? 0);

	return {
		data: res.data,
		totalPaintings,
	};
}

export function usePaintings(query: SearchQuery) {
	const { data, isFetching, isSuccess } = useQuery({
		queryKey: ["paintings", query],
		queryFn: () => getPaintings(query),
		initialData: { data: [], totalPaintings: 0 },
	});

	return {
		data,
		totalPaintings: data.totalPaintings,
		isSuccess,
		isFetching,
	};
}
