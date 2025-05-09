
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <BookOpen className="h-20 w-20 mx-auto text-primary/50" />
        </div>
        <h1 className="text-6xl font-bold font-playfair mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Lo sentimos, la página que buscas no existe
        </p>
        <Button size="lg" asChild className="bg-gradient-to-br from-primary to-primary/90">
          <Link to="/">Regresar al inicio</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
