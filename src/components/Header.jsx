import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { SearchInput } from "./ui/SearchInput";
import { Logo } from "./ui/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`md:bg-[#FAFAFA] w-full ${
        isOpen ? "shadow-sm" : "md:shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto p-4">
        <div className=" flex justify-between text-sm font-medium">
          <div className="flex justify-between items-center gap-8">
            {/* 100x Devs*/}
            <Logo />
            {/* Home */}
            <Link to="/" className="hidden md:block">
              Home
            </Link>
            {/* Courses */}
            <Link to="/courses" className="hidden md:block">
              Courses
            </Link>
          </div>
          <div className="hidden md:flex justify-between gap-4">
            {/* Search */}
            <SearchInput
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {/* Sign Up */}
            <Button content="Sign Up" bg="secondary" text="secondary" />
            {/* Login */}
            <Button content="Login" />
          </div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden"
          >
            {isOpen === false ? (
              <div className="bg-[#132860] px-3 py-2.5 rounded-lg md:hidden">
                <Menu size={15} stroke="white" />
              </div>
            ) : (
              <div className="bg-[#132860] px-3 py-2.5 rounded-lg md:hidden">
                <X size={15} stroke="white" />
              </div>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 right-0 z-50 h-screen w-full bg-[#fafafa] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-5 text-sm font-normal">
          {/* Home */}
          <Link
            to="/"
            className="py-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Home
          </Link>
          {/* Courses */}
          <Link
            to="/courses"
            className="py-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Courses
          </Link>
          <SearchInput
            value={search}
            type="mobile"
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="w-full h-px bg-gray-400/25 "></div>
          {/* Sign Up */}
          <Button
            callBack={() => {
              setIsOpen(!isOpen);
            }}
            content="Sign Up"
            bg="secondary"
            text="secondary"
          />
          {/* Login */}
          <Button
            callBack={() => {
              setIsOpen(!isOpen);
            }}
            content="Login"
          />
        </div>
      </div>
    </header>
  );
};
