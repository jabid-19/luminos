import { Footer } from "../src/components/layouts/Footer";
import { Navbar } from "../src/components/layouts/Navbar";
import "../styles/globals.css";
import { Source_Sans_Pro } from "next/font/google";

const source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400"],
});
function MyApp({ Component, pageProps }) {
  return (
    <div className={source_Sans_Pro.className}>
      <div className="max-w-[2280px] mx-auto">
        <div className="min-h-screen flex flex-col gap-20 justify-between bg-white sm:mx-8 2xl:mx-20">
          <div>
            <Navbar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
