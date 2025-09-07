import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";

interface StockEditRequest {
	id_produk: number;
	jumlah_barang: number;
	keterangan?: string;
}

const useStockAdjustment = () => {
	const STOCK_ADJUST_URL = "/api/stocks/adjust";

	const fetch = async (data: StockEditRequest): Promise<Product> => {
		const validatedData = {
			...data,
			jumlah_barang: Math.max(0, Math.floor(Number(data.jumlah_barang) || 0))
		};
		
		const response = await axios.post(STOCK_ADJUST_URL, validatedData);
		return response.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationFn: fetch,
	});

	return {
		adjustStock: mutateAsync,
		isAdjusting: isPending,
	};
};

export default useStockAdjustment;
