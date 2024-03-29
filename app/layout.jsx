import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto h-[cal(100vh-7)] flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
