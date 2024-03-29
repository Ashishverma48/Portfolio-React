import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import About from "./component/about/About";
import Wrapper from "./component/Wrapper/Wrapper";
import { ThemeProvider } from "./context/Theme";
import Project from "./component/Project/Project";
import Github from "./component/Github/Github";
import ContactUs from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import ParticleCompoment from "./canvas/Particle";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <ParticleCompoment />
      <main className="bg-gray-100 z-40 dark:bg-opacity-95   dark:bg-slate-900  dark:text-gray-200 ">
        <Header />
        <Hero />
        <Wrapper>
          <About />
          <Project />
          <Github />
        </Wrapper>
        <ContactUs />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
