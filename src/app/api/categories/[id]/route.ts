import prisma from "@/helpers/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = parseInt(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{ message: "Invalid category ID" },
				{ status: 400 }
			);
		}

		const categories = await prisma.kategori.findUnique({
			where: {
				id_kategori: id,
			},
		});

		if (!categories) {
			return NextResponse.json(
				{ message: "Categories empty" },
				{ status: 404 }
			);
		}

		return NextResponse.json(categories);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error fetching categories" },
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const body = await request.json();
		const id = parseInt(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{ message: "Invalid category ID" },
				{ status: 400 }
			);
		}

		if (!body.nama_kategori || body.nama_kategori.trim() === "") {
			return NextResponse.json(
				{ message: "Category name is required" },
				{ status: 400 }
			);
		}

		const updatedCategory = await prisma.kategori.update({
			where: {
				id_kategori: id,
			},
			data: {
				nama_kategori: body.nama_kategori.trim(),
			},
		});

		console.log(updatedCategory);

		return NextResponse.json({
			message: "Category updated successfully",
			category: updatedCategory,
		});
	} catch (error: any) {
		console.error("Error updating category:", error);

		// Handle Prisma specific errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{ message: "Category not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: "Error updating category" },
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
				{ message: "Invalid category ID" },
				{ status: 400 }
			);
		}

		// Check if category exists
		const category = await prisma.kategori.findUnique({
			where: {
				id_kategori: id,
			},
			include: {
				Produk: true,
			},
		});

		if (!category) {
			return NextResponse.json(
				{ message: "Category not found" },
				{ status: 404 }
			);
		}

		// Check if category has related products
		if (category.Produk.length > 0) {
			return NextResponse.json(
				{
					message: "Cannot delete category with related products",
					products: category.Produk.length,
				},
				{ status: 400 }
			);
		}

		// Delete category
		await prisma.kategori.delete({
			where: {
				id_kategori: id,
			},
		});

		return NextResponse.json({
			message: "Category deleted successfully",
		});
	} catch (error: any) {
		console.error("Error deleting category:", error);

		// Handle Prisma specific errors
		if (error.code === "P2025") {
			return NextResponse.json(
				{ message: "Category not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: "Error deleting category" },
			{ status: 500 }
		);
	}
}
