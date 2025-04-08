import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { CodeBlock } from "../ui/code-block"

export default function Module7() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 7: Asincronía en JavaScript, promesas y async/await</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory7">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>¿Qué significa que JavaScript sea un lenguaje asincrónico y no bloqueante?</li>
              <li>¿Qué es el Event Loop y qué rol cumple en la asincronía?</li>
              <li>
                ¿Qué es una promesa (<code className="bg-muted-foreground/20 px-1 rounded">Promise</code>) y cuáles son
                sus tres posibles estados?
              </li>
              <li>¿Cómo se crea una promesa manualmente?</li>
              <li>
                ¿Cómo se maneja el resultado de una promesa usando{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.then()</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.catch()</code>?
              </li>
              <li>
                ¿Qué ventaja tiene <code className="bg-muted-foreground/20 px-1 rounded">async/await</code> frente a{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.then()</code>?
              </li>
              <li>
                ¿Qué ocurre si dentro de una función <code className="bg-muted-foreground/20 px-1 rounded">async</code>{" "}
                ocurre un error y no se usa <code className="bg-muted-foreground/20 px-1 rounded">try/catch</code>?
              </li>
              <li>
                ¿Qué hace <code className="bg-muted-foreground/20 px-1 rounded">Promise.all()</code> y en qué casos
                puede fallar?
              </li>
              <li>
                ¿Cuál es la diferencia entre <code className="bg-muted-foreground/20 px-1 rounded">Promise.all()</code>{" "}
                y <code className="bg-muted-foreground/20 px-1 rounded">Promise.race()</code>?
              </li>
              <li>
                ¿Qué es una función <code className="bg-muted-foreground/20 px-1 rounded">async</code>? ¿Qué devuelve
                siempre?
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice7">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">1. Entrenador Pokémon con evolución (complejo)</h3>

                <p className="mb-2">
                  Crea la función <code className="bg-muted-foreground/20 px-1 rounded">entrenarPokemon(pokemon)</code>:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">
                      Si el nombre es válido, la promesa se resuelve en 2 segundos sumando un nivel a su nivel actual:
                    </p>

                    <CodeBlock code={`const pokemon = { nombre: "Pikachu", nivel: 2 }`} />
                  </li>
                  <li>
                    <p className="mb-2">
                      Luego, <strong>encadená</strong>{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded text-green-600">.then()</code> para aplicar
                      entrenamientos adicionales:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Cada <code className="bg-muted-foreground/20 px-1 rounded">.then()</code> aumenta el nivel en +1
                      </li>
                      <li>
                        Si llega al nivel 3, muestra:
                        <CodeBlock code={`¡Pikachu evolucionó a Raichu!`} />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-2">
                      Si se rechaza, mostrar el error con{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">.catch()</code>.
                    </p>
                  </li>
                </ol>

                <div className="mt-4 bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>entrenarPokemon("Pikachu")</pre>
                  <pre> .then(entrenar)</pre>
                  <pre> .then(entrenar)</pre>
                  <pre> .then(entrenar)</pre>
                  <pre> .catch(console.error);</pre>
                </div>

                <CodeBlock code={`entrenarPokemon("Pikachu")
 .then(entrenar)
 .then(entrenar)
 .then(entrenar)
 .catch(console.error);`} />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">2. Carga de datos galácticos</h3>

                <p className="mb-2">Simulá una carga de información Jedi desde una galaxia muy lejana.</p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">
                      Creá una función <code className="bg-muted-foreground/20 px-1 rounded">obtenerJedi(id)</code> que
                      devuelva una promesa con delay de 1 segundo.
                    </p>
                  </li>
                  <li>
                    <p className="mb-2">La función debe retornar un objeto como:</p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>
                        {"{"} id: 1, nombre: "Obi-Wan", nivel: "Maestro" {"}"}
                      </pre>
                    </div>

                    <CodeBlock code={`{ id: 1, nombre: "Obi-Wan", nivel: "Maestro" }`} />
                  </li>
                  <li>
                    <p className="mb-2">
                      Luego creá una función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">mostrarJedi(id)</code> con{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">async/await</code> que:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Llame a <code className="bg-muted-foreground/20 px-1 rounded">obtenerJedi</code>
                      </li>
                      <li>
                        Muestre por consola:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Jedi encontrado: Obi-Wan (Maestro)</pre>
                        </div>

                        <CodeBlock code={`Jedi encontrado: Obi-Wan (Maestro)`} />
                      </li>
                    </ul>
                  </li>
                </ol>

                <p className="mt-4">
                  Si el ID es inválido (ej: <code className="bg-muted-foreground/20 px-1 rounded">undefined</code> o
                  menor que 1), la promesa debe rechazarse y{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">mostrarJedi</code> debe capturar el error con{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">try/catch</code>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">3. Jedi + prueba en el Templo</h3>

                <p className="mb-2">
                  Crea una nueva funcion que utilice{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">mostrarJedi(id)</code> y tengo estos pasos
                  adicionales:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">
                      La promesa <code className="bg-muted-foreground/20 px-1 rounded">obtenerJedi(id)</code> devuelve
                      un objeto:
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>
                        {"{"} id: 2, nombre: "Anakin", nivel: "Padawan" {"}"}
                      </pre>
                    </div>

                    <CodeBlock code={`{ id: 2, nombre: "Anakin", nivel: "Padawan" }`} />
                  </li>
                  <li>
                    <p className="mb-2">
                      Luego de obtener el Jedi, hace una función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">evaluarPrueba(jedi)</code> que:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Espera 3 segundos (
                        <code className="bg-muted-foreground/20 px-1 rounded">setTimeout + Promise</code>)
                      </li>
                      <li>
                        Si el Jedi es "Maestro" → muestra:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Anakin pasó la prueba con sabiduría.</pre>
                        </div>

                        <CodeBlock code={`Anakin pasó la prueba con sabiduría.`} />
                      </li>
                      <li>
                        Si es "Padawan" → muestra:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Anakin necesita más entrenamiento.</pre>
                        </div>

                        <CodeBlock code={`Anakin necesita más entrenamiento.`} />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-2">
                      Usá <code className="bg-muted-foreground/20 px-1 rounded">async/await</code> con{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">try/catch</code> para todo.
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">4. Evolución Pokémon con piedras</h3>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">
                      Creá una función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">usarPiedraEvolutiva(pokemon, piedra)</code>{" "}
                      que devuelva una promesa con 3 segundos de delay.
                    </p>
                  </li>
                  <li>
                    <p className="mb-2">
                      Si el Pokémon puede evolucionar con esa piedra, se resuelve con el Pokémon evolucionado:
                    </p>
                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>
                        usarPiedraEvolutiva({"{"} nombre: "Eevee" {"}"}, "piedraFuego") →
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Flareon", evolucionado: true {"}"}
                      </pre>
                    </div>

                    <CodeBlock code={`usarPiedraEvolutiva({ nombre: "Eevee" }, "piedraFuego") →
{ nombre: "Flareon", evolucionado: true }`} />
                  </li>
                  <li>
                    <p className="mb-2">Si no es compatible, se rechaza con:</p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>Eevee no puede evolucionar con piedraLunar.</pre>
                    </div>

                    <CodeBlock code={`Eevee no puede evolucionar con piedraLunar.`} />
                  </li>
                  <li>
                    <p className="mb-2">
                      Luego, creá una función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">intentarEvolucion(pokemon, piedra)</code>{" "}
                      que:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Use <code className="bg-muted-foreground/20 px-1 rounded">async/await</code>
                      </li>
                      <li>Espere la evolución</li>
                      <li>
                        Si se logra, muestre:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Eevee ha evolucionado a Flareon con la piedra Fuego.</pre>
                        </div>

                        <CodeBlock code={`Eevee ha evolucionado a Flareon con la piedra Fuego.`} />
                      </li>
                      <li>Si falla, mostrar el error capturado.</li>
                    </ul>
                  </li>
                </ol>

                <h4 className="font-semibold mt-6 mb-2">Datos sugeridos (se puede expandir)</h4>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const evoluciones = {"{"}</pre>
                  <pre> Eevee: {"{"}</pre>
                  <pre> piedraFuego: "Flareon", piedraAgua: "Vaporeon", piedraTrueno: "Jolteon"</pre>
                  <pre> {"}"},</pre>
                  <pre> Pikachu: {"{"}</pre>
                  <pre> piedraTrueno: "Raichu"</pre>
                  <pre> {"}"}</pre>
                  <pre>{"};"}</pre>
                </div>

                <CodeBlock code={`const evoluciones = {
 Eevee: {
 piedraFuego: "Flareon", piedraAgua: "Vaporeon", piedraTrueno: "Jolteon"
 },
 Pikachu: {
 piedraTrueno: "Raichu"
 }
};`} />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  5. Misión final: Explorador Galáctico (Star Wars API + async/await + fetch)
                </h3>

                <p className="mb-4">
                  Tu objetivo es construir un pequeño módulo que obtenga datos reales del universo Star Wars usando la{" "}
                  <strong>API pública de SWAPI</strong> (
                  <code className="bg-muted-foreground/20 px-1 rounded">https://swapi.dev/api/</code>). Vas a usar{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">fetch</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">async/await</code>, procesamiento de arrays y
                  funciones asincrónicas para convertir datos crudos en información útil.
                </p>

                <h4 className="font-semibold mt-4 mb-2">
                  ¿Cómo hacer un <span className="text-green-600 font-mono">fetch</span>?
                </h4>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>async function obtenerPersonajes() {"{"}</pre>
                  <pre> const respuesta = await fetch("https://swapi.dev/api/people");</pre>
                  <pre> const data = await respuesta.json();</pre>
                  <pre> console.log(data.results); // array de personajes</pre>
                  <pre>{"}"}</pre>
                </div>

                <CodeBlock code={`async function obtenerPersonajes() {
 const respuesta = await fetch("https://swapi.dev/api/people");
 const data = await respuesta.json();
 console.log(data.results); // array de personajes
}`} />

                <p className="mt-4 mb-2">
                  Todos los recursos están paginados. Si necesitás más de 10 resultados, tendrás que recorrer{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.next</code>.
                </p>

                <h4 className="font-semibold mt-6 mb-2">Recursos útiles</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Personajes:{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">https://swapi.dev/api/people/</code>
                  </li>
                  <li>
                    Planetas:{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">https://swapi.dev/api/planets/</code>
                  </li>
                  <li>
                    Naves: <code className="bg-muted-foreground/20 px-1 rounded">https://swapi.dev/api/starships/</code>
                  </li>
                  <li>
                    Películas: <code className="bg-muted-foreground/20 px-1 rounded">https://swapi.dev/api/films/</code>
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-2">Desafíos</h4>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-2">a. Mostrar los primeros 5 personajes con nombre y altura</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Obtené la lista de personajes.</li>
                      <li>
                        Mostrá los primeros 5 así:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Luke Skywalker - Altura: 172cm</pre>
                          <pre>Leia Organa - Altura: 150cm</pre>
                          <pre>...</pre>
                        </div>

                        <CodeBlock code={`Luke Skywalker - Altura: 172cm
Leia Organa - Altura: 150cm
...`} />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">b. Mostrar el planeta natal de un personaje</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Buscá el personaje con nombre exacto{" "}
                        <code className="bg-muted-foreground/20 px-1 rounded">"Luke Skywalker"</code>.
                      </li>
                      <li>
                        Usá su propiedad <code className="bg-muted-foreground/20 px-1 rounded">homeworld</code> (una
                        URL) para hacer un segundo <code className="bg-muted-foreground/20 px-1 rounded">fetch</code>.
                      </li>
                      <li>
                        Mostrá:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>Luke Skywalker vive en Tatooine</pre>
                        </div>

                        <CodeBlock code={`Luke Skywalker vive en Tatooine`} />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">c. Mostrar todos los planetas con clima árido</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Obtené todos los planetas (recordá que hay paginación).</li>
                      <li>
                        Filtrá aquellos con <code className="bg-muted-foreground/20 px-1 rounded">"arid"</code> en el
                        campo <code className="bg-muted-foreground/20 px-1 rounded">climate</code>.
                      </li>
                      <li>Mostralos con su nombre y clima.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">d. Mostrar la nave más grande</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Obtené todas las naves espaciales.</li>
                      <li>
                        Compará el campo <code className="bg-muted-foreground/20 px-1 rounded">length</code>.
                      </li>
                      <li>
                        Mostrá:
                        <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-2">
                          <pre>La nave más grande es: Executor (longitud: 19000)</pre>
                        </div>

                        <CodeBlock code={`La nave más grande es: Executor (longitud: 19000)`} />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">e. Mostrar información completa de una película</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Obtené una película con ID (Ejemplo 1, A New Hope).</li>
                      <li>
                        Mostrá:
                        <ul className="list-circle pl-6 space-y-2 mt-2">
                          <li>Título</li>
                          <li>Director</li>
                          <li>Año</li>
                          <li>Todos los personajes (mostrar nombre, no URL)</li>
                        </ul>
                      </li>
                    </ul>

                    <p className="mt-4">
                      Vas a necesitar hacer varios <code className="bg-muted-foreground/20 px-1 rounded">fetch</code> en
                      paralelo (<code className="bg-muted-foreground/20 px-1 rounded">Promise.all</code>) para obtener
                      los nombres de los personajes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
