import prisma from "@/helpers/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
	const hashedPassword = await bcrypt.hash("Admin123", 10);

	await prisma.user.upsert({
		where: { email: "admin@mail.com" },
		update: {},
		create: {
			email: "admin@mail.com",
			nama_user: "Admin Stokku",
			password: hashedPassword,
			role: "admin",
			is_active: true,
		},
	});

	await prisma.user.upsert({
		where: { email: "user@mail.com" },
		update: {},
		create: {
			email: "user@mail.com",
			nama_user: "User Test",
			password: await bcrypt.hash("user123", 10),
			role: "user",
			is_active: true,
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
		console.log("Seeding completed successfully");
	})
	.catch(async (e) => {
		console.error("Seeding error:", e);
		await prisma.$disconnect();
		process.exit(1);
	});
