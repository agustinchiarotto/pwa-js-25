import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function Module4() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 4: Arrays, Listas y Objetos</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory4">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>¿Qué es un array en JavaScript y cómo se declara?</li>
              <li>¿Cómo accedés al tercer elemento de un array?</li>
              <li>
                ¿Qué métodos de array son los más comunes en JavaScript? Explicá para qué sirve cada uno y cómo podrías
                usarlos para recorrer, agregar o quitar elementos.
              </li>
              <li>¿Qué método usarías para eliminar el último elemento de un array? ¿Y el primero?</li>
              <li>¿Qué pasa si accedés a una posición inexistente en un array?</li>
              <li>¿Cómo verificás si un valor está presente en un array o en un Set?</li>
              <li>¿Qué es un Set? ¿En qué casos conviene usarlo en lugar de un array?</li>
              <li>
                ¿Qué es un Map y qué lo diferencia de un objeto{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">{}</code>?
              </li>
              <li>¿Cómo recorrerías un array con un bucle? Mostrá al menos dos formas diferentes.</li>
              <li>¿Qué es un objeto en JavaScript y cómo se declara?</li>
              <li>
                ¿Cuál es la diferencia entre acceder a una propiedad con{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.</code> y con{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">[]</code>?
              </li>
              <li>¿Qué sucede si intentás acceder a una propiedad que no existe en un objeto?</li>
              <li>¿Cómo agregás, modificás y eliminás propiedades en un objeto?</li>
              <li>¿Qué es un objeto anidado? Mostrá un ejemplo.</li>
              <li>
                ¿Cómo se recorren las propiedades de un objeto? ¿Para qué sirve{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">for...in</code>?
              </li>
              <li>
                ¿Qué devuelven <code className="bg-muted-foreground/20 px-1 rounded">Object.keys()</code>,{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">Object.values()</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">Object.entries()</code>?
              </li>
              <li>¿Qué diferencia hay entre un array y un objeto en cuanto a estructura y uso?</li>
              <li>¿Qué es la desestructuración de objetos y para qué sirve?</li>
              <li>
                ¿Cómo se usan los operadores spread (<code className="bg-muted-foreground/20 px-1 rounded">...</code>) y
                rest (<code className="bg-muted-foreground/20 px-1 rounded">...</code>) con objetos?
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
