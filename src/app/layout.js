import { Inter } from "next/font/google";
import "./globals.css";
import { dbConnect } from "@/utils/mongo";
import Navbar from "@/components/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar/>
      <main className="p-2">{children}</main>
    </body>
    </html>
  );
}
