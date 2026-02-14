import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Burning lamb",
  description: "Burning lamb studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0 z-[11] bg-[var(--background-rgb)] px-4 md:px-[30px]">
          <Header className="mx-auto max-w-full border-b-0.5 border-text-900 py-3 xl:max-w-[var(--header-max-width)]" />
        </div>
        <main className="text-body mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
