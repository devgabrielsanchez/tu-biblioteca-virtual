
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { books as allBooks } from "@/data/books";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Search, Book as BookIcon } from "lucide-react";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [books, setBooks] = useState(allBooks);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique genres
  const genres = Array.from(
    new Set(allBooks.flatMap((book) => book.genre))
  ).sort();

  // Filter books based on search term and genre
  useEffect(() => {
    let filteredBooks = allBooks;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerSearchTerm) ||
          book.author.toLowerCase().includes(lowerSearchTerm)
      );
    }

    if (selectedGenre) {
      filteredBooks = filteredBooks.filter((book) =>
        book.genre.includes(selectedGenre)
      );
    }

    setBooks(filteredBooks);
  }, [searchTerm, selectedGenre]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h1 className="text-3xl font-bold font-playfair mb-4 md:mb-0">Catálogo de Libros</h1>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:flex-none md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por título o autor"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="bg-background border border-input rounded-md h-10 px-3 py-2 text-sm"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Todos los géneros</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="book-card rounded-lg overflow-hidden shadow-md bg-white">
              <div className="h-[300px] bg-muted animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 w-3/4 bg-muted animate-pulse mb-2 rounded"></div>
                <div className="h-4 w-1/2 bg-muted animate-pulse mb-4 rounded"></div>
                <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : books.length === 0 ? (
        <div className="text-center p-12">
          <BookIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
          <h2 className="mt-4 text-xl font-semibold">No se encontraron libros</h2>
          <p className="text-muted-foreground mt-2">
            Intenta con otra búsqueda o categoría
          </p>
          <Button 
            variant="outline" 
            onClick={() => { setSearchTerm(""); setSelectedGenre(""); }}
            className="mt-4"
          >
            Mostrar todos los libros
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <Card className="book-card h-full flex flex-col">
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="font-playfair font-bold text-lg mb-1">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">por {book.author}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {book.genre.map((g) => (
                      <span key={g} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4 flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    {book.year}
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm">{book.rating}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
