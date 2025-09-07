
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CreateProductPayload {
	nama_produk: string;
	id_kategori: number;
	kode_produk: string;
	foto_produk: File[];
	tgl_register: Date;
	jumlah_barang?: number;
}

const useFetchCreateProduct = () => {
	const CREATE_PRODUCT = "/api/products";

	const mutationKey = [CREATE_PRODUCT];

	const fetch = async (body: CreateProductPayload) => {
		const formData = new FormData();
		formData.append('nama_produk', body.nama_produk);
		formData.append('id_kategori', body.id_kategori.toString());
		formData.append('kode_produk', body.kode_produk);
		formData.append('tgl_register', body.tgl_register.toISOString());

		// Handle multiple files
		body.foto_produk.forEach((file, index) => {
			formData.append(`foto_produk[${index}]`, file);
		});

		const res = await axios.post(CREATE_PRODUCT, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return res.data;
	};

	const { mutateAsync, isPending } = useMutation({
		mutationKey,
		mutationFn: fetch,
	});

	return {
		mutateCreateProduct: mutateAsync,
		isPendingCreateProduct: isPending,
	};
};

export default useFetchCreateProduct;
