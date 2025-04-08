import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function Module3() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 3: Funciones y Scope</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory3">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                ¿Cómo se declara una función en JavaScript? ¿Cuál es la diferencia con una arrow function? ¿Qué pasa si
                llamás a una función antes de declararla con{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">function</code>? ¿Y si es una arrow function?
              </li>
              <li>¿Qué diferencia hay entre una función que retorna un valor y una que no?</li>
              <li>¿Qué es el scope? ¿Qué diferencia hay entre una variable global y una local?</li>
              <li>¿Qué pasa si una función accede a una variable que no fue declarada dentro de ella?</li>
              <li>¿Qué es un closure? ¿Podés explicarlo con un ejemplo simple?</li>
              <li>¿Qué pasa si una función se llama a sí misma? ¿Cómo se llama eso?</li>
              <li>¿Qué pasa si una función tiene múltiples parámetros (4 por ejemplo) pero se llama con menos (3)?</li>
              <li>¿Qué diferencia hay entre declarar una función dentro de otra, o fuera?</li>
              <li>¿Se puede guardar una función en una variable? ¿Para qué sirve eso?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice3">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div>
                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">calcularDanio(ataque, defensa, critico)</code>{" "}
                  que reciba:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <code className="bg-muted-foreground/20 px-1 rounded">ataque</code>: poder del atacante
                  </li>
                  <li>
                    <code className="bg-muted-foreground/20 px-1 rounded">defensa</code>: defensa del rival (se resta al
                    ataque para calcular el resultado)
                  </li>
                  <li>
                    <code className="bg-muted-foreground/20 px-1 rounded">critico</code>: booleano que duplica el daño
                    si es <code className="bg-muted-foreground/20 px-1 rounded">true</code>
                  </li>
                </ul>

                <p className="mt-4 mb-2">Si el resultado es menor a 0, debe devolver 0.</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>calcularDanio(50, 30, true) // → 70</pre>
                </div>
              </div>

              <div>
                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">puedeEvolucionar(nombre, nivel)</code> que
                  reciba el nombre del Pokémon y su nivel.
                </p>

                <p className="mt-4 mb-2">Reglas de evolución:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Si es <code className="bg-muted-foreground/20 px-1 rounded">"Charmander"</code> y nivel ≥ 16 →{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">"Charmander evolucionó a Charmeleon"</code>
                  </li>
                  <li>
                    Si es <code className="bg-muted-foreground/20 px-1 rounded">"Bulbasaur"</code> y nivel ≥ 15 →{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">"Bulbasaur evolucionó a Ivysaur"</code>
                  </li>
                  <li>
                    Si es <code className="bg-muted-foreground/20 px-1 rounded">"Squirtle"</code> y nivel ≥ 18 →{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">"Squirtle evolucionó a Wartortle"</code>
                  </li>
                  <li>
                    En otro caso →{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">"Todavía no puede evolucionar"</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">3. Batalla Pokémon</h3>

                <p className="mb-2">
                  Creá una función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">
                    batalla(atacante, defensor, ataque, poder, defensa, critico)
                  </code>{" "}
                  que use las función{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">calcularDanio del ejercicio 1.</code>
                </p>

                <p className="mt-4 mb-2">La función debe mostrar:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El mensaje del ataque. Ver formato en el ejemplo</li>
                  <li>
                    Si el enemigo quedó <strong>derrotado</strong> (si el daño fue ≥ 50) o <strong>sigue en pie</strong>
                    .
                  </li>
                </ul>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>batalla("Pikachu", "Meowth", "Impactrueno", 70, 20, false);</pre>
                  <pre></pre>
                  <pre>¡Pikachu usó Impactrueno contra Meowth! Causó 50 de daño.</pre>
                  <pre>¡Meowth ha sido derrotado!</pre>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">4. Batalla por turnos con estrategia real</h3>

                <p className="mb-2">
                  Simulá una batalla entre vos y un enemigo controlado por la computadora. El objetivo es ganar al final
                  de los 5 turnos teniendo más vida que el oponente.
                </p>

                <h4 className="font-semibold mt-4 mb-2">Objetivo</h4>
                <p>
                  Llegar al final del combate con más puntos de vida que el enemigo. La partida termina tras 5 turnos o
                  si alguno de los participantes alcanza 0 puntos de vida o menos.
                </p>

                <h4 className="font-semibold mt-4 mb-2">Reglas del juego</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Ambos comienzan con <strong>100 puntos de vida</strong>.
                  </li>
                  <li>
                    Se juegan <strong>5 turnos</strong>.
                  </li>
                  <li>
                    En cada turno:
                    <ul className="list-circle pl-6 space-y-2 mt-2">
                      <li>
                        Vos elegís si <strong>atacar</strong> o <strong>defender</strong> usando{" "}
                        <code className="bg-muted-foreground/20 px-1 rounded">prompt()</code>.
                      </li>
                      <li>El enemigo elige su acción al azar.</li>
                      <li>
                        Cada acción genera valores aleatorios para <strong>ataque</strong>, <strong>defensa</strong> y{" "}
                        <strong>crítico</strong>.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4 mb-2">Resolución de cada turno:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left font-semibold">Jugador/Enemigo</th>
                        <th className="py-2 px-4 text-left font-semibold">Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">Ataca / Ataca</td>
                        <td className="py-2 px-4">Ambos reciben daño completo.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">Ataca / Defiende</td>
                        <td className="py-2 px-4">
                          El enemigo <strong>reduce el daño a la mitad</strong>. Vos no recibís daño.
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">Defiende / Ataca</td>
                        <td className="py-2 px-4">
                          Vos <strong>reducís el daño a la mitad</strong>. El enemigo no recibe daño.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Defiende / Defiende</td>
                        <td className="py-2 px-4">Nadie recibe daño.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 mb-2">
                  El daño se calcula usando la función que considera ataque, defensa y posibilidad de golpe crítico del
                  ejercicio 1.
                </p>

                <p className="mt-4 mb-2">Al final del turno se muestra un mensaje narrando lo ocurrido, por ejemplo:</p>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>Turno 3: Atacaste con 52. El enemigo se defendió con 40. ¡Le hiciste 12 de daño!</pre>
                  <pre>
                    Turno 4: Defendiste con 38. El enemigo atacó con 50. ¡Bloqueaste parte del daño! Recibiste 6.
                  </pre>
                </div>

                <h4 className="font-semibold mt-4 mb-2">Resultado final</h4>
                <p className="mb-2">
                  Después de 5 turnos o cuando uno de los participantes pierda todos sus puntos de vida se muestra:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vida final del jugador</li>
                  <li>Vida final del enemigo</li>
                  <li>
                    Resultado:
                    <ul className="list-circle pl-6 space-y-2 mt-2">
                      <li>
                        Si tenés más vida → <strong>Ganaste la batalla!</strong>
                      </li>
                      <li>
                        Si tenés menos vida → <strong>Perdiste!</strong>
                      </li>
                      <li>
                        Si empataron → <strong>Empate!</strong>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
