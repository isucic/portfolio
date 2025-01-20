import About from "./components/About/about";
import Projects from "./components/Projects/projects";

export default function Home() {
  return (
    <div className="px-8">
      <About />
      <Projects />
      <section id="contact" className="min-h-screen pt-20">
        <h1>Contact</h1>
        <p>This is the contact section!</p>
      </section>
    </div>
  );
}
