import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/app/store/providers";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { NextAuthProvider } from "@/utils/NextAuthProvider";

export const metadata = {
  title: "Flipkart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <Providers>
          <html lang="en">
            <body suppressHydrationWarning={true}>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </Providers>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
