
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { BookOpen, LogIn, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-card shadow-sm border-b border-border dark:border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <Link to="/" className="font-playfair text-xl font-bold">
              Biblioteca Virtual
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            {isAuthenticated && (
              <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
                Catálogo
              </Link>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Hola, {user?.name}</span>
                <Button variant="outline" onClick={handleLogout} className="border-metallic">
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link to="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Iniciar sesión
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-to-br from-primary to-primary/90">
                  <Link to="/register">
                    <User className="mr-2 h-4 w-4" />
                    Registrarse
                  </Link>
                </Button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            {isAuthenticated && (
              <Link to="/catalog" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Catálogo
              </Link>
            )}
            {isAuthenticated ? (
              <div className="space-y-2 pt-2 border-t border-border">
                <span className="block text-sm text-muted-foreground">Hola, {user?.name}</span>
                <Button variant="outline" size="sm" onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full justify-start border-metallic">
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <div className="space-y-2 pt-2 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Iniciar sesión
                  </Link>
                </Button>
                <Button size="sm" className="w-full justify-start bg-gradient-to-br from-primary to-primary/90" asChild>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Registrarse
                  </Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
