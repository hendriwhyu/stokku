import { Category } from "@/types/category";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const useFetchUpdateCategory = () => {
	const UPDATE_CATEGORY = `/api/categories`;

	const mutationKey = [UPDATE_CATEGORY];

	const fetch = async ({
		id,
		body,
	}: {
		id: number;
		body: Partial<Category>;
	}) => {
		const res = await axios.put(`${UPDATE_CATEGORY}/${id}`, body);
		return res.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateUpdateCategory: mutateAsync,
		isPendingUpdateCategory: isPending,
	};
};

export default useFetchUpdateCategory;
