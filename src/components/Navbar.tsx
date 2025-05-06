
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-800 dark:text-white hover:text-pink-500 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity font-medium">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 dark:text-white" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={cn(
          "fixed inset-x-0 top-[64px] bg-white dark:bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-800 dark:text-white hover:text-pink-500 py-3 border-b border-gray-100 dark:border-gray-800 transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity font-medium w-full mt-4">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
