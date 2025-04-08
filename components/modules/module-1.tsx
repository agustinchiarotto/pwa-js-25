import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Module1() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 1: Variables y tipos</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory1">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                ¿Qué significan los conceptos de <em>scope</em>, <em>hoisting</em> y <em>mutabilidad</em> en JavaScript?
                Explicá con ejemplos simples.
              </li>
              <li>
                ¿Qué diferencias hay entre <code className="bg-muted-foreground/20 px-1 rounded">var</code>,{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">let</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">const</code> en cuanto a scope, hoisting y
                mutabilidad? ¿Cuándo usarías uno y cuándo otro.
              </li>
              <li>
                ¿Qué pasa si intentás usar una variable declarada con{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">let</code> antes de su declaración? ¿Y con{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">var</code>?
              </li>
              <li>¿Qué significa que JavaScript sea un lenguaje de tipado dinámico?</li>
              <li>
                ¿Cuál es la diferencia entre <code className="bg-muted-foreground/20 px-1 rounded">undefined</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">null</code> en JavaScript?
              </li>
              <li>
                ¿Qué tipo de valor es <code className="bg-muted-foreground/20 px-1 rounded">NaN</code> y en qué
                situaciones puede aparecer?
              </li>
              <li>
                ¿Qué hace el operador <code className="bg-muted-foreground/20 px-1 rounded">typeof</code> y qué valores
                puede devolver?
              </li>
              <li>¿Qué diferencias hay entre usar comillas simples, dobles o backticks para strings?</li>
              <li>
                ¿Por qué <code className="bg-muted-foreground/20 px-1 rounded">typeof null</code> devuelve{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">"object"</code> y por qué se considera un bug
                histórico?
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice1">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Antes que nada. ¿Cómo probar el código en tu navegador?</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Abrí Google Chrome.</li>
                  <li>
                    Presioná <code className="bg-muted-foreground/20 px-1 rounded">F12</code> o clic derecho &gt;
                    Inspeccionar.
                  </li>
                  <li>Andá a la pestaña "Consola".</li>
                  <li>Pegá ahí tu código y presioná Enter para ejecutarlo.</li>
                  <li>Para mostrar algo por pantalla usa console.log("mensaje")</li>
                  <li>Para pedir un dato al usuario en la consola usa prompt();</li>
                </ol>

                <div className="mt-4 bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const nombre = prompt("¿Cómo te llamás?");</pre>
                  <pre>console.log("Hola, " + nombre);</pre>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">1. Tu primera línea en la consola</h3>
                  <p className="mb-2">
                    Mostrá tu nombre y edad usando <code className="bg-muted-foreground/20 px-1 rounded">let</code> y{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">const</code>. Ejecutá este código en la
                    consola del navegador:
                  </p>

                  <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                    <pre>let nombre = "Sofi";</pre>
                    <pre>const edad = 22;</pre>
                    <pre></pre>
                    <pre>console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");</pre>
                  </div>

                  <p className="mt-2">
                    Probá cambiar los valores. ¿Qué pasa si intentás reasignar{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">edad</code>?
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    2. Usando 3 variables (<code className="bg-muted-foreground/20 px-1 rounded">nombre</code>,{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">profesion</code>,{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">ciudad</code>) mostrá este texto en consola:
                  </h3>

                  <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                    <pre>Hola! Soy Sofi, programadora de Neuquén.</pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    3. ¿Qué muestra el siguiente código por consola? Explicá paso a paso por qué.
                  </h3>

                  <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                    <pre>console.log(a); console.log(b);</pre>
                    <pre>var a = 5;</pre>
                    <pre>let b = 10;</pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">4. ¿Qué tipo es?</h3>
                  <p className="mb-2">
                    Usá <code className="bg-muted-foreground/20 px-1 rounded">typeof</code> para saber qué tipo de dato
                    es cada uno de los siguientes valores. Después, confirmá tus respuestas ejecutando el código en la
                    consola.
                  </p>

                  <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                    <pre>typeof 123</pre>
                    <pre>typeof "hola"</pre>
                    <pre>typeof true</pre>
                    <pre>typeof undefined</pre>
                    <pre>typeof null</pre>
                    <pre>typeof NaN</pre>
                    <pre>typeof {"{}"}</pre>
                    <pre>typeof []</pre>
                    <pre>typeof function() {"{}"}</pre>
                    <pre></pre>
                    <pre>let dato = "123"; // probá cambiar por true, null, {"{}"}, etc.</pre>
                    <pre>console.log("El tipo de dato es: " + typeof dato);</pre>
                  </div>

                  <p className="mt-2">
                    ¿Alguno te sorprendió? ¿Qué pasa con{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">null</code>,{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">NaN</code>,{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">[]</code> y{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">function</code>?
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">5. Conversor simple de temperatura</h3>
                  <p className="mb-2">
                    Convertí una temperatura en grados Celsius a Fahrenheit. Mostrá el resultado con un mensaje como
                    "25°C son 77°F".
                  </p>

                  <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                    <pre>const celsius = 25;</pre>
                    <pre>const fahrenheit = // fórmula</pre>
                    <pre>console.log(); // Rellenar correctamente</pre>
                  </div>

                  <p className="mt-2">¿Podés reescribir el código para que el usuario ingrese el dato de celsius?</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
