import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";

export default function Home() {
  return (
    <div className="px-8">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
