import { withAuth } from "next-auth/middleware";

export default withAuth({
	callbacks: {
		authorized: ({ token }) => !!token,
	},
	pages: {
		signIn: "/auth/login",
		error: "/auth/login",
	},
});

// Atur matcher untuk halaman yang butuh proteksi
export const config = {
	matcher: ["/dashboard/:path*"],
};
