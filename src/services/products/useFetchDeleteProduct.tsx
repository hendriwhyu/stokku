import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useFetchDeleteProduct = () => {
	const DELETE_PRODUCT = `/api/products`;

	const mutationKey = [DELETE_PRODUCT];

	const fetch = async ({ id }: { id: number }) => {
		const res = await axios.delete(`${DELETE_PRODUCT}/${id}`);
		return res.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateDeleteProduct: mutateAsync,
		isPendingDeleteProduct: isPending,
	};
};

export default useFetchDeleteProduct;
