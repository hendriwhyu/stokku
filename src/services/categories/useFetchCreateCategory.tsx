import { Category } from "@/types/category";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useFetchCreateCategory = () => {
	const CREATE_CATEGORY = "/api/categories";

	const mutationKey = [CREATE_CATEGORY];

	const fetch = async (body: Category) => {
		const res = await axios.post(CREATE_CATEGORY, body);
		return res.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateCreateCategory: mutateAsync,
		isPendingCreateCategory: isPending,
	};
};

export default useFetchCreateCategory;
