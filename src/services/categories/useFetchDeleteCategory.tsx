import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useFetchDeleteCategory = () => {
	const DELETE_CATEGORY = `/api/categories`;

	const mutationKey = [DELETE_CATEGORY];

	const fetch = async ({ id }: { id: number }) => {
		const res = await axios.delete(`${DELETE_CATEGORY}/${id}`);
		return res.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateDeleteCategory: mutateAsync,
		isPendingDeleteCategory: isPending,
	};
};

export default useFetchDeleteCategory;
