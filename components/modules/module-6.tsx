import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Module6() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 6: Funciones avanzadas y callbacks</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory6">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>¿Qué es un callback en JavaScript? ¿Podés dar un ejemplo simple?</li>
              <li>¿Qué significa que una función sea de "orden superior" (higher-order function)?</li>
              <li>¿Cuál es la diferencia entre pasar una función como argumento y ejecutarla?</li>
              <li>¿Qué es una función anónima? ¿Y una arrow function?</li>
              <li>
                ¿En qué se diferencian una arrow function y una función normal en cuanto a{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">this</code>?
              </li>
              <li>
                ¿Cómo funciona <code className="bg-muted-foreground/20 px-1 rounded">setTimeout()</code>? ¿Qué
                parámetros recibe?
              </li>
              <li>
                ¿Qué hace <code className="bg-muted-foreground/20 px-1 rounded">setInterval()</code> y cómo se detiene?
              </li>
              <li>
                ¿Por qué los métodos <code className="bg-muted-foreground/20 px-1 rounded">.map()</code>,{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.reduce()</code> usan funciones como argumento?
              </li>
              <li>¿Se puede devolver una función desde otra función? ¿Para qué serviría eso?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice6">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div>
                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">ejecutarTurno(jugador, accion)</code> que
                  reciba:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <code className="bg-muted-foreground/20 px-1 rounded">jugador</code>: un string con el nombre
                  </li>
                  <li>
                    <code className="bg-muted-foreground/20 px-1 rounded">accion</code>: una función callback que
                    representa la acción que va a realizar el jugador
                  </li>
                </ul>

                <p className="mt-4 mb-2">La función debe ejecutar el callback y mostrar:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>Turno de Ash</pre>
                  <pre>Resultado: [lo que devuelva la acción]</pre>
                </div>

                <div className="mt-4 bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>ejecutarTurno("Ash", () {">"}= "Lanza Pokébola");</pre>
                </div>

                <p className="mt-4">
                  Pasale una función que devuelva algo más complejo. Ser creativos. Podes utilizar alguna de las que ya
                  tenes definidas en los módulos anteriores?
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">2. Agenda de eventos</h3>

                <p className="mb-2">Simulá una agenda donde se muestran mensajes diferidos.</p>

                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">programarEvento(nombre, delay)</code> que use{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">setTimeout</code> para mostrar:
                </p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>Evento: [nombre] ejecutado tras [delay]ms</pre>
                </div>

                <div className="mt-4 bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>programarEvento("Concierto Pokémon", 3000);</pre>
                  <pre>programarEvento("Batalla en gimnasio", 1000);</pre>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  3. Generador de ataques personalizados (función que devuelve función)
                </h3>

                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">crearAtaque(nombre, poderBase)</code> que
                  devuelva otra función.
                </p>
                <p>Esa segunda función debe recibir un nombre de objetivo y mostrar el mensaje del ataque:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const ataqueTrueno = crearAtaque("Impactrueno", 50);</pre>
                  <pre>ataqueTrueno("Bulbasaur");</pre>
                </div>

                <p className="mt-4 mb-2">Resultado:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>¡Usó Impactrueno contra Bulbasaur! Poder base: 50</pre>
                </div>

                <p className="mt-4">Usá una closure para guardar el nombre y poder del ataque.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">4. Filtro flexible con callbacks</h3>

                <p className="mb-2">Dado un array de Pokémon como objetos:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const pokemon = [</pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Pikachu", tipo: "eléctrico", nivel: 20 {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Charmander", tipo: "fuego", nivel: 16 {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Squirtle", tipo: "agua", nivel: 18 {"}"}
                  </pre>
                  <pre>];</pre>
                </div>

                <p className="mt-4 mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">filtrarPokemon(lista, condicion)</code> que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reciba un array y un callback de condición</li>
                  <li>Devuelva los Pokémon que cumplan esa condición</li>
                </ul>

                <p className="mt-4 mb-2">Probalo con distintas condiciones:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>
                    filtrarPokemon(pokemones, p {">"}= p.nivel {">"}= 18);
                  </pre>
                  <pre>filtrarPokemon(pokemones, p {">"}= p.tipo === "agua");</pre>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  5. Reclutador de la Comunidad del Anillo (callback + filtrado múltiple)
                </h3>

                <p className="mb-2">Tenés una lista de personajes:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const personajes = [</pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Frodo", raza: "Hobbit", valiente: true {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Boromir", raza: "Humano", valiente: false {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Legolas", raza: "Elfo", valiente: true {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"}nombre: "Pippin", raza: "Hobbit", valiente: false {"}"},
                  </pre>
                  <pre>];</pre>
                </div>

                <p className="mt-4 mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">reclutar(lista, criterio)</code> que use{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code> y un callback para seleccionar
                  miembros.
                </p>

                <p className="mb-2">Probalo con:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>reclutar(personajes, p {">"}= p.raza === "Hobbit" && p.valiente);</pre>
                </div>

                <p className="mt-4 mb-2">Resultado:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>Reclutados: Frodo</pre>
                </div>

                <p className="mt-4">Si hay más de un resultado, devolvé los nombres como string separados por coma.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  6. Hacker Attack Simulator (función que retorna función con estado interno)
                </h3>

                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">crearAtaqueHacker(nombreDelHacker)</code> que
                  devuelva otra función. Cada vez que se invoque, debe mostrar:
                </p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>[HackerX] lanzó un ataque. Total de ataques: N</pre>
                </div>

                <p className="mt-4 mb-2">Ejemplo de uso:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const ataqueNeo = crearAtaqueHacker("Neo");</pre>
                  <pre>ataqueNeo();</pre>
                  <pre>ataqueNeo();</pre>
                </div>

                <p className="mt-4 mb-2">Resultado:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>[Neo] lanzó un ataque. Total de ataques: 1</pre>
                  <pre>[Neo] lanzó un ataque. Total de ataques: 2</pre>
                </div>

                <p className="mt-4">
                  Probar que pasa cuando se utiliza crearAtaqueHacker con otro valor que no sea "Neo"
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">7. Simulador de laboratorio de Rick</h3>

                <p className="mb-2">
                  Rick tiene una lista de inventos y un laboratorio donde cada uno se puede probar con efectos raros.
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">
                      Creá una función <code className="bg-muted-foreground/20 px-1 rounded">crearLaboratorio()</code>{" "}
                      que devuelva un objeto con estos métodos:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">agregarInvento(nombre, efecto)</code>:
                        guarda un invento con su función de efecto (callback)
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">probarInvento(nombre, sujeto)</code>:
                        ejecuta el efecto sobre el sujeto y muestra qué pasó.
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">listarInventos()</code>: muestra todos los
                        nombres de inventos disponibles.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-2">
                      Cada efecto es una función que modifica el objeto{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">sujeto</code>. Por ejemplo:
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>lab.agregarInvento("Ray Gun", sujeto {">"}= sujeto.vida -= 30);</pre>
                      <pre>lab.agregarInvento("Suero de Inteligencia", sujeto {">"}= sujeto.inteligencia += 50);</pre>
                    </div>
                  </li>
                </ol>

                <p className="mt-4 mb-2">Probalo con un sujeto:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>
                    const morty = {"{"}nombre: "Morty", vida: 100, inteligencia: 10 {"}"};
                  </pre>
                  <pre>lab.probarInvento("Suero de Inteligencia", morty);</pre>
                </div>

                <p className="mt-4 mb-2">Resultado:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>Invento Suero de Inteligencia aplicado a Morty.</pre>
                  <pre>
                    Estado actual: {"{"} vida: 100, inteligencia: 60 {"}"}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">8. Generador de batallas épicas galácticas</h3>

                <p className="mb-2">
                  Simulá una batalla entre <strong>dos equipos</strong> de personajes con fuerza y habilidades
                  especiales.
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">Cada personaje tiene:</p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>
                        {"{"}nombre: "Luke", fuerza: 80, habilidadEspecial: () {">"}= console.log("Usa la Fuerza!"){" "}
                        {"}"}
                      </pre>
                    </div>
                  </li>
                  <li>
                    <p className="mb-2">
                      Creá una función <code className="bg-muted-foreground/20 px-1 rounded">crearEquipo(nombre)</code>{" "}
                      que permita agregar personajes a un equipo y tenga:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">agregar(personaje)</code>
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">atacar(otroEquipo)</code>: elige un
                        personaje al azar y causa daño a uno del otro equipo
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">estado()</code>: muestra los nombres y
                        fuerza actual de los miembros
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-2">
                      Si la fuerza de un personaje llega a 0, se elimina del equipo con un mensaje de derrota.
                    </p>
                  </li>
                </ol>

                <p className="mt-4 mb-2">
                  Usá <code className="bg-muted-foreground/20 px-1 rounded">Math.random()</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.splice()</code> y closures para manejar los
                  equipos internamente.
                </p>

                <p className="mt-4 mb-2">Ejemplo:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const rebels = crearEquipo("Rebeldes");</pre>
                  <pre>
                    rebels.agregar({"{"} nombre: "Leia", fuerza: 70, habilidadEspecial: () {">"}=
                    console.log("¡Estrategia diplomática!") {"}"});
                  </pre>
                  <pre></pre>
                  <pre>const sith = crearEquipo("Sith");</pre>
                  <pre>sith.agregar({"{"} nombre: "Darth Vader", fuerza: 100, habilidadEspecial: ()</pre>
                  <pre>
                    {">"}= console.log("Fuerza sofocante!") {"}"});
                  </pre>
                  <pre></pre>
                  <pre>rebels.atacar(sith);</pre>
                  <pre>sith.atacar(rebels);</pre>
                </div>

                <p className="mt-4">Bonus: que cada ataque tenga chance aleatoria de activar la habilidad especial.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
