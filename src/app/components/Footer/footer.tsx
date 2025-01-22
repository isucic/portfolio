"use client";
import Image from "next/image";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="sticky bg-customyellow py-16 mt-8 justify-between items-start flex">
      <div className="">
        <h3 className="uppercase font-bold text-lg">Information</h3>
        <table className="py-4">
          <tbody>
            <tr>
              <td className="font-bold py-1 pr-3">Name</td>
              <td className="py-1">Ivana Sučić</td>
            </tr>
            <tr>
              <td className="font-bold py-1 pr-3">Email</td>
              <td className="py-1">ivana.suciic@gmail.com</td>
            </tr>
            <tr>
              <td className="font-bold py-1 pr-3">City</td>
              <td className="py-1">Kaštela</td>
            </tr>
          </tbody>
        </table>

        <div className="flex space-x-2 py-2 items-center">
          <a
            href="/cv/CV-Sučić-EN-2024.pdf"
            download="CV-Sučić-EN-2024.pdf"
            className="flex space-x-2 py-2 items-center"
          >
            <img src="/download-file.png" alt="file" width={"25px"} />
            <h3 className="underline uppercase">Download CV</h3>
          </a>
        </div>
      </div>

      <button onClick={scrollToTop}>
        <Image
          src="/scroll.svg"
          width={30}
          height={30}
          alt="scroll"
          className="w-10 lg:w-14"
        />
      </button>
    </footer>
  );
}
