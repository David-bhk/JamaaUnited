import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "Accueil", path: "/" },
    { text: "À Propos", path: "/about" },
    { text: "Activités", path: "/activities" },
    { text: "Domaines d'Impact", path: "/impact-domains" },
    { text: "Équipe", path: "/team" },
    { text: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-soft">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground">Jamaa United</span>
              <span className="text-xs text-muted-foreground">Construire des Communautés Plus Fortes</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary">
              Faire un Don
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Button variant="primary" className="w-full">
                Faire un Don
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
