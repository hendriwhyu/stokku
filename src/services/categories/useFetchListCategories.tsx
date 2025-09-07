import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchListCategories = () => {
	const CATEGORIES_URL = "/api/categories";

	const queryKey = [CATEGORIES_URL];

	const fetch = async (): Promise<Category[]> => {
		const { data } = await axios.get(CATEGORIES_URL);
		return data;
	};

	const { data, isPending, refetch } = useQuery({
		queryKey,
		queryFn: fetch,
	});

	return {
		dataCategories: data,
		isPendingCategories: isPending,
		refetch,
	};
};

export default useFetchListCategories;
