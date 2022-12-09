import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            <span className="underline decoration-6 decoration-yellow-400">JF</span>{" "}News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode Button */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subsribe Now
          </button>
        </div>
      </div>

      <Navbar />

      <Search />
       
    </header>
  );
};

export default Header;
