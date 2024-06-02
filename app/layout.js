import "./styles/global.css";
import { Raleway } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Professional Frontend Developer Portfolio - Next.js",
  description: "Welcome to my professional portfolio, showcasing my skills and projects as a Frontend Developer specializing in Next.js. This portfolio highlights a collection of my best work, demonstrating my proficiency in creating dynamic, high-performance web applications using Next.js. Explore my projects to see how I leverage modern web technologies to build responsive, user-friendly interfaces and seamless user experiences. From interactive components to full-scale applications, each project reflects my commitment to quality and innovation in frontend development. Dive in to discover how I turn ideas into reality with clean code, cutting-edge tools, and a passion for web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      {children}
      <Analytics />
      </body>
    </html>
  );
}
