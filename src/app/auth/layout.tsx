import { AuthLayout } from "@/layouts";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthLayout title="Auth">
			{children}
		</AuthLayout>
	);
}
