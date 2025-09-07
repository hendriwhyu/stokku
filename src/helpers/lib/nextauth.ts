import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import prisma from "@/helpers/lib/prisma";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "email@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email dan password harus diisi");
				}

				// Find user by email
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				// Check if user exists and has a password (not SSO user)
				if (!user) {
					throw new Error("Email tidak terdaftar");
				}

				if (!user.password) {
					throw new Error(
						"Akun ini menggunakan login SSO. Silakan gunakan Google untuk login"
					);
				}

				// Verify password
				const isPasswordValid = await bcrypt.compare(
					credentials.password,
					user.password
				);
				if (!isPasswordValid) {
					throw new Error("Password salah");
				}

				// Update last login time
				await prisma.user.update({
					where: { id_user: user.id_user },
					data: { last_login: new Date() },
				});

				return {
					id: user.id_user.toString(),
					id_user: user.id_user.toString(),
					nama_user: user.nama_user,
					email: user.email,
					role: user.role,
				};
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 24 * 60 * 60, // 1 day
	},
	secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			// Add custom user data to the token
			if (user) {
				token.id_user = user.id_user?.toString();
				token.nama_user = user.nama_user;
				token.email = user.email;
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }) {
			// Add custom token data to the session
			if (session.user) {
				session.user.id_user = token.id_user as string;
				session.user.name = token.nama_user as string;
				session.user.email = token.email as string;
				session.user.role = token.role as string;
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			// Redirect to dashboard after successful login
			if (url.startsWith("/")) {
				return `${baseUrl}${url}`;
			}
			// Return dashboard by default
			return `${baseUrl}/dashboard`;
		},
	},
	pages: {
		signIn: "/auth/login",
		error: "/auth/login",
	},
	debug: process.env.NODE_ENV === "development",
};
