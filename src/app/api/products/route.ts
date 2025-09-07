import prisma from "@/helpers/lib/prisma";
import { NextResponse } from "next/server";
import { productFileStorage } from "@/helpers/utils/fileStorage";

export async function GET() {
	try {
		const products = await prisma.produk.findMany({
			include: {
				kategori: true,
				stok: true,
			},
			orderBy: {
				id_produk: "asc",
			},
		});

		if (!products) {
			return NextResponse.json(
				{ message: "Products empty" },
				{ status: 404 }
			);
		}

		return NextResponse.json(products);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error fetching products" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const nama_produk = formData.get('nama_produk') as string;
		const id_kategori = parseInt(formData.get('id_kategori') as string);
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

		// Also handle single file for backward compatibility
		if (foto_produk_files.length === 0) {
			const singleFile = formData.get('foto_produk') as File;
			if (singleFile && singleFile instanceof File) {
				foto_produk_files.push(singleFile);
			}
		}

		// Validasi data
		if (!nama_produk || nama_produk.trim() === "") {
			return NextResponse.json(
				{ message: "Product name is required" },
				{ status: 400 }
			);
		}

		if (!id_kategori) {
			return NextResponse.json(
				{ message: "Category ID is required" },
				{ status: 400 }
			);
		}

		if (!kode_produk || kode_produk.trim() === "") {
			return NextResponse.json(
				{ message: "Product code is required" },
				{ status: 400 }
			);
		}

		if (foto_produk_files.length === 0) {
			return NextResponse.json(
				{ message: "Product image is required" },
				{ status: 400 }
			);
		}

		if (foto_produk_files.length < 3) {
			return NextResponse.json(
				{ message: "Minimum 3 product images are required" },
				{ status: 400 }
			);
		}

		if (foto_produk_files.length > 5) {
			return NextResponse.json(
				{ message: "Maximum 5 product images are allowed" },
				{ status: 400 }
			);
		}

		// Cek apakah kode produk sudah ada
		const existingProduct = await prisma.produk.findUnique({
			where: {
				kode_produk: kode_produk.trim(),
			},
		});

		if (existingProduct) {
			return NextResponse.json(
				{ message: "Product code already exists" },
				{ status: 400 }
			);
		}

		// Handle multiple file uploads
		const uploadedPaths: string[] = [];

		for (const file of foto_produk_files) {
			const uploadResult = await productFileStorage.uploadFile(file);

			if (!uploadResult.success) {
				// Clean up previously uploaded files if any fail
				for (const path of uploadedPaths) {
					await productFileStorage.deleteFile(path);
				}
				
				return NextResponse.json(
					{ message: uploadResult.error || "Failed to upload file" },
					{ status: 400 }
				);
			}
			
			uploadedPaths.push(uploadResult.filePath!);
		}

		// Buat produk baru
		const newProduct = await prisma.produk.create({
			data: {
				nama_produk: nama_produk.trim(),
				id_kategori: id_kategori,
				kode_produk: kode_produk.trim(),
				foto_produk: uploadedPaths,
				tgl_register: new Date(),
			},
		});

		await prisma.stok.create({
			data: {
				id_produk: newProduct.id_produk,
				jumlah_barang: 0,
				tgl_update: new Date(),
			},
		});

		return NextResponse.json({
			message: "Product created successfully",
			product: newProduct,
		});
	} catch (error) {
		console.error("Error creating product:", error);
		return NextResponse.json(
			{ message: "Error creating product" },
			{ status: 500 }
		);
	}
}