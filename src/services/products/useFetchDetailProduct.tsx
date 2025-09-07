import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchDetailProduct = (id: string) => {
	const DETAIL_PRODUCT = `/api/products/${id}`;

	const queryKey = [DETAIL_PRODUCT];

	const fetch = async () => {
		const { data } = await axios.get(DETAIL_PRODUCT);
		return data;
	};

	const { data, isPending } = useQuery({
		queryKey,
		queryFn: fetch,
	});

	return {
		dataProduct: data,
		isPendingProduct: isPending,
	};
};

export default useFetchDetailProduct;
