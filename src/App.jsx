import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import Header from "./component/Header/Header";
import About from "./component/about/About";
import Wrapper from "./component/Wrapper/Wrapper";
import { ThemeProvider } from "./context/Theme";
import Project from "./component/Project/Project";
import Github from "./component/Github/Github";
import ContactUs from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";

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
      <main className="bg-gray-100  bg-opacity-35 dark:bg-slate-900  dark:text-gray-200 ">
        <Header />
        <Wrapper>
          <About />
          <Project />
          <Github />
        </Wrapper>
        <ContactUs />
        <Footer/>
      </main>
    </ThemeProvider>
  );
}

export default App;
