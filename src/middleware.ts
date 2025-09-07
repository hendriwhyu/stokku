import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to protect routes that require authentication
 * Integrates with NextAuth to secure dashboard and API routes
 *
 * @param req - Next.js request object
 */

const AUTH_PAGES = ["/auth/login", "/auth/register"];
const PROTECTED_ROUTES = ["/dashboard"];

export async function middleware(req: NextRequest) {
	const { nextUrl } = req;

	// Get token from cookies
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	const isLoggedIn = !!token;

	const isAuthPage = AUTH_PAGES.some((route) =>
		nextUrl.pathname.startsWith(route)
	);
	const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
		nextUrl.pathname.startsWith(route)
	);

	// If user is logged in and trying to access auth pages, redirect to dashboard
	if (isAuthPage && isLoggedIn) {
		return NextResponse.redirect(new URL("/dashboard", nextUrl));
	}

	// If user is not logged in and trying to access protected routes, redirect to login
	if (isProtectedRoute && !isLoggedIn) {
		const callbackUrl = encodeURIComponent(nextUrl.pathname);
		return NextResponse.redirect(
			new URL(`/auth/login?callbackUrl=${callbackUrl}`, nextUrl)
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
