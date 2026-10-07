import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./globals.css";

import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import SiteAnimations from "@/components/SiteAnimations";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  title: "Ismail Nasiru - Portfolio Website",
  description:
    "Ismail Nasiru is a Full Stack Developer with over 4 years of experience building web and mobile products with React, Next.js, and React Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Manrope:wght@200..800&display=swap"
        />
        <link rel="stylesheet" href="/css/icomoon.css" />
      </head>
      <body>
        <LenisProvider>
          <CustomCursor />
          <Preloader />
          <div id="wrapper" className="bg-color-secondary counter-scroll">
            <Navigation />
            {children}
          </div>
          <ScrollProgress />
          <SiteAnimations />
        </LenisProvider>
      </body>
    </html>
  );
}
