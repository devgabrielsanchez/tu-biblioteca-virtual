
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";

// Contenido de muestra para el lector
const sampleContent = `
<h1>Capítulo 1</h1>

<p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.</p>

<p>Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad.</p>

<p>Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los más del año, se daba a leer libros de caballerías, con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda. Y llegó a tanto su curiosidad y desatino en esto, que vendió muchas fanegas de tierra de sembradura para comprar libros de caballerías en que leer, y así, llevó a su casa todos cuantos pudo haber dellos.</p>

<h2>Continuación</h2>

<p>Y de todos, ningunos le parecían tan bien como los que compuso el famoso Feliciano de Silva, porque la claridad de su prosa y aquellas entricadas razones suyas le parecían de perlas, y más cuando llegaba a leer aquellos requiebros y cartas de desafíos, donde en muchas partes hallaba escrito: «La razón de la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece, que con razón me quejo de la vuestra fermosura». Y también cuando leía: «... los altos cielos que de vuestra divinidad divinamente con las estrellas os fortifican, y os hacen merecedora del merecimiento que merece la vuestra grandeza».</p>

<p>Con estas razones perdía el pobre caballero el juicio, y desvelábase por entenderlas y desentrañarles el sentido, que no se lo sacara ni las entendiera el mesmo Aristóteles, si resucitara para sólo ello. No estaba muy bien con las heridas que don Belianís daba y recebía, porque se imaginaba que, por grandes maestros que le hubiesen curado, no dejaría de tener el rostro y todo el cuerpo lleno de cicatrices y señales. Pero, con todo, alababa en su autor aquel acabar su libro con la promesa de aquella inacabable aventura, y muchas veces le vino deseo de tomar la pluma y dalle fin al pie de la letra, como allí se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si otros mayores y continuos pensamientos no se lo estorbaran.</p>

<h2>Tercera Parte</h2>

<p>Tuvo muchas veces competencia con el cura de su lugar —que era hombre docto, graduado en Sigüenza—, sobre cuál había sido mejor caballero: Palmerín de Ingalaterra o Amadís de Gaula; mas maese Nicolás, barbero del mesmo pueblo, decía que ninguno llegaba al Caballero del Febo, y que si alguno se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque tenía muy acomodada condición para todo; que no era caballero melindroso, ni tan llorón como su hermano, y que en lo de la valentía no le iba en zaga.</p>

<p>En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches leyendo de claro en claro, y los días de turbio en turbio; y así, del poco dormir y del mucho leer, se le secó el celebro, de manera que vino a perder el juicio. Llenósele la fantasía de todo aquello que leía en los libros, así de encantamentos como de pendencias, batallas, desafíos, heridas, requiebros, amores, tormentas y disparates imposibles; y asentósele de tal modo en la imaginación que era verdad toda aquella máquina de aquellas sonadas soñadas invenciones que leía, que para él no había otra historia más cierta en el mundo.</p>

<h1>Capítulo 2</h1>

<p>Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner en efecto su pensamiento, apretándole a ello la falta que él pensaba que hacía en el mundo su tardanza, según eran los agravios que pensaba deshacer, tuertos que enderezar, sinrazones que emendar, y abusos que mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna de su intención, y sin que nadie le viese, una mañana, antes del día, que era uno de los calurosos del mes de julio, se armó de todas sus armas, subió sobre Rocinante, puesta su mal compuesta celada, embrazó su adarga, tomó su lanza, y por la puerta falsa de un corral salió al campo, con grandísimo contento y alborozo de ver con cuánta facilidad había dado principio a su buen deseo.</p>

<p>Mas apenas se vio en el campo, cuando le asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la comenzada empresa; y fue que le vino a la memoria que no era armado caballero, y que, conforme a ley de caballería, ni podía ni debía tomar armas con ningún caballero; y, puesto que lo fuera, había de llevar armas blancas, como novel caballero, sin empresa en el escudo, hasta que por su esfuerzo la ganase.</p>

<p>Estos pensamientos le hicieron titubear en su propósito; mas, pudiendo más su locura que otra razón alguna, propuso de hacerse armar caballero del primero que topase, a imitación de otros muchos que así lo hicieron, según él había leído en los libros que tal le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en teniendo lugar, que lo fuesen más que un armiño; y con esto se quietó y prosiguió su camino, sin llevar otro que aquel que su caballo quería, creyendo que en aquello consistía la fuerza de las aventuras.</p>
`;

const Reader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [book, setBook] = useState(books.find((b) => b.id === id));
  const [isLoading, setIsLoading] = useState(true);
  const [fontSize, setFontSize] = useState(100); // Percentage of base font size
  const [pageNumber, setPageNumber] = useState(1);
  
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

  const handleZoomIn = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  const handleZoomOut = () => {
    if (fontSize > 70) {
      setFontSize(fontSize - 10);
    }
  };

  if (isLoading || !book) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px-80px)]">
        <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Reader header */}
      <header className="sticky top-0 z-10 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" onClick={() => navigate(`/book/${id}`)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al libro
              </Button>
              <span className="ml-4 hidden md:block font-playfair">{book.title}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={handleZoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              
              <div className="w-24 md:w-32">
                <Slider
                  value={[fontSize]}
                  min={70}
                  max={150}
                  step={10}
                  onValueChange={(value) => setFontSize(value[0])}
                />
              </div>
              
              <Button variant="ghost" size="icon" onClick={handleZoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              
              <span className="text-sm text-muted-foreground ml-2 hidden md:block">
                {fontSize}%
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Página {pageNumber} de {book.pages > 10 ? 10 : book.pages}
            </div>
          </div>
        </div>
      </header>

      {/* Reader content */}
      <div className="container mx-auto px-4 py-8">
        <div className="reader-container">
          <div 
            className="prose prose-lg mx-auto"
            style={{ fontSize: `${fontSize}%` }}
            dangerouslySetInnerHTML={{ __html: sampleContent }}
          />

          <div className="book-page py-8 my-8">
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
              >
                Página anterior
              </Button>
              
              <Button 
                disabled={pageNumber >= (book.pages > 10 ? 10 : book.pages)}
                onClick={() => setPageNumber(prev => Math.min(prev + 1, book.pages > 10 ? 10 : book.pages))}
              >
                Página siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
