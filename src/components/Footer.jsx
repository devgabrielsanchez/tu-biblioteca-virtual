
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="font-playfair font-bold">Biblioteca Virtual</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Biblioteca Virtual. Todos los derechos reservados.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ayuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
