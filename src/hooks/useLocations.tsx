import { useQuery } from "@tanstack/react-query";
import { ApiRoutes } from "../services/constans";
import { axiosInstance } from "../services/instance";

export interface Locations {
	id: number;
	location: string;
}

async function getLocations() {
	return (await axiosInstance.get<Locations[]>(`${ApiRoutes.LOCATIONS}`)).data;
}

export function useLocations() {
	const { data, isError, isSuccess } = useQuery({
		queryKey: ["locations"],
		queryFn: getLocations,
		initialData: [],
	});

	return { data, isSuccess, isError };
}
