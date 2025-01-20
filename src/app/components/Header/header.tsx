"use client";
import Link from "next/link";

type MenuItem = {
  title: string;
  link: string;
};

const Header = () => {
  const menuItems: MenuItem[] = [
    { title: "about", link: "#about" },
    { title: "projects", link: "#projects" },
    { title: "contact", link: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/">
          <p className="text-2xl font-bold text-gray-800 cursor-pointer xl:hover:text-indigo-600">
            Ivana Sučić
          </p>
        </Link>

        {/*  NAVIGATION */}
        <nav className="flex space-x-6">
          {menuItems.map((item, index) => {
            return (
              <div className="" key={index}>
                <Link
                  href={item.link}
                  onClick={() => {
                    scrollToSection(item.link);
                  }}
                >
                  <p className="text-lg capitalize text-gray-600 hover:text-indigo-600 cursor-pointer transition duration-200">
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
