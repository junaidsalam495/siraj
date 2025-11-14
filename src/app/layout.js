import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
import SubcribeNewsLetter from "@/components/layout/subcribe-news-letter";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Siraj",
  description: "Siraj Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={barlow.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <SubcribeNewsLetter />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
