import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/navigator/Navigator";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "knocard Presentaion",
  description: "knocard Presentaion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className + ' ' + 'relative overflow-hidden'}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
