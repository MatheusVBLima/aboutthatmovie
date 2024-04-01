import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/Theme-provider";

import { MovieProvider } from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About That Movie",
  description: "website about movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MovieProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <div className="grid grid-cols-[16rem_1fr] h-screen">
              <Sidebar />
              
            </div> */}
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </MovieProvider>
    </html>
  );
}
