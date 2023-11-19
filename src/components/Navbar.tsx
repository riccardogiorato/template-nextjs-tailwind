import { FC } from "react";

interface NavbarProps {
  pages: { name: string; href: string; current: boolean }[];
}

export const Navbar: FC<NavbarProps> = ({ pages }) => {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <a
            className="flex text-white text-base no-underline hover:text-white hover:no-underline"
            href="/"
          >
            <span className="hidden w-0 md:w-auto md:block pl-1">Homepage</span>
          </a>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            {pages.map((page) => (
              <li className="mr-2" key={page.name}>
                <a
                  className={`inline-block py-2 px-2 text-white no-underline ${
                    page.current ? "font-bold" : ""
                  }`}
                  href={page.href}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
