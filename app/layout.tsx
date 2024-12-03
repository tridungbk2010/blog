import type { Metadata } from "next";
import localFont from "next/font/local";
import "./app.css";
import { ViewTransitions } from "next-view-transitions";
import { cx } from "@/utils";
import Footer from "@/app/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
          "text-black bg-white dark:text-white dark:bg-black antialiased h-full",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <body className="flex flex-col items-center h-full">
          <main className="flex-1 lg:max-w-xl mx-auto">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
