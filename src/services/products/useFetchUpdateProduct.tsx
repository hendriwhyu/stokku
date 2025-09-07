import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface UpdateProductPayload {
	nama_produk?: string;
	id_kategori?: number;
	kode_produk?: string;
	foto_produk?: File[];
	existing_image_produk?: string[];
}

const useFetchUpdateProduct = () => {
	const UPDATE_PRODUCT = `/api/products`;

	const mutationKey = [UPDATE_PRODUCT];

	const fetch = async ({
			id,
			body,
		}: {
			id: number;
			body: UpdateProductPayload;
		}) => {
			const formData = new FormData();
			
			if (body.nama_produk) formData.append('nama_produk', body.nama_produk);
			if (body.id_kategori) formData.append('id_kategori', body.id_kategori.toString());
			if (body.kode_produk) formData.append('kode_produk', body.kode_produk);

			// Handle new uploaded files
			if (body.foto_produk && body.foto_produk.length > 0) {
				body.foto_produk.forEach((file, index) => {
					formData.append(`foto_produk[${index}]`, file);
				});
			}

			// Handle existing images that should remain
			if (body.existing_image_produk && body.existing_image_produk.length > 0) {
				body.existing_image_produk.forEach((url, index) => {
					formData.append(`existing_image_produk[${index}]`, url);
				});
			}

			const res = await axios.put(`${UPDATE_PRODUCT}/${id}`, formData, {
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
		mutateUpdateProduct: mutateAsync,
		isPendingUpdateProduct: isPending,
	};
};

export default useFetchUpdateProduct;
