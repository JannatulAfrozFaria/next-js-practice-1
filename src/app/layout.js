import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata = {
  title: "Next Practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-sky-300 p-6">
          <h6>Logo</h6>
          <ul>
            <Link href={'/about'} >About</Link>
            <Link href={'/service'} >Service</Link>
            <Link href={'/service'} >Port Folio</Link>
            <Link href={'/service'} >Blogs</Link>
            <Link href={'/contact'} >Contact</Link>
          </ul>
        </nav>
       <div className="h-screen">
            {children}
       </div>
        <footer>
          <h1>Here comes the footer</h1>
        </footer>
      </body>
    </html>
  );
}
