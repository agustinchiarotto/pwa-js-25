import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Module5() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 5: Arrays y Funciones</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory5">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                ¿Qué hace el método <code className="bg-muted-foreground/20 px-1 rounded">.map()</code>? ¿Devuelve un
                nuevo array o modifica el original?
              </li>
              <li>
                ¿Para qué sirve <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code>? ¿Qué tipo de
                valor espera como resultado cada iteración?
              </li>
              <li>
                ¿En qué casos usarías <code className="bg-muted-foreground/20 px-1 rounded">.find()</code> en lugar de{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code>?
              </li>
              <li>
                ¿Cómo funciona <code className="bg-muted-foreground/20 px-1 rounded">.reduce()</code> y qué parámetros
                recibe?
              </li>
              <li>
                ¿Qué hace el método <code className="bg-muted-foreground/20 px-1 rounded">.sort()</code>? ¿Qué problema
                puede tener si se usa con números?
              </li>
              <li>
                ¿Cuál es la diferencia entre <code className="bg-muted-foreground/20 px-1 rounded">.some()</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.every()</code>?
              </li>
              <li>
                ¿Qué devuelve <code className="bg-muted-foreground/20 px-1 rounded">.forEach()</code> y en qué se
                diferencia de <code className="bg-muted-foreground/20 px-1 rounded">.map()</code>?
              </li>
              <li>
                ¿Qué significa que los métodos como <code className="bg-muted-foreground/20 px-1 rounded">.map()</code>{" "}
                o <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code> no modifican el array original?
              </li>
              <li>
                ¿Se pueden encadenar métodos como{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.filter().map().reduce()</code>? ¿Por qué puede
                ser útil?
              </li>
              <li>
                ¿Qué diferencia hay entre <code className="bg-muted-foreground/20 px-1 rounded">.includes()</code> y{" "}
                <code className="bg-muted-foreground/20 px-1 rounded">.indexOf()</code> para buscar un valor?
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="practice4-5">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Prácticas (Módulos 4 y 5)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">1) Ejercicios con base de datos en memoria</h3>

                <p className="mb-4">
                  A partir de este punto vas a trabajar con una base de datos simulada que representa información sobre
                  películas, directores, géneros, críticas y críticos.
                </p>

                <p className="mb-4">
                  Esta base está guardada como un objeto JavaScript llamado{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">basededatos</code>, que contiene arrays con
                  información estructurada. Todos los ejercicios se resuelven <strong>usando métodos de array</strong>{" "}
                  como <code className="bg-muted-foreground/20 px-1 rounded">.map()</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.filter()</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.find()</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.some()</code>,{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">.reduce()</code>, etc.
                </p>

                <p className="mb-4">
                  No hace falta que sepas cómo conectar una base de datos real. Esta estructura se usa solo para
                  practicar lógica y estructuras de datos complejas.
                </p>

                <p className="mb-4">
                  Para cada ejercicio, se te va a pedir implementar una función que recorra y procese los datos de forma
                  adecuada.
                </p>

                <h4 className="font-semibold mt-4 mb-2">Ejemplo de acceso a los datos:</h4>

                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>console.log(basededatos.peliculas); // muestra la lista de películas</pre>
                  <pre>console.log(basededatos.calificaciones); // muestra la lista de críticas</pre>
                </div>

                <h4 className="font-semibold mt-6 mb-2">Recomendaciones</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cada ejercicio define la estructura esperada de entrada y salida.</li>
                  <li>
                    Podés importar la base como{" "}
                    <code className="bg-muted-foreground/20 px-1 rounded">
                      import basededatos from './basededatos.js'
                    </code>{" "}
                    o incluirla directamente en tu archivo para probar.
                  </li>
                  <li>Concentrate en manipular arrays usando los métodos que aprendiste en este módulo.</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-2">Estructura de la base de datos</h4>
                <p className="mb-4">
                  La base de datos simulada se llama{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">basededatos</code> y es un{" "}
                  <strong>objeto JavaScript</strong> con distintas propiedades. Cada propiedad representa una tabla de
                  información y contiene un array de objetos.
                </p>

                <div className="space-y-6 mt-6">
                  <div>
                    <h5 className="font-semibold text-green-600">peliculas</h5>
                    <p className="mb-2">Cada película tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">id</code>: número único identificador
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">nombre</code>: string
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">anio</code>: año de estreno
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">direccionSetFilmacion</code>: objeto con{" "}
                        <code className="bg-muted-foreground/20 px-1 rounded">calle</code>,{" "}
                        <code className="bg-muted-foreground/20 px-1 rounded">numero</code> y{" "}
                        <code className="bg-muted-foreground/20 px-1 rounded">pais</code>
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">directores</code>: array de IDs que
                        referencia a directores
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">generos</code>: array de IDs que
                        referencia a géneros
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">directores</h5>
                    <p className="mb-2">Cada director tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">id</code>: número único
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">nombre</code>: string
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">paises</h5>
                    <p className="mb-2">Cada país tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">id</code>: número único
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">nombre</code>: string
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">generos</h5>
                    <p className="mb-2">Cada género tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">id</code>: número único
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">nombre</code>: string (como 'Acción',
                        'Comedia')
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">criticos</h5>
                    <p className="mb-2">Cada crítico tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">id</code>: número único
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">nombre</code>: string
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">edad</code>: número
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">pais</code>: ID del país de origen
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">calificaciones</h5>
                    <p className="mb-2">Cada calificación representa una crítica y tiene:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">critico</code>: ID del crítico
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">pelicula</code>: ID de la película
                      </li>
                      <li>
                        <code className="bg-muted-foreground/20 px-1 rounded">puntuacion</code>: número del 1 al 10
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-semibold mt-6 mb-2">Ejemplo de la base de datos</h4>
                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                  <pre>const basededatos = {"{"}</pre>
                  <pre> peliculas: [</pre>
                  <pre> {"{"}</pre>
                  <pre> id: 1,</pre>
                  <pre> nombre: "The Godfather",</pre>
                  <pre> anio: 1972,</pre>
                  <pre> direccionSetFilmacion: {"{"}</pre>
                  <pre> calle: "Hollywood Blvd",</pre>
                  <pre> numero: 123,</pre>
                  <pre> pais: 1 // ID de Estados Unidos</pre>
                  <pre> {"}"},</pre>
                  <pre> directores: [1], // ID de Francis Ford Coppola</pre>
                  <pre> generos: [1, 2] // IDs de Drama y Crimen</pre>
                  <pre> {"}"},</pre>
                  <pre> {"{"}</pre>
                  <pre> id: 2,</pre>
                  <pre> nombre: "Pulp Fiction",</pre>
                  <pre> anio: 1994,</pre>
                  <pre> direccionSetFilmacion: {"{"}</pre>
                  <pre> calle: "Sunset Blvd",</pre>
                  <pre> numero: 456,</pre>
                  <pre> pais: 1 // ID de Estados Unidos</pre>
                  <pre> {"}"},</pre>
                  <pre> directores: [2], // ID de Quentin Tarantino</pre>
                  <pre> generos: [2, 3] // IDs de Crimen y Comedia Negra</pre>
                  <pre> {"}"},</pre>
                  <pre> // más películas...</pre>
                  <pre> ],</pre>
                  <pre> directores: [</pre>
                  <pre>
                    {" "}
                    {"{"} id: 1, nombre: "Francis Ford Coppola" {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} id: 2, nombre: "Quentin Tarantino" {"}"},
                  </pre>
                  <pre> // más directores...</pre>
                  <pre> ],</pre>
                  <pre> paises: [</pre>
                  <pre>
                    {" "}
                    {"{"} id: 1, nombre: "Estados Unidos" {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} id: 2, nombre: "Reino Unido" {"}"},
                  </pre>
                  <pre> // más países...</pre>
                  <pre> ],</pre>
                  <pre> generos: [</pre>
                  <pre>
                    {" "}
                    {"{"} id: 1, nombre: "Drama" {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} id: 2, nombre: "Crimen" {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} id: 3, nombre: "Comedia Negra" {"}"},
                  </pre>
                  <pre> // más géneros...</pre>
                  <pre> ],</pre>
                  <pre> criticos: [</pre>
                  <pre>
                    {" "}
                    {"{"} id: 1, nombre: "Roger Ebert", edad: 70, pais: 1 {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} id: 2, nombre: "Peter Travers", edad: 65, pais: 1 {"}"},
                  </pre>
                  <pre> // más críticos...</pre>
                  <pre> ],</pre>
                  <pre> calificaciones: [</pre>
                  <pre>
                    {" "}
                    {"{"} critico: 1, pelicula: 1, puntuacion: 10 {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} critico: 2, pelicula: 1, puntuacion: 9 {"}"},
                  </pre>
                  <pre>
                    {" "}
                    {"{"} critico: 1, pelicula: 2, puntuacion: 8 {"}"},
                  </pre>
                  <pre> // más calificaciones...</pre>
                  <pre> ]</pre>
                  <pre>{"}"};</pre>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">2) Ejercicios específicos con la base de datos</h3>

                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.1. Listar películas por año</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">listarPeliculasPorAnio(anio)</code> que
                      devuelva un array con los nombres de todas las películas estrenadas en el año especificado.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>listarPeliculasPorAnio(2010);</pre>
                      <pre>// ["Inception", "Toy Story 3", ...]</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function listarPeliculasPorAnio(anio) {"{"}</pre>
                      <pre> return basededatos.peliculas</pre>
                      <pre> .filter(pelicula {"=>"} pelicula.anio === anio)</pre>
                      <pre> .map(pelicula {"=>"} pelicula.nombre);</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.2. Buscar películas por director</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">
                        buscarPeliculasPorDirector(nombreDirector)
                      </code>{" "}
                      que devuelva un array con los nombres de todas las películas dirigidas por el director
                      especificado.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>buscarPeliculasPorDirector("Christopher Nolan");</pre>
                      <pre>// ["Inception", "The Dark Knight", "Interstellar", ...]</pre>
                    </div>

                    <p className="mt-4">
                      Recordá que en la base de datos, las películas tienen un array de IDs de directores, no sus
                      nombres directamente.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function buscarPeliculasPorDirector(nombreDirector) {"{"}</pre>
                      <pre> // Primero encontramos el ID del director</pre>
                      <pre> const director = basededatos.directores.find(</pre>
                      <pre> dir {"=>"} dir.nombre === nombreDirector</pre>
                      <pre> );</pre>
                      <pre> </pre>
                      <pre> if (!director) return [];</pre>
                      <pre> </pre>
                      <pre> // Luego filtramos las películas que incluyen ese ID de director</pre>
                      <pre> return basededatos.peliculas</pre>
                      <pre> .filter(pelicula {"=>"} pelicula.directores.includes(director.id))</pre>
                      <pre> .map(pelicula {"=>"} pelicula.nombre);</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.3. Calcular promedio de calificaciones</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">calcularPromedioPelicula(idPelicula)</code>{" "}
                      que devuelva el promedio de todas las calificaciones de una película.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>calcularPromedioPelicula(1);</pre>
                      <pre>// 8.5</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function calcularPromedioPelicula(idPelicula) {"{"}</pre>
                      <pre> const calificacionesPelicula = basededatos.calificaciones</pre>
                      <pre> .filter(cal {"=>"} cal.pelicula === idPelicula);</pre>
                      <pre> </pre>
                      <pre> if (calificacionesPelicula.length === 0) return 0;</pre>
                      <pre> </pre>
                      <pre> const sumaTotal = calificacionesPelicula</pre>
                      <pre> .reduce((suma, cal) {"=>"} suma + cal.puntuacion, 0);</pre>
                      <pre> </pre>
                      <pre> return sumaTotal / calificacionesPelicula.length;</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.4. Encontrar películas mejor calificadas</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">
                        encontrarPeliculasMejorCalificadas(puntuacionMinima)
                      </code>{" "}
                      que devuelva un array con los nombres de las películas cuyo promedio de calificaciones sea mayor o
                      igual a la puntuación mínima especificada.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>encontrarPeliculasMejorCalificadas(8);</pre>
                      <pre>// ["The Godfather", "Pulp Fiction", ...]</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function encontrarPeliculasMejorCalificadas(puntuacionMinima) {"{"}</pre>
                      <pre> return basededatos.peliculas</pre>
                      <pre>
                        {" "}
                        .filter(pelicula {"=>"} {"{"}
                      </pre>
                      <pre> const promedio = calcularPromedioPelicula(pelicula.id);</pre>
                      <pre> return promedio {">="} puntuacionMinima;</pre>
                      <pre> {"}"})</pre>
                      <pre> .map(pelicula {"=>"} pelicula.nombre);</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">2.5. Agrupar películas por género</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">agruparPeliculasPorGenero()</code> que
                      devuelva un objeto donde las claves sean los nombres de los géneros y los valores sean arrays con
                      los nombres de las películas de ese género.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
                      <pre>agruparPeliculasPorGenero();</pre>
                      <pre>// {"{"}</pre>
                      <pre>// "Acción": ["Die Hard", "Mad Max", ...],</pre>
                      <pre>// "Comedia": ["Superbad", "The Hangover", ...],</pre>
                      <pre>// ...</pre>
                      <pre>// {"}"}</pre>
                    </div>

                    <p className="mt-4">Recordá que una película puede pertenecer a varios géneros.</p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function agruparPeliculasPorGenero() {"{"}</pre>
                      <pre> const resultado = {};</pre>
                      <pre> </pre>
                      <pre> // Inicializamos el objeto resultado con arrays vacíos para cada género</pre>
                      <pre>
                        {" "}
                        basededatos.generos.forEach(genero {"=>"} {"{"}
                      </pre>
                      <pre> resultado[genero.nombre] = [];</pre>
                      <pre> {"}"});</pre>
                      <pre> </pre>
                      <pre> // Recorremos todas las películas</pre>
                      <pre>
                        {" "}
                        basededatos.peliculas.forEach(pelicula {"=>"} {"{"}
                      </pre>
                      <pre> // Para cada película, recorremos sus géneros</pre>
                      <pre>
                        {" "}
                        pelicula.generos.forEach(idGenero {"=>"} {"{"}
                      </pre>
                      <pre> // Encontramos el nombre del género</pre>
                      <pre> const genero = basededatos.generos.find(g {"=>"} g.id === idGenero);</pre>
                      <pre> if (genero) {"{"}</pre>
                      <pre> // Agregamos el nombre de la película al array del género</pre>
                      <pre> resultado[genero.nombre].push(pelicula.nombre);</pre>
                      <pre> {"}"}</pre>
                      <pre> {"}"});</pre>
                      <pre> {"}"});</pre>
                      <pre> </pre>
                      <pre> return resultado;</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">3) Ejercicios adicionales con arrays</h3>

                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">3.1. Transformar array de números</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">transformarNumeros(numeros)</code> que
                      reciba un array de números y devuelva un nuevo array donde:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Los números pares se multiplican por 2</li>
                      <li>Los números impares se elevan al cuadrado</li>
                    </ul>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>transformarNumeros([1, 2, 3, 4, 5]);</pre>
                      <pre>// [1, 4, 9, 8, 25]</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function transformarNumeros(numeros) {"{"}</pre>
                      <pre>
                        {" "}
                        return numeros.map(num {"=>"} {"{"}
                      </pre>
                      <pre> if (num % 2 === 0) {"{"}</pre>
                      <pre> return num * 2; // Multiplicar pares por 2</pre>
                      <pre>
                        {" "}
                        {"}"} else {"{"}
                      </pre>
                      <pre> return num * num; // Elevar impares al cuadrado</pre>
                      <pre> {"}"}</pre>
                      <pre> {"}"});</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">3.2. Filtrar y transformar objetos</h4>
                    <p className="mb-4">
                      Dado un array de objetos que representan personas, implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">obtenerAdultosPorPais(personas)</code> que
                      devuelva un objeto donde las claves sean los países y los valores sean arrays con los nombres de
                      las personas adultas (mayores de 18 años) de ese país.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>const personas = [</pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Ana", edad: 25, pais: "Argentina" {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Carlos", edad: 17, pais: "México" {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Luisa", edad: 30, pais: "Argentina" {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Juan", edad: 42, pais: "España" {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "María", edad: 15, pais: "México" {"}"}
                      </pre>
                      <pre>];</pre>
                      <pre></pre>
                      <pre>obtenerAdultosPorPais(personas);</pre>
                      <pre>// {"{"}</pre>
                      <pre>// "Argentina": ["Ana", "Luisa"],</pre>
                      <pre>// "México": [],</pre>
                      <pre>// "España": ["Juan"]</pre>
                      <pre>// {"}"}</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function obtenerAdultosPorPais(personas) {"{"}</pre>
                      <pre> const resultado = {};</pre>
                      <pre> </pre>
                      <pre> // Primero obtenemos la lista de países únicos</pre>
                      <pre> const paises = [...new Set(personas.map(p {"=>"} p.pais))];</pre>
                      <pre> </pre>
                      <pre> // Inicializamos el objeto resultado con arrays vacíos</pre>
                      <pre>
                        {" "}
                        paises.forEach(pais {"=>"} {"{"}
                      </pre>
                      <pre> resultado[pais] = [];</pre>
                      <pre> {"}"});</pre>
                      <pre> </pre>
                      <pre> // Filtramos adultos y los agrupamos por país</pre>
                      <pre> personas</pre>
                      <pre>
                        {" "}
                        .filter(persona {"=>"} persona.edad {">="} 18)
                      </pre>
                      <pre>
                        {" "}
                        .forEach(persona {"=>"} {"{"}
                      </pre>
                      <pre> resultado[persona.pais].push(persona.nombre);</pre>
                      <pre> {"}"});</pre>
                      <pre> </pre>
                      <pre> return resultado;</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">3.3. Calcular estadísticas con reduce</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">calcularEstadisticas(numeros)</code> que
                      reciba un array de números y devuelva un objeto con las siguientes propiedades:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>suma: la suma de todos los números</li>
                      <li>promedio: el promedio de los números</li>
                      <li>min: el número más pequeño</li>
                      <li>max: el número más grande</li>
                    </ul>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>calcularEstadisticas([5, 10, 15, 20, 25]);</pre>
                      <pre>// {"{"}</pre>
                      <pre>// suma: 75,</pre>
                      <pre>// promedio: 15,</pre>
                      <pre>// min: 5,</pre>
                      <pre>// max: 25</pre>
                      <pre>// {"}"}</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function calcularEstadisticas(numeros) {"{"}</pre>
                      <pre> if (numeros.length === 0) {"{"}</pre>
                      <pre>
                        {" "}
                        return {"{"} suma: 0, promedio: 0, min: null, max: null {"}"};
                      </pre>
                      <pre> {"}"}</pre>
                      <pre> </pre>
                      <pre> // Usamos reduce para calcular todas las estadísticas en una sola pasada</pre>
                      <pre>
                        {" "}
                        const resultado = numeros.reduce((stats, num) {"=>"} {"{"}
                      </pre>
                      <pre> return {"{"}</pre>
                      <pre> suma: stats.suma + num,</pre>
                      <pre> min: Math.min(stats.min, num),</pre>
                      <pre> max: Math.max(stats.max, num)</pre>
                      <pre> {"}"};</pre>
                      <pre>
                        {" "}
                        {"}"}, {"{"} suma: 0, min: numeros[0], max: numeros[0] {"}"});
                      </pre>
                      <pre> </pre>
                      <pre> // Calculamos el promedio</pre>
                      <pre> resultado.promedio = resultado.suma / numeros.length;</pre>
                      <pre> </pre>
                      <pre> return resultado;</pre>
                      <pre>{"}"}</pre>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">3.4. Encadenar métodos de array</h4>
                    <p className="mb-4">
                      Implementá la función{" "}
                      <code className="bg-muted-foreground/20 px-1 rounded">procesarProductos(productos)</code> que
                      reciba un array de objetos que representan productos y devuelva la suma total de los precios de
                      los productos que están en stock y cuestan más de $1000.
                    </p>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>const productos = [</pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Laptop", precio: 1200, enStock: true {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Mouse", precio: 80, enStock: true {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Monitor", precio: 1500, enStock: false {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Teclado", precio: 1100, enStock: true {"}"},
                      </pre>
                      <pre>
                        {" "}
                        {"{"} nombre: "Auriculares", precio: 900, enStock: true {"}"}
                      </pre>
                      <pre>];</pre>
                      <pre></pre>
                      <pre>procesarProductos(productos);</pre>
                      <pre>// 2300 (suma de Laptop y Teclado)</pre>
                    </div>

                    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm mt-4">
                      <pre>function procesarProductos(productos) {"{"}</pre>
                      <pre> return productos</pre>
                      <pre>
                        {" "}
                        .filter(producto {"=>"} producto.enStock && producto.precio {">"} 1000)
                      </pre>
                      <pre> .reduce((total, producto) {"=>"} total + producto.precio, 0);</pre>
                      <pre>{"}"}</pre>
                    </div>
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
