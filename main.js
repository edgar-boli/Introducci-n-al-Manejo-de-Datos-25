// Cambia a la base de datos MusicaVallenata
use MusicaVallenata;

// Inserta un documento en la colección Canciones 
db.Canciones.insertOne({
    _id:1,
    titulo: "La Gota Fria",
    artista: "Carlos Vives",
    autor: "Emiliano Zuleta",
    album: "Clásicos de la Provincia",
    anio: 1993,
    genero: "Vallenato",
    duracion: "4:25",
    letra: "Me lleva el o me lo llevo yo...",
    reproducciones: 1500000
});
db.Canciones.find();
db.Canciones.insertMany([
    {
    _id:2,
    titulo: "La Gota Fria",
    artista: "Carlos Vives",
    autor: "Emiliano Zuleta",
    album: "Clásicos de la Provincia",
    anio: 1993,
    genero: "Vallenato",
    duracion: "4:25",
    letra: "Me lleva el o me lo llevo yo...",
    reproducciones: 1500000
    },
    {
        _id:3,
        titulo: "Obsesión",
        artista: "Jorge Celedon",
        autor: "Iván Calderón",
        album: "Sencillo",
        anio: 2002,
        genero: "Vallenato",
        duracion: "3:40",
        letra: "Ya no comprendo por qué no me háblas...",
        reproducciones: 2000000
    }
]);
db.Canciones.find();

db.Canciones.find({ anio: 1993 })

db.Canciones.find({ reproducciones: { $gt: 2000000}  })

db.Canciones.find({genero: "Vallenato", duracion: { $gte: "4:00"} })

db.Canciones.updateOne(
    { _id: 1 },
    { $set: { reproducciones: 1600000 } }
)
db.Canciones.find();

db.Canciones.updateMany(
    { genero: "Vallenato" },
    { $inc: { reproducciones: 100000 } }
)

db.Canciones.find();

// Eliminar un documento específico
db.Canciones.deleteOne({ _id: 1 })

// Eliminar Multiples documentos
db.Canciones.deleteMany({ artista: "Carlos Vives" })

// Eliminar todos los documentos de una colección
db.Canciones.deleteMany({})

// Elimina la colección 
db.Canciones.drop()

db.Canciones.find();
