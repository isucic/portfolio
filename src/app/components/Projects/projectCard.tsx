import Image from "next/image";
export default function Card({
  project,
}: {
  project: { title: string; description: string; photo: string };
}) {
  const truncatedDescription =
    project.description.length > 100
      ? `${project.description.slice(0, 100)}...`
      : project.description;

  return (
    <div className="bg-white rounded-md flex">
      <div className="w-1/2 p-2 items-center justify-center">
        <h2 className="font-bold text-xl">{project.title}</h2>
        <p className="text-sm">{truncatedDescription}</p>
        <button>View Project</button>
      </div>

      <div className="relative w-1/2 h-[300px]">
        <Image
          src={project.photo}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
