import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./app.css";
import { ViewTransitions } from "next-view-transitions";
import { cx } from "@/utils";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Ho Tri Dung",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cx(
          "antialiased h-full",
          inter.variable,
          robotoMono.variable,
        )}
      >
        <body className="flex flex-col items-center h-full px-4 lg:px-0">
          <main className="flex-1 lg:max-w-xl mx-auto">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
