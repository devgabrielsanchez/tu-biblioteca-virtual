
// Datos simulados para nuestro catálogo de libros
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string[];
  year: number;
  description: string;
  pages: number;
  rating: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "https://m.media-amazon.com/images/I/81pU9fUr+fL._SL1500_.jpg",
    genre: ["Clásico", "Aventura"],
    year: 1605,
    description: "El ingenioso hidalgo Don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante. Sale de su aldea para hacer justicia en nombre de su dama, Dulcinea del Toboso, acompañado de su fiel escudero, Sancho Panza.",
    pages: 863,
    rating: 4.8
  },
  {
    id: "2",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    cover: "https://m.media-amazon.com/images/I/81HnUctEDJL._SY466_.jpg",
    genre: ["Realismo mágico", "Ficción"],
    year: 1967,
    description: "Cien años de soledad es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español. La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
    pages: 471,
    rating: 4.7
  },
  {
    id: "3",
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    cover: "https://m.media-amazon.com/images/I/71jLBXtWJWL._SY466_.jpg",
    genre: ["Fantasía", "Aventura"],
    year: 1954,
    description: "El Señor de los Anillos es una trilogía que narra la lucha por el Anillo Único y la batalla contra el Señor Oscuro Sauron. Sigue la misión del hobbit Frodo Bolsón como el Portador del Anillo, con la misión de destruirlo en el Monte del Destino, dentro del país de Mordor.",
    pages: 1178,
    rating: 4.9
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    cover: "https://m.media-amazon.com/images/I/81StSOpmkjL._SY466_.jpg",
    genre: ["Distopía", "Ciencia ficción"],
    year: 1949,
    description: "1984 es una novela política de ficción distópica escrita por George Orwell. La novela introduce los conceptos del omnipresente y vigilante Gran Hermano, la policía del pensamiento y la neolengua, adaptación del inglés que reduce el número de palabras y elimina los conceptos indeseables.",
    pages: 326,
    rating: 4.6
  },
  {
    id: "5",
    title: "Rayuela",
    author: "Julio Cortázar",
    cover: "https://m.media-amazon.com/images/I/717Xf7oYSgL._SY466_.jpg",
    genre: ["Ficción experimental", "Literatura latinoamericana"],
    year: 1963,
    description: "Rayuela es la obra cumbre de Julio Cortázar. Esta novela rompedora, múltiple y caleidoscópica propone distintas lecturas del mismo texto: lineal, saltando capítulos o en un orden propuesto por el mismo autor.",
    pages: 736,
    rating: 4.5
  },
  {
    id: "6",
    title: "El Alquimista",
    author: "Paulo Coelho",
    cover: "https://m.media-amazon.com/images/I/61bM+C1ptXL._SY466_.jpg",
    genre: ["Ficción", "Aventura"],
    year: 1988,
    description: "El Alquimista relata las aventuras de Santiago, un joven pastor andaluz que un día abandonó su rebaño para ir en pos de una quimera. Con este enriquecedor viaje por las arenas del desierto, Paulo Coelho nos recuerda la importancia de seguir nuestros sueños y de atender a nuestros corazones.",
    pages: 192,
    rating: 4.3
  },
  {
    id: "7",
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    cover: "https://m.media-amazon.com/images/I/81QjYjLU-qL._SY466_.jpg",
    genre: ["Realismo mágico", "Ficción histórica"],
    year: 1982,
    description: "La Casa de los Espíritus narra la historia de la poderosa familia Trueba a lo largo de cuatro generaciones de mujeres de fuerte temperamento, pasiones y luchas: Clara, Blanca y Alba. La historia se inicia a principios del siglo XX, con la llegada de los tractores al campo, y termina en los años setenta con la conspiración militar que derrocó al presidente constitucional chileno Salvador Allende.",
    pages: 442,
    rating: 4.5
  },
  {
    id: "8",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    cover: "https://m.media-amazon.com/images/I/81kYoGJ38dL._SY466_.jpg",
    genre: ["Cuentos", "Ficción"],
    year: 1944,
    description: "Ficciones es quizá el libro más reconocido de Jorge Luis Borges. Entre sus cuentos destacan 'El Sur', 'La biblioteca de Babel' y 'El jardín de senderos que se bifurcan'. Borges utiliza la metafísica, las referencias y las ilusiones literarias para invitar a los lectores a realizar múltiples lecturas.",
    pages: 218,
    rating: 4.7
  },
  {
    id: "9",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    cover: "https://m.media-amazon.com/images/I/81KsdXmOfjL._SY466_.jpg",
    genre: ["Realismo mágico", "Novela"],
    year: 1955,
    description: "Pedro Páramo es una de las obras maestras de la literatura hispanoamericana del siglo XX. La novela cuenta la historia de Juan Preciado que, siguiendo la promesa hecha a su madre moribunda, llega a Comala, un pueblo moribundo en el que solo habitan fantasmas para conocer a su padre, Pedro Páramo, quien es responsable de la desolación del pueblo.",
    pages: 142,
    rating: 4.6
  },
  {
    id: "10",
    title: "Crimen y castigo",
    author: "Fiódor Dostoyevski",
    cover: "https://m.media-amazon.com/images/I/71OY9urscVL._SY466_.jpg",
    genre: ["Novela psicológica", "Clásico"],
    year: 1866,
    description: "Crimen y castigo es una novela que trata sobre las dificultades económicas de un estudiante, Rodion Raskólnikov, que decide asesinar a una cruel anciana prestamista para robarle. Con este acto, pretende liberarse de problemas monetarios y sacar a su familia de la miseria, además de demostrar que pertenece al grupo de personas extraordinarias que no son juzgadas moralmente.",
    pages: 551,
    rating: 4.7
  }
];
