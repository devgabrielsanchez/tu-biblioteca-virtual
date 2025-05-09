
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [book, setBook] = useState(books.find((b) => b.id === id));
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle invalid book ID
  useEffect(() => {
    if (!isLoading && !book) {
      toast({
        variant: "destructive",
        title: "Libro no encontrado",
        description: "El libro que buscas no existe",
      });
      navigate("/catalog");
    }
  }, [book, isLoading, navigate, toast]);

  if (isLoading || !book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-muted rounded mb-8"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 h-[500px] bg-muted rounded"></div>
            <div className="flex-1 space-y-4">
              <div className="h-10 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-10 bg-muted rounded w-40 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="sticky top-20">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-auto shadow-lg rounded-lg object-cover"
            />
            <Button className="w-full mt-6" asChild>
              <Link to={`/read/${book.id}`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Leer ahora
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2">{book.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">por {book.author}</p>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{book.rating}</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <span>{book.year}</span>
            <span className="text-muted-foreground">|</span>
            <span>{book.pages} páginas</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {book.genre.map((g) => (
              <span key={g} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                {g}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold font-playfair mb-3">Descripción</h2>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed">{book.description}</p>

          <div className="border-t border-border pt-6 mt-6">
            <h2 className="text-xl font-semibold font-playfair mb-4">Detalles</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-muted-foreground">Título</h3>
                <p>{book.title}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Autor</h3>
                <p>{book.author}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Año de publicación</h3>
                <p>{book.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Número de páginas</h3>
                <p>{book.pages}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Género</h3>
                <p>{book.genre.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">Calificación</h3>
                <p>{book.rating}/5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
