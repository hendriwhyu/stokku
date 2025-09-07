import prisma from "@/helpers/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const categories = await prisma.kategori.findMany({
			orderBy: {
				id_kategori: "asc",
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

export async function POST(request: Request) {
	try {
		const body: { nama_kategori: string } = await request.json();

		if (!body.nama_kategori || body.nama_kategori.trim() === "") {
			return NextResponse.json(
				{ message: "Category name is required" },
				{ status: 400 }
			);
		}

		const existingCategory = await prisma.kategori.findFirst({
			where: {
				nama_kategori: body.nama_kategori.trim(),
			},
		})

		if (existingCategory) {
			return NextResponse.json(
				{ message: "Category already exists" },
				{ status: 400 }
			);
		}

		const newCategory = await prisma.kategori.create({
			data: {
				nama_kategori: body.nama_kategori.trim(),
			},
		});

		return NextResponse.json({
			message: "Category created successfully",
			category: newCategory,
		});
	} catch (error) {
		console.error("Error creating category:", error);
		return NextResponse.json(
			{ message: "Error creating category" },
			{ status: 500 }
		);
	}
}
