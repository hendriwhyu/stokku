"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ConfigProvider, App as AntdApp } from "antd";
import id_ID from "antd/locale/id_ID";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: { queries: { refetchOnWindowFocus: false } },
			})
	);
	return (
		<ConfigProvider
			locale={id_ID}
		>
			<AntdApp>
				<SessionProvider>
					<QueryClientProvider client={client}>{children}</QueryClientProvider>
				</SessionProvider>
			</AntdApp>
		</ConfigProvider>
	);
}
