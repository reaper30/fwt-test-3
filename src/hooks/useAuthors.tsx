import { useQuery } from "@tanstack/react-query";
import { ApiRoutes } from "../services/constans";
import { axiosInstance } from "../services/instance";

export interface Authors {
	id: number;
	name: string;
}

async function getAuthors() {
	return (await axiosInstance.get<Authors[]>(`${ApiRoutes.AUTHORS}`)).data;
}

export function useAuthors() {
	const { data, isError, isSuccess } = useQuery({
		queryKey: ["authors"],
		queryFn: getAuthors,
		initialData: [],
	});
	return { data, isSuccess, isError };
}
