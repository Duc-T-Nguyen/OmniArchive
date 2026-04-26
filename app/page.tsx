import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/Themeswitcher";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <NavigationBar />
      <ThemeSwitcher />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}