import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Simple Blog Viewer",
  description: "A simple blog viewer application built with Next.js and Kinde Auth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}