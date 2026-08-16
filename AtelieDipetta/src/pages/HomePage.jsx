import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/features/Hero";
import Features from "../components/features/Features";
import About from "../components/features/About";
import Stats from "../components/features/Stats";
import Pricing from "../components/features/Pricing";
import Testimonials from "../components/features/Testimonials";
import FAQ from "../components/features/FAQ";
import Contact from "../components/features/Contact";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

/**
 * HomePage — the full marketing site assembled from feature sections.
 * This is the example composition referenced in the README.
 *
 * @example
 * <HomePage />
 */
function HomePage() {
  const { isMobileMenuOpen, closeMobileMenu } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Sidebar open={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}

export default HomePage;
