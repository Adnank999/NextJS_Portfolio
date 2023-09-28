import "./styles/global.css";
import { Raleway } from "next/font/google";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Next js Portfolio",
  description: "This is a portfolio website using Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
