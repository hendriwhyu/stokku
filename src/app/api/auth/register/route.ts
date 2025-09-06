import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/helpers/lib/prisma";

export async function POST(request: Request) {
	try {
		const { email, name, password } = await request.json();

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return NextResponse.json(
				{ message: "User with this email already exists." },
				{ status: 409 }
			);
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

		// Create the new user
		const newUser = await prisma.user.create({
			data: {
				nama_user: name,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json(
			{ message: "User registered successfully!", user: newUser },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Registration error:", error);
		return NextResponse.json(
			{ message: "Internal server error." },
			{ status: 500 }
		);
	}
}
