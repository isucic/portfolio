export default function About() {
  return (
    <section id="about" className="min-h-screen pt-20">
      <h1 className="text-4xl xl:text-6xl font-bold">
        Hello, my name is Ivana Sučić
      </h1>
      <p className="text-xl xl:text-2xl text-customgrey py-4">
        A computer science graduate with a passion for building intuitive and
        functional web applications. I love tackling new challenges while
        continuously improving my skills.
      </p>
      <div className="flex space-x-4">
        <button className="bg-customyellow hover:bg-white border-2 border-customyellow hover:text-customyellow transition duration-300 px-3 py-2 rounded-md">
          Projects
        </button>
        <button className="hover:bg-black hover:text-white transition duration-300 px-3 py-2 rounded-md border-black border-2">
          LinkedIn
        </button>
      </div>
    </section>
  );
}
