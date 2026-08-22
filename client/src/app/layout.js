import { Geo } from "next/font/google";
import "./globals.css";
import GlobalModal from "./components/shared/GlobalModal";

const geo = Geo({
  variable: "--font-geo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeerShare",
  description: "A platform for sharing files and code snippets with peers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans lg:w-[1500px] mx-auto">
        {children}
        <GlobalModal />
      </body>
    </html>
  );
}
