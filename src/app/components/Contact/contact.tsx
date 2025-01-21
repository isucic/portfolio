"use client";
export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full pt-20 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl xl:text-6xl font-bold flex justify-center items-center pb-2">
        Get In Contact
      </h1>
      <div className="w-1/4 border-customyellow border-2"></div>
      <p className="text-lg xl:text-xl text-customgrey py-4 text-center">
        Feel free to reach out if you want to collaborate or just say hi. You
        can find me on GitHub or contact me directly via email.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => {
            window.open("https://github.com/isucic", "_blank");
          }}
          className="flex flex-col rounded-full justify-center items-center hover:scale-105 transition duration-300"
        >
          <div className="object-cover lg:w-[50px] w-[30px]">
            <img
              src="/github-logo.png"
              alt="LinkedIn logo"
              className="w-full h-full object-cover"
            />
          </div>
        </button>

        <button
          onClick={() => {
            window.open("https://www.linkedin.com/in/ivanasucic/", "_blank");
          }}
          className="flex flex-col items-center justify-center hover:scale-105 transition duration-300 rounded-full"
        >
          <div className="object-cover lg:w-[50px] w-[30px]">
            <img
              src="/linkedin.png"
              alt="LinkedIn logo"
              className="w-full h-full object-cover"
            />
          </div>
        </button>

        <button
          onClick={() => {
            window.open("mailto:ivana.suciic@gmail.com", "_blank");
          }}
          className="flex flex-col items-center justify-center hover:scale-105 transition duration-300 rounded-full"
        >
          <div className="object-cover lg:w-[50px] w-[30px]">
            <img
              src="/email.png"
              alt="Email logo"
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
