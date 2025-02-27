import { MetaFunction } from "@remix-run/node";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Banner from "../components/Banner";
import CheckLeaks from "../components/CheckLeaks";
import LeakNixWorks from "../components/LeakNixWorks";
import LeakNixReport from "../components/LeakNixReport";
import LeakNixFeatures from "../components/LeakNixFeatures";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


export const meta: MetaFunction = () => {
  return [
    { title: "LeakNix - Protect your digital identity" },
    { name: "description", content: "Check if your email, username, or phone number has been compromised in any known data breach" },
  ];
};

export default function Index() {
  // Elimină useEffect pentru WOW.js de aici

  return (
    <main className="main-area">
      <article>
        <section className="header-banner-bg position-relative">
          <img className="banner-texture-image" src="/images/texture.png" alt="image" />
          <img className="banner-ellipse-image" src="/images/banner-ellipse.png" alt="image" />

          <Header />
          <Banner />
        </section>

        <MobileMenu />
        <CheckLeaks/>
        <LeakNixWorks/>
        <LeakNixReport/>
        <LeakNixFeatures/>
        <PricingSection/>
<Testimonials/>
<FAQ/>
<Footer/>

        
        
        
      </article>
    </main>
  );
}