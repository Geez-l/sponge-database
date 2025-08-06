import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './navigation'; 
import "bootstrap/dist/css/bootstrap.min.css";
// import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philippine Sponge Guide",
  description: "Gateway to the Philippine Marine Sponges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const mainContentStyle = pathname === '/' ? {} : { paddingTop: '56px'};
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
