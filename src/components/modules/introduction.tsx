export default function ModuleIntroduction() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Introducción</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Este Trabajo Práctico 0 de JavaScript es una guía de estudio pensada para ayudarte a repasar y profundizar los
          conceptos fundamentales del lenguaje, combinando teoría y práctica.
        </p>
        <p>
          No es una entrega obligatoria para la materia. Es una propuesta opcional, a modo de desafío personal, para
          quienes quieran mejorar su dominio de JavaScript, el lenguaje más utilizado en el desarrollo web.
        </p>
        <p>La guía está organizada en módulos temáticos. Cada módulo incluye:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Preguntas teóricas para repasar los conceptos clave.</li>
          <li>Ejercicios prácticos para aplicar esos conceptos con código.</li>
        </ul>
        <p>
          No es necesario resolver toda la guía. Podés enfocarte en los temas que más te interesen o te resulten
          difíciles, avanzar a tu ritmo y volver cuando quieras.
        </p>
      </div>

      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Consejos para aprovechar mejor esta guía</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Usá la consola del navegador (<code className="bg-muted-foreground/20 px-1 rounded">F12 &gt; Consola</code>)
            para probar fragmentos de código rápido. Podes escribir y ejecutar código JavaScript desde ahí.
          </li>
          <li>Codeá todo lo que leas. La teoría se entiende mejor cuando la escribís y ves qué pasa.</li>
          <li>Intenta resolver la teoría antes de la práctica.</li>
          <li>
            No copies y pegues sin pensar. Intentá resolver los ejercicios por tu cuenta antes de ver la solución.
          </li>
          <li>
            Crea un repositorio en github con las respuestas y soluciones, puede ser una guia personal para problemas
            comunes.
          </li>
          <li>Anotá dudas. Si algo no lo entendés del todo, dejalo marcado para repasar después.</li>
          <li>Compartí tus avances. Hablar sobre código con otras personas ayuda muchísimo a afianzar lo aprendido.</li>
          <li>
            Evitá usar Chat GPT para resolver problemas de código o algoritmia. Aunque puede ser útil en el trabajo, al
            momento de aprender lo más importante es intentar resolver por vos mismo, equivocarte y entender por qué
            algo funciona o no.
          </li>
          <li>Paciencia. Aprender lleva tiempo, equivocarse es parte del proceso.</li>
        </ul>
      </div>
    </section>
  )
}
