import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id_user: string;
			role: string;
			image?: string | null;
		} & DefaultSession["user"];
	}

	interface User {
		id_user?: string;
		nama_user?: string;
		role?: string;
		image?: string | null;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id_user?: string;
		role?: string;
		image?: string | null;
	}
}
