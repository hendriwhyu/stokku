import prisma from "@/helpers/lib/prisma";
import { NextResponse } from "next/server";
import { productFileStorage } from "@/helpers/utils/fileStorage";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = parseInt(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{ message: "Invalid product ID" },
				{ status: 400 }
			);
		}

		const product = await prisma.produk.findUnique({
			where: {
				id_produk: id,
			},
			include: {
				kategori: true,
				stok: true,
			},
		});

		if (!product) {
			return NextResponse.json(
				{ message: "Product not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(product);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error fetching product" },
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const formData = await request.formData();

		console.log(formData)

		const id = parseInt(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{ message: "Invalid product ID" },
				{ status: 400 }
			);
		}

		// Cek apakah produk ada
		const existingProduct = await prisma.produk.findUnique({
			where: {
				id_produk: id,
			},
		});

		if (!existingProduct) {
			return NextResponse.json(
				{ message: "Product not found" },
				{ status: 404 }
			);
		}

		const nama_produk = formData.get('nama_produk') as string;
		const id_kategori = formData.get('id_kategori') ? parseInt(formData.get('id_kategori') as string) : undefined;
		const kode_produk = formData.get('kode_produk') as string;
		
		// Handle multiple files
		const foto_produk_files: File[] = [];
		let index = 0;
		while (formData.has(`foto_produk[${index}]`)) {
			const file = formData.get(`foto_produk[${index}]`) as File;
			if (file && file instanceof File) {
				foto_produk_files.push(file);
			}
			index++;
		}

		// Handle existing images that should remain
		const existing_image_produk: string[] = [];
		index = 0;
		while (formData.has(`existing_image_produk[${index}]`)) {
			const url = formData.get(`existing_image_produk[${index}]`) as string;
			if (url) {
				existing_image_produk.push(url);
			}
			index++;
		}

		// Validasi data
		if (nama_produk && nama_produk.trim() === "") {
			return NextResponse.json(
				{ message: "Product name cannot be empty" },
				{ status: 400 }
			);
		}

		if (kode_produk && kode_produk.trim() === "") {
			return NextResponse.json(
				{ message: "Product code cannot be empty" },
				{ status: 400 }
			);
		}

		// Cek apakah kode produk sudah ada (jika diubah)
		if (kode_produk && kode_produk !== existingProduct.kode_produk) {
			const productWithSameCode = await prisma.produk.findUnique({
				where: {
					kode_produk: kode_produk.trim(),
				},
			});

			if (productWithSameCode) {
				return NextResponse.json(
					{ message: "Product code already exists" },
					{ status: 400 }
				);
			}
		}

		// Handle file upload and image management
		let finalImagePaths: string[] = [];
		
		// Upload new files
		const newFilePaths: string[] = [];
		if (foto_produk_files.length > 0) {
			for (const file of foto_produk_files) {
				const uploadResult = await productFileStorage.uploadFile(file);
				
				if (!uploadResult.success) {
					// Clean up any uploaded files if one fails
					for (const path of newFilePaths) {
						await productFileStorage.deleteFile(path);
					}
					
					return NextResponse.json(
						{ message: uploadResult.error || "Failed to upload file" },
						{ status: 400 }
					);
				}
				
				newFilePaths.push(uploadResult.filePath!);
			}
		}
		
		// Combine existing images with new files
		finalImagePaths = [...existing_image_produk, ...newFilePaths];
		
		// Validate total image count
		if (finalImagePaths.length < 3) {
			// Clean up newly uploaded files
			for (const path of newFilePaths) {
				await productFileStorage.deleteFile(path);
			}
			return NextResponse.json(
				{ message: "Minimum 3 product images are required" },
				{ status: 400 }
			);
		}
		
		if (finalImagePaths.length > 5) {
			// Clean up newly uploaded files
			for (const path of newFilePaths) {
				await productFileStorage.deleteFile(path);
			}
			return NextResponse.json(
				{ message: "Maximum 5 product images are allowed" },
				{ status: 400 }
			);
		}

		// Update produk
		const updateData: any = {};
		if (nama_produk) updateData.nama_produk = nama_produk.trim();
		if (id_kategori) updateData.id_kategori = id_kategori;
		if (kode_produk) updateData.kode_produk = kode_produk.trim();
		if (finalImagePaths) updateData.foto_produk = finalImagePaths;

		await prisma.produk.update({
			where: {
				id_produk: id,
			},
			data: updateData,
		});

		return NextResponse.json({
			message: "Product updated successfully",
		});
	} catch (error) {
		console.error("Error updating product:", error);
		return NextResponse.json(
			{ message: "Error updating product" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = parseInt(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{ message: "Invalid product ID" },
				{ status: 400 }
			);
		}

		// Cek apakah produk ada
		const existingProduct = await prisma.produk.findUnique({
			where: {
				id_produk: id,
			},
			include: {
				stok: true,
			},
		});

		if (!existingProduct) {
			return NextResponse.json(
				{ message: "Product not found" },
				{ status: 404 }
			);
		}

		// Get product data before deletion for cleanup
		const product = await prisma.produk.findUnique({
			where: { id_produk: id },
			select: { foto_produk: true }
		});

		// Hapus semua stok terkait terlebih dahulu
		await prisma.stok.deleteMany({
			where: {
				id_produk: id,
			},
		});

		// Hapus produk
		await prisma.produk.delete({
			where: {
				id_produk: id,
			},
		});

		// Cleanup product images if exists
		if (product?.foto_produk) {
			const filePaths = Array.isArray(product.foto_produk)
				? product.foto_produk
				: [product.foto_produk];

			for (const filePath of filePaths) {
				if (filePath) {
					await productFileStorage.deleteFile(filePath.toString());
				}
			}
		}

		return NextResponse.json({
			message: "Product deleted successfully",
		});
	} catch (error) {
		console.error("Error deleting product:", error);
		return NextResponse.json(
			{ message: "Error deleting product" },
			{ status: 500 }
		);
	}
}