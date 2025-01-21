"use client";
export default function About() {
  return (
    <section
      id="about"
      className="pt-20 xl:min-h-screen justify-center flex flex-col"
    >
      <div className="py-32">
        <h1 className="uppercase font-bold text-customyellow xl:text-2xl font-sans">
          Hello, my name is Ivana
        </h1>
        <h1 className="text-4xl xl:text-7xl py-4 font-bold">
          Welcome to my portfolio.
        </h1>
        <p className="text-xl xl:text-3xl text-customgrey py-4">
          A newly graduated computer engineer with a passion for web development
          and a curiosity for exploring other areas of technology. I enjoy
          tackling new challenges while continuously expanding my knowledge and
          skills.
        </p>
        <div className="flex space-x-4 py-4">
          <button className="bg-customyellow hover:bg-white border-2 border-customyellow hover:text-customyellow transition duration-300 px-3 py-2 rounded-md">
            Projects
          </button>
          <button
            onClick={() => {
              window.open("https://www.linkedin.com/in/ivanasucic/", "_blank");
            }}
            className="hover:bg-black hover:text-white transition duration-300 px-3 py-2 rounded-md border-black border-2"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
