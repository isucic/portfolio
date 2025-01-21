"use client";
import Image from "next/image";
export default function Card({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    photo: string;
    source_code: string;
    demo: string;
  };
  index: number;
}) {
  const truncatedDescription =
    project.description.length > 100
      ? `${project.description.slice(0, 90)}...`
      : project.description;

  return (
    <div
      className={`bg-white rounded-md flex shadow-md ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 p-2 flex flex-col justify-center sm:p-8">
        <h2 className="font-bold text-2xl">{project.title}</h2>
        <p className="text-sm xl:text-lg py-4 text-customgrey">
          {truncatedDescription}
        </p>
        <div
          className={`buttons space-y-2 md:pt-8 ${
            index % 2 === 0 ? "" : "grid justify-end"
          }`}
        >
          <button
            onClick={() => {
              window.open(`${project.demo}`, "_blank");
            }}
            className="text-xs md:text-sm xl:text-lg bg-customyellow hover:bg-white text-black hover:text-customyellow border-2 border-customyellow transition duration-300 px-4 py-1 rounded-full"
          >
            View Demo
          </button>
          <button
            onClick={() => {
              window.open(`${project.source_code}`, "_blank");
            }}
            className="flex justify-center items-center text-xs md:text-sm xl:text-lg hover:bg-black hover:text-white border-2 border-black transition duration-300 px-4 py-1 rounded-full group"
          >
            Source
            <img
              src="/github-logo.png"
              alt="github logo"
              width={"20px"}
              className="ml-3 transition duration-300 group-hover:invert"
            />
          </button>
        </div>
      </div>

      <div className="relative w-1/2 h-[350px]">
        <Image
          src={project.photo}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
