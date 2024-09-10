import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-gradient-to-r from-dark to-dark text-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold">Olimpiadlar</span>
          </Link>
          <nav className="hidden md:flex space-x-6 gap-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/competitions"
              className="hover:text-blue-200 transition-colors"
            >
              Competitions
            </Link>
            <Link
              href="/resources"
              className="hover:text-blue-200 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/community"
              className="hover:text-blue-200 transition-colors"
            >
              Community
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link href="./auth">
              <Button
                variant="secondary"
                className="text-white border-2 bg-dark border-white hover:bg-white hover:text-dark w-24"
              >
                Giriş
              </Button>
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-md hover:bg-[#0F4C75] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-6 bg-blue-700">
          <Link
            href="/"
            className="hover:text-blue-200 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-200 transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/competitions"
            className="hover:text-blue-200 transition-colors"
            onClick={closeMenu}
          >
            Competitions
          </Link>
          <Link
            href="/resources"
            className="hover:text-blue-200 transition-colors"
            onClick={closeMenu}
          >
            Resources
          </Link>
          <Link
            href="/community"
            className="hover:text-blue-200 transition-colors"
            onClick={closeMenu}
          >
            Community
          </Link>
          <Button variant="secondary" className="w-full" onClick={closeMenu}>
            Join Community
          </Button>
        </nav>
      </div>
    </header>
  );
}
