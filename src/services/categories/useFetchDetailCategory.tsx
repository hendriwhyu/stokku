import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchDetailCategory = (id: string) => {
	const DETAIL_CATEGORY = `/api/categories/${id}`;

	const queryKey = [DETAIL_CATEGORY];

	const fetch = async () => {
		const { data } = await axios.get(DETAIL_CATEGORY);
		return data;
	};

	const { data, isPending } = useQuery({
		queryKey,
		queryFn: fetch,
	});

	return {
		dataCategories: data,
		isPendingCategories: isPending,
	};
};

export default useFetchDetailCategory;
