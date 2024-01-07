import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const metadata: Metadata = {
  title: "Clique",
  description: "Stay connected with your team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey={
              process.env.THEME_STORAGE_KEY || "nextjs-template-theme"
            }
          >
            {children}
            <Toaster />
            <ThemeToggle className="fixed right-4 bottom-4" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
