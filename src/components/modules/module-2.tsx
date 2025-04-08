import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { CodeBlock } from "../ui/code-block"

export default function Module2() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 2: Operadores, Coerción y Control de Flujo</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory2">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                ¿Qué diferencia hay entre == y === en JavaScript? Mostrá un ejemplo donde den resultados distintos y
                explicá por qué.
              </li>
              <li>
                ¿Qué es la coerción de tipos? Mostrá dos ejemplos de coerción implícita y uno de coerción explícita.
              </li>
              <li>
                ¿Qué resultado devuelve una expresión como false || "hola" o "hola" && 0? Explicá el rol de los
                operadores lógicos en esos casos.
              </li>
              <li>
                ¿Cuáles son las principales estructuras de control de flujo en JavaScript? Mencioná if, else, switch, y
                explicá brevemente en qué casos conviene usar cada uno.
              </li>
              <li>
                ¿Para qué sirve el operador ternario (condición ? a : b)? Reescribí un if simple con este operador.
              </li>
              <li>¿Cómo funcionan los bucles for y while en JavaScript? Mostrá un ejemplo de cada uno.</li>
              <li>¿Qué hacen break y continue dentro de un bucle? ¿Qué efecto tienen en la ejecución del código?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice2">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">1. Validador de edad para cine</h3>
                <p className="mb-4">Tenés dos variables:</p>
                <CodeBlock code={`const edad;
const tieneAutorizacion;`} />

                <p className="mb-4">
                  Escribí un programa que pida al usuario su edad y muestre "Puede entrar al cine" si la persona tiene
                  18 o más años. En caso contrario, mostrar "No puede entrar".
                </p>

                <CodeBlock code={`const edad = Number(prompt("¿Cuál es tu edad?"));
if (edad >= 18) {
  console.log("Puede entrar al cine");
} else {
  console.log("No puede entrar");
}`} />
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">2. Calculadora de propina</h3>
                <p className="mb-4">
                  Simula que tenés una cuenta de un restaurante y queres calcular la propina. Declarar una variable
                  monto, pedirle al usuario que ingrese un valor y calcular la propina del 10%.
                </p>
                <p className="mb-4">Mostrá un mensaje como: "El total es $100. La propina sugerida es $10"</p>

                <CodeBlock code={`const monto = Number(prompt("¿Cuál es el monto de la cuenta?"));
const propina = monto * 0.1;
console.log(\`El total es $\${monto}. La propina sugerida es $\${propina}\`);`} />
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">3. Predicción de operaciones</h3>
                <p className="mb-4">
                  Predecí y explicá el resultado de cada expresión. Luego ejecuta el código en la consola y compara con
                  tu predicción.
                </p>

                <CodeBlock code={`console.log(10 + "190"); // ?
console.log("8" * "4"); // ?
console.log(true + false); // ?
console.log(null + 1); // ?
console.log(undefined + 1); // ?`} />

                <p className="mt-4">
                  <strong>Pistas:</strong> Pensá en la coerción de tipos y cómo JavaScript maneja las operaciones entre
                  diferentes tipos de datos.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">4. Validador de ingreso a un club secreto</h3>

                <p className="mb-4">Pedile al usuario su edad y si conoce la "palabra clave".</p>

                <p className="mb-4">Solo puede ingresar si:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Tiene <strong>21 años o más</strong>
                  </li>
                  <li>
                    Y escribió exactamente <code className="bg-muted-foreground/20 px-1 rounded">"snorlax"</code> como
                    palabra clave
                  </li>
                </ul>

                <p className="mt-4 mb-4">Mostrá un mensaje acorde:</p>

                <CodeBlock code={`const edad = Number(prompt("¿Cuál es tu edad?"));
const clave = prompt("Decí la palabra clave:");

// tu código acá`} />
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">5. Simulador de sueldo con bonus y retenciones</h3>

                <p className="mb-4">Pedile al usuario:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Su sueldo base (prompt)</li>
                  <li>Si tiene bonus (sí o no)</li>
                  <li>Si tiene hijos (sí o no)</li>
                </ul>

                <p className="mt-4 mb-4">Lógica:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Si tiene bonus, sumá un 10% al sueldo.</li>
                  <li>Si tiene hijos, restá un 5% por aporte familiar.</li>
                  <li>Luego, aplicá un 15% de retención final al total.</li>
                </ul>

                <p className="mt-4">
                  Mostrá el sueldo neto con un mensaje como:{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">Tu sueldo final es $38.250</code>
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">6. Clasificador de clientes premium</h3>

                <p className="mb-4">Pedile al usuario:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cantidad de compras que hizo este mes</li>
                  <li>Monto total gastado</li>
                </ul>

                <p className="mt-4 mb-4">Condiciones:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Es cliente "Premium" si hizo <strong>más de 10 compras</strong> y gastó{" "}
                    <strong>más de $100.000</strong>
                  </li>
                  <li>Es "Regular" si hizo al menos 5 compras o gastó más de $50.000</li>
                  <li>En otro caso, es "Básico"</li>
                </ul>

                <p className="mt-4">
                  Mostrá un mensaje como:{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">
                    Cliente Premium: gracias por tu fidelidad!!
                  </code>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
