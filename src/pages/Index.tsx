
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, LogIn, User } from "lucide-react";
import { books } from "@/data/books";

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  // Get 3 featured books
  const featuredBooks = books.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
              Tu Biblioteca Virtual
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Accede a una colección de miles de libros y descubre nuevos mundos desde cualquier lugar.
            </p>
            {!isAuthenticated ? (
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">
                    <User className="mr-2 h-5 w-5" />
                    Crear una cuenta
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/login">
                    <LogIn className="mr-2 h-5 w-5" />
                    Iniciar sesión
                  </Link>
                </Button>
              </div>
            ) : (
              <Button size="lg" asChild>
                <Link to="/catalog">
                  <Book className="mr-2 h-5 w-5" />
                  Explorar catálogo
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-opacity-50 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzQuNTUzYzAgMS4xNi0uOTQgMi4xLTIuMSAyLjEtMS4xNjYgMC0yLjEtLjk0LTIuMS0yLjEgMC0xLjE2Ny45MzQtMi4xIDIuMS0yLjEgMS4xNTYgMCAyLjEuOTMzIDIuMSAyLjEiLz48cGF0aCBkPSJNMzAgMzBjMCAyLjItMS43IDQtNC4wMDMgNEMyMy43MzIgMzQgMjIgMzIuMTk4IDIyIDMwYzAtMi4yMDQgMS43MzMtNCAzLjk5OC00QzI4LjMgMjYgMzAgMjcuNzk1IDMwIDMwIi8+PHBhdGggZD0iTTMwIDM3LjY2N2MwIDIuMjAzLTEuNzMzIDQtMy45OTcgNC0yLjI3IDAtNC4wMDMtMS43OTYtNC4wMDMtNHMxLjczMy00IDQuMDAzLTRjMi4yNjQgMCAzLjk5NyAxLjc5OCAzLjk5NyA0Ii8+PHBhdGggZD0iTTIyIDMwLjAwNWMwIDMuMy0yLjcgNi02LjAwNSA2QzEyLjY2NyAzNi4wMDUgMTAgMzMuMzA3IDEwIDMwLjAwNXMyLjY2Ny02LjAwMyA1Ljk5NS02LjAwM0MxOS4zIDI0LjAwMiAyMiAyNi43MDcgMjIgMzAuMDA1Ii8+PHBhdGggZD0iTTIyIDIyLjMzYzAgMi4yMDYtMS43OTQgNC00IDQtMi4yMSAwLTQtMS43OTQtNC00IDAtMi4yMDQgMS43OS00IDQtNCAyLjIwNiAwIDQgMS43OTUgNCA0Ii8+PHBhdGggZD0iTTMwIDIyLjM3YzAgMy4zMDQtMi42OTYgNi02LjAwNSA2LTMuMzE3IDAtNS45OTUtMi42OTYtNS45OTUtNnMyLjY4LTYgNS45OTUtNmMzLjMxIDAgNi4wMDUgMi42OTYgNi4wMDUgNk0zMCAxNS4wM2MwIDIuMi0xLjc4NSA0LTMuOTk3IDQtMi4yMDggMC0zLjk5OC0xLjgtMy45OTgtNHMxLjc5LTQgMy45OTgtNEMyOC4yMTUgMTEuMDMgMzAgMTIuODMgMzAgMTUuMDNNMjIgMTVjMCAxLjEwNC0uODkzIDItMiAyLTEuMTA1IDAtMi0uODk1LTItMiAwLTEuMTA0Ljg5NC0yIDItMiAxLjEwNiAwIDIgLjg5NiAyIDIiLz48cGF0aCBkPSJNMzggMjIuMzY4YzAgMS4xNi0uOTQ1IDIuMS0yLjEgMi4xLTEuMTYgMC0yLjEtLjk0LTIuMS0yLjEgMC0xLjE2LjkzNS0yLjEgMi4xLTIuMSAxLjE1NCAwIDIuMDk4LjkzOCAyLjEgMi4xIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">¿Por qué Biblioteca Virtual?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Catálogo Extenso</h3>
              <p className="text-muted-foreground">Miles de libros de todos los géneros disponibles para ti en cualquier momento.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M2 22v-5h7V7H2V2h20v5h-7v10h7v5H2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lectura Personalizada</h3>
              <p className="text-muted-foreground">Ajusta el tamaño de texto, brillo y más para una experiencia cómoda de lectura.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceso Sin Límites</h3>
              <p className="text-muted-foreground">Lee cuando quieras y donde quieras desde tu dispositivo favorito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">Libros Destacados</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="book-card rounded-lg overflow-hidden shadow-md bg-white">
                <div className="h-[300px] overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-1">{book.title}</h3>
                  <p className="text-muted-foreground mb-3">por {book.author}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {book.year} • {book.pages} páginas
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to={isAuthenticated ? "/catalog" : "/register"}>
                Ver más libros
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Comienza tu aventura literaria hoy</h2>
            <p className="text-lg mb-8">Únete a miles de lectores y disfruta de una biblioteca completa en tus manos.</p>
            
            {!isAuthenticated ? (
              <Button size="lg" asChild>
                <Link to="/register">Crear cuenta gratuita</Link>
              </Button>
            ) : (
              <Button size="lg" asChild>
                <Link to="/catalog">Explorar catálogo</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
