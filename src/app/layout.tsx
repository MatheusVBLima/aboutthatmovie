import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import { MovieProvider } from "@/context/ContextProvider";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

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
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="px-2 pb-6 pt-28 max-md:pb-14 sm:px-1">
                {children}
              </main>
              <div className="mt-auto flex">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </MovieProvider>
    </html>
  );
}
