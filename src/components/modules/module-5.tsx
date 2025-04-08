import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { CodeBlock } from "../ui/code-block"

export default function Module5() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 5: Ejercicios Avanzados con Arrays y Objetos</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory5">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>¿Qué es la programación funcional y cómo se relaciona con los métodos de array en JavaScript?</li>
              <li>¿Cuál es la diferencia entre .map(), .filter() y .reduce()?</li>
              <li>¿Qué es la inmutabilidad y por qué es importante en la programación funcional?</li>
              <li>¿Cómo funcionan los callbacks en JavaScript? Explicá con un ejemplo.</li>
              <li>¿Qué es el método .some() y en qué casos se utiliza?</li>
              <li>¿Qué es el método .find() y cómo se diferencia de .filter()?</li>
              <li>¿Cómo se puede combinar .map() con .filter() para transformar y filtrar datos?</li>
              <li>¿Qué es la desestructuración de arrays y para qué sirve?</li>
              <li>¿Cómo se puede usar el operador spread (...) con arrays?</li>
              <li>¿Qué es el método .flatMap() y en qué casos es útil?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice5">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">1. Ejercicios con base de datos en memoria</h3>
                <p className="mb-4">
                  A partir de este punto vas a trabajar con una base de datos simulada que representa información sobre películas, directores, géneros, críticas y críticos.
                </p>
                <p className="mb-4">
                  Esta base está guardada como un objeto JavaScript llamado basededatos, que contiene arrays con información estructurada. Todos los ejercicios se resuelven usando métodos de array como .map(), .filter(), .find(), .some(), .reduce(), etc.
                </p>
                <p className="mb-4">
                  No hace falta que sepas cómo conectar una base de datos real. Esta estructura se usa solo para practicar lógica y estructuras de datos complejas.
                </p>
                <p className="mb-4">
                  Para cada ejercicio, se te va a pedir implementar una función que recorra y procese los datos de forma adecuada.
                </p>
                
                <p className="mb-4">Ejemplo de acceso a los datos:</p>
                <CodeBlock code={`console.log(basededatos.peliculas); // muestra la lista de películas
console.log(basededatos.calificaciones); // muestra la lista de críticas`} />
                
                <h4 className="font-semibold mt-4 mb-2">Recomendaciones</h4>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Cada ejercicio define la estructura esperada de entrada y salida.</li>
                  <li>Podés importar la base como <code className="bg-muted-foreground/20 px-1 rounded">import basededatos from './basededatos.js'</code> o incluirla directamente en tu archivo para probar.</li>
                  <li>Concentrate en manipular arrays usando los métodos que aprendiste en este módulo.</li>
                </ul>
                
                <h4 className="font-semibold mt-4 mb-2">Estructura de la base de datos</h4>
                <p className="mb-4">
                  La base de datos simulada se llama basededatos y es un objeto JavaScript con distintas propiedades. Cada propiedad representa una tabla de información y contiene un array de objetos.
                </p>
                
                <h5 className="font-semibold mt-4 mb-2">peliculas</h5>
                <p className="mb-4">Cada película tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>id: número único identificador</li>
                  <li>nombre: string</li>
                  <li>anio: año de estreno</li>
                  <li>direccionSetFilmacion: objeto con calle, numero y pais</li>
                  <li>directores: array de IDs que referencia a directores</li>
                  <li>generos: array de IDs que referencia a géneros</li>
                </ul>
                
                <h5 className="font-semibold mt-4 mb-2">directores</h5>
                <p className="mb-4">Cada director tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>id: número único</li>
                  <li>nombre: string</li>
                </ul>
                
                <h5 className="font-semibold mt-4 mb-2">paises</h5>
                <p className="mb-4">Cada país tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>id: número único</li>
                  <li>nombre: string</li>
                </ul>
                
                <h5 className="font-semibold mt-4 mb-2">generos</h5>
                <p className="mb-4">Cada género tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>id: número único</li>
                  <li>nombre: string (como 'Acción', 'Comedia')</li>
                </ul>
                
                <h5 className="font-semibold mt-4 mb-2">criticos</h5>
                <p className="mb-4">Cada crítico tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>id: número único</li>
                  <li>nombre: string</li>
                  <li>edad: número</li>
                  <li>pais: ID del país de origen</li>
                </ul>
                
                <h5 className="font-semibold mt-4 mb-2">calificaciones</h5>
                <p className="mb-4">Cada calificación representa una crítica y tiene:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>critico: ID del crítico</li>
                  <li>pelicula: ID de la película</li>
                  <li>puntuacion: número del 1 al 10</li>
                </ul>
                
                <p className="mb-4">Ejemplo de la Base de datos:</p>
                <CodeBlock code={`const basededatos = {
  peliculas: [
    {
      id: 1,
      nombre: "Matrix",
      anio: 1999,
      direccionSetFilmacion: {
        calle: "Calle Falsa",
        numero: 123,
        pais: "Argentina"
      },
      directores: [2],
      generos: [1, 2]
    }
  ],
  directores: [
    { id: 2, nombre: "Lilly Wachowski" }
  ],
  generos: [
    { id: 1, nombre: "Ciencia Ficcion" },
    { id: 2, nombre: "Accion" }
  ],
  criticos: [
    { id: 1, nombre: "Pipo Gorosito", edad: 60, pais: "Argentina" }
  ],
  calificaciones: [
    { critico: 1, pelicula: 1, puntuacion: 8 }
  ]
};`} />
                
                <p className="mb-4">
                  Esta base de datos es a modo de ejemplo.
                  Completarla con la mayor cantidad de objetos reales posibles.
                </p>
                
                <h4 className="font-semibold mt-4 mb-2">Cómo usar esta base</h4>
                <p className="mb-4">
                  Todas las relaciones entre datos se hacen a través de IDs.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Si necesitás buscar las críticas de una película, filtrás basededatos.calificaciones por el ID de esa película.</li>
                  <li>Si querés conocer los datos de un director o crítico, buscás su ID en el array correspondiente (directores, criticos, etc).</li>
                  <li>El acceso es todo en memoria, no hay funciones mágicas: vas a tener que usar .find(), .filter(), .map(), .reduce() y otras herramientas para armar los resultados.</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">2. Ejercicios sobre la BD</h3>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.1. Promedio de años de estreno</h4>
                    <p className="mb-4">
                      Escribí una función que devuelva el promedio del año de estreno de todas las películas.
                    </p>
                    <CodeBlock code={`promedioAnioEstreno() -&gt; 1998.25`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.2. Películas con buena crítica</h4>
                    <p className="mb-4">
                      Escribí una función que devuelva un array con todas las películas que tienen promedio de críticas mayor a un valor dado por parámetro.
                    </p>
                    <CodeBlock code={`pelicuasConCriticaPromedioMayorA(7) -&gt; [Matrix, Cloud Atlas]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.3. Películas dirigidas por alguien</h4>
                    <p className="mb-4">
                      Escribí una función que reciba el nombre de un director y devuelva todas las películas que dirigió.
                    </p>
                    <CodeBlock code={`peliculasDeUnDirector("Steven Spielberg") -&gt; [Indiana Jones...]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.4. Promedio de crítica de una película</h4>
                    <p className="mb-4">
                      Escribí una función que reciba el id de una película y devuelva su promedio de puntuaciones.
                    </p>
                    <CodeBlock code={`promedioDeCriticaBypeliculaId(3) -&gt; 6.5`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.5. Películas con al menos una crítica excelente</h4>
                    <p className="mb-4">
                      Devuelve todas las películas que tienen al menos una crítica con puntuación &gt;= 9.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.6. Información expandida de una película</h4>
                    <p className="mb-4">
                      Dado el nombre de una película, devolvé un objeto con toda su información:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>datos de la película</li>
                      <li>directores como objetos con nombre</li>
                      <li>géneros como objetos con nombre</li>
                      <li>todas sus críticas con:
                        <ul className="list-circle pl-6 space-y-2 mt-2">
                          <li>datos del crítico</li>
                          <li>país del crítico</li>
                        </ul>
                      </li>
                    </ul>
                    <p className="mb-4">Si no existe la película, devolver undefined.</p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.7. Películas por país de filmación</h4>
                    <p className="mb-4">
                      Implementá una función que reciba el nombre de un país y devuelva todas las películas que fueron filmadas allí.
                    </p>
                    <CodeBlock code={`peliculasPorPais("Nueva Zelanda") -&gt; [El señor de los anillos]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.8. Lista de directores con al menos una película</h4>
                    <p className="mb-4">
                      Devolvé una lista con los nombres de todos los directores que tienen al menos una película en la base de datos.
                    </p>
                    <CodeBlock code={`directoresConPeliculas() -&gt; ["Lilly Wachowski", "Steven Spielberg", ...]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.9. Géneros más frecuentes</h4>
                    <p className="mb-4">
                      Calculá cuántas películas hay por género y devolvé un array de objetos con el nombre del género y la cantidad.
                    </p>
                    <CodeBlock code={`generosFrecuentes() -&gt;
[
  { genero: "Accion", cantidad: 3 },
  { genero: "Ciencia Ficcion", cantidad: 2 }
]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.10. Promedio de puntuación por crítico</h4>
                    <p className="mb-4">
                      Devolvé un array con los nombres de los críticos y su promedio de puntuaciones.
                    </p>
                    <CodeBlock code={`promedioPorCritico() -&gt;
[
  { nombre: "Alina Robles", promedio: 3.66 },
  { nombre: "Suzana Mendez", promedio: 5.33 },
]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.11. Películas con más de un director</h4>
                    <p className="mb-4">
                      Devolvé las películas que tienen más de un director.
                    </p>
                    <CodeBlock code={`peliculasConMultiplesDirectores() -&gt; ["Matrix", "Cloud Atlas", "Indiana Jones y los cazadores del arca perdida"]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.12. Top 3 películas mejor calificadas</h4>
                    <p className="mb-4">
                      Mostrá las 3 películas con mejor promedio de crítica, ordenadas de mayor a menor.
                    </p>
                    <CodeBlock code={`top3Peliculas() -&gt; ["Matrix", "Back to the Future", "Cloud Atlas"]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.13. Cantidad de películas por director</h4>
                    <p className="mb-4">
                      Devolvé un array con el nombre de cada director y la cantidad de películas que dirigió.
                    </p>
                    <CodeBlock code={`peliculasPorDirector() -&gt; [
  { nombre: "Steven Spielberg", cantidad: 1 },
  { nombre: "Lilly Wachowski", cantidad: 2 }
]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.14. ¿Qué críticos no han puntuado ninguna película?</h4>
                    <p className="mb-4">
                      Buscá los nombres de los críticos que no aparecen en ninguna calificación.
                    </p>
                    <CodeBlock code={`criticosSinCalificaciones() -&gt; ["Pablo Tomafi"]`} />
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.15. Super Desafío: Informe completo por país de origen del crítico</h4>
                    <p className="mb-4">
                      Devolvé un array donde cada elemento represente un país, e incluya:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Nombre del país</li>
                      <li>Cantidad total de críticas realizadas por críticos de ese país</li>
                      <li>Promedio general de esas puntuaciones</li>
                      <li>Películas distintas que criticaron (solo nombres)</li>
                    </ul>
                    <CodeBlock code={`[
  {
    pais: "Argentina",
    cantidadCriticas: 5,
    promedio: 6.2,
    peliculasCriticadas: ["Matrix", "Cloud Atlas", "Indiana Jones"]
  },
  ...
]`} />
                    <p className="mb-4">
                      Este ejercicio requiere agrupar, buscar relaciones por ID, calcular promedios y evitar duplicados ( 💀).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">3. Simulador de combate Pokémon con datos estructurados</h3>
                <p className="mb-4">
                  Creá dos objetos pikachu y charmander con esta estructura:
                </p>
                <CodeBlock code={`const pikachu = {
  nombre: "Pikachu",
  vida: 100,
  ataque: 40,
  defensa: 25
};`} />
                <p className="mb-4">
                  Creá una función turnoDeAtaque(atacante, defensor) que:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Calcule el daño usando calcularDanio(atacante.ataque, defensor.defensa, critico)</li>
                  <li>Reste ese daño a defensor.vida</li>
                  <li>Muestre un mensaje con el resultado del turno</li>
                  <li>El crítico debe generarse al azar (50% chance).</li>
                </ul>
                <p className="mb-4">
                  Simulá 3 turnos donde se alternan ataques entre Pikachu y Charmander.
                </p>
                <p className="mb-4">
                  Bonus: Si un Pokémon llega a 0 de vida, mostrale el mensaje "¡[nombre] ha sido derrotado!"
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">4. Sistema de ataques múltiples por Pokémon</h3>
                <p className="mb-4">
                  Definí un objeto charizard con esta estructura:
                </p>
                <CodeBlock code={`const charizard = {
  nombre: "Charizard",
  vida: 120,
  ataques: [
    { nombre: "Lanzallamas", poder: 60 },
    { nombre: "Garra Dragón", poder: 40 },
    { nombre: "Ascuas", poder: 30 }
  ],
  defensa: 30
};`} />
                <p className="mb-4">
                  Creá una función usarAtaque(pokemon, ataqueNombre, enemigo) que:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Busque el ataque por nombre en pokemon.ataques</li>
                  <li>Genere un valor booleano critico aleatorio</li>
                  <li>Calcule el daño con calcularDanio(ataque.poder, enemigo.defensa, critico)</li>
                  <li>Reste la vida del enemigo y muestre un mensaje como:</li>
                </ul>
                <p className="mb-4">
                  ¡Charizard usó Lanzallamas contra Pikachu! Causó 45 de daño.
                </p>
                <p className="mb-4">
                  Si el ataque no existe, mostrar "Ese ataque no está disponible."
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
