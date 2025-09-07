import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchListProducts = () => {
	const PRODUCTS_URL = "/api/products";

	const queryKey = [PRODUCTS_URL];

	const fetch = async (): Promise<Product[]> => {
		const { data } = await axios.get(PRODUCTS_URL);
		return data;
	};

	const { data, isPending, refetch } = useQuery({
		queryKey,
		queryFn: fetch,
	});

	return {
		dataProducts: data,
		isPendingProducts: isPending,
		refetch,
	};
};

export default useFetchListProducts;
