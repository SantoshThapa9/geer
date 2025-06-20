import "./globals.scss";
import Navigation from "./components/Navigation";
import ReduxProvider from "../store/ReduxProvider";
import ThemeSlice from "../store/ThemeSlice";
import { Roboto } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title:
    "Geer | Modern E-commerce Store | Best Deals & Fast Shipping | Santosh Thapa",
  description:
    "Shop top-quality products at unbeatable prices. Explore latest trends, fast delivery, and secure checkout at Geer, your go-to online store.",
  keywords:
    "e-commerce, online shopping, best deals, fast shipping, modern store, Santosh Thapa, affordable products",
  author: "Santosh Thapa",
  creator: "Santosh Thapa",

  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${dancing.variable}`}>
      <head>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={roboto.className}>
        <ReduxProvider>
          <ThemeSlice>
            <Navigation />
            {children}
          </ThemeSlice>
        </ReduxProvider>
      </body>
    </html>
  );
}
