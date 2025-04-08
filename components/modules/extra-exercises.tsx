export default function ExtraExercises() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Ejercicios Extra</h2>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">1. Extraer mayúsculas</h3>
          <p className="mb-4">
            Escribí una función que reciba un string y devuelva otro string con solo las letras mayúsculas.
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>extraerMayusculas("Hola Mundo!")</pre>
            <pre>extraerMayusculas("javascript")</pre>
            <pre>extraerMayusculas("NASA y SpaceX")</pre>
            <pre>extraerMayusculas("")</pre>
            <pre>// "HM"</pre>
            <pre>// ""</pre>
            <pre>// "NASA"</pre>
            <pre>// ""</pre>
          </div>

          <p className="mt-4">Resolver: a) con for b) con funciones nativas (filter, match, etc.)</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">2. Duplicar letras</h3>
          <p className="mb-4">Escribí una función que reciba un string y duplique cada letra.</p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>duplicarLetras("Hola")</pre>
            <pre>duplicarLetras("123!?")</pre>
            <pre>duplicarLetras("")</pre>
            <pre>// "HHoollaa"</pre>
            <pre>// "112233!!??"</pre>
            <pre>// ""</pre>
          </div>

          <p className="mt-4">Bonus: que solo duplique letras, no números ni símbolos.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">3. Palabra más frecuente</h3>
          <p className="mb-4">Dada una frase, devolvé la palabra que más veces aparece.</p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>palabraMasFrecuente("hola hola mundo cruel mundo cruel cruel")</pre>
            <pre>// "cruel"</pre>
          </div>

          <p className="mt-4">Ignorar mayúsculas/minúsculas y signos. Empate: devolver cualquiera.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">4. Reemplazo circular de letras</h3>
          <p className="mb-4">Escribí una función que reemplace cada letra por la que sigue en el abecedario.</p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>siguienteLetra("abcdz") // "bcdea"</pre>
            <pre>siguienteLetra("Zebra!") // "Afcsb!"</pre>
          </div>

          <p className="mt-4">
            Las letras deben seguir siendo minúsculas o mayúsculas. No modificar símbolos ni números. Z → A
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">5. Validador de contraseñas</h3>
          <p className="mb-4">
            Escribí una función que valide si una contraseña cumple con los requisitos mínimos de seguridad.
          </p>

          <p className="mb-4">Requisitos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Al menos 8 caracteres</li>
            <li>Al menos una letra mayúscula</li>
            <li>Al menos un número</li>
            <li>Al menos un símbolo especial (!, @, #, $, %, etc.)</li>
          </ul>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>validarPassword("abc123") // false (muy corta)</pre>
            <pre>validarPassword("abcdefgh") // false (sin mayúscula, número ni símbolo)</pre>
            <pre>validarPassword("Abcdef1!") // true</pre>
          </div>

          <p className="mt-4">La función debe devolver true si cumple todos los requisitos, o false si no.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">6. Generador de acrónimos</h3>
          <p className="mb-4">
            Escribí una función que reciba una frase y devuelva un acrónimo formado por la primera letra de cada
            palabra.
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>generarAcronimo("Organización de las Naciones Unidas") // "ONU"</pre>
            <pre>generarAcronimo("Application Programming Interface") // "API"</pre>
            <pre>generarAcronimo("") // ""</pre>
          </div>

          <p className="mt-4">
            Todas las letras del acrónimo deben estar en mayúsculas. Ignorar palabras como "de", "la", "y", etc.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">7. Calculadora de estadísticas</h3>
          <p className="mb-4">
            Escribí una función que reciba un array de números y devuelva un objeto con estadísticas básicas.
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>calcularEstadisticas([1, 2, 3, 4, 5])</pre>
            <pre>// {"{"}</pre>
            <pre>// min: 1,</pre>
            <pre>// max: 5,</pre>
            <pre>// promedio: 3,</pre>
            <pre>// moda: null, // no hay moda</pre>
            <pre>// mediana: 3</pre>
            <pre>// {"}"}</pre>
          </div>

          <p className="mt-4">
            La moda es el valor que más se repite. Si no hay moda (todos aparecen la misma cantidad de veces), devolver
            null.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">8. Compresión de texto simple</h3>
          <p className="mb-4">
            Escribí una función que comprima un string reemplazando caracteres repetidos consecutivos con el carácter
            seguido de la cantidad de repeticiones.
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>comprimirTexto("aaabbc") // "a3b2c1"</pre>
            <pre>comprimirTexto("abcde") // "a1b1c1d1e1"</pre>
            <pre>comprimirTexto("") // ""</pre>
          </div>

          <p className="mt-4">Bonus: Escribí también la función inversa que descomprima el texto.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">9. Detector de palíndromos</h3>
          <p className="mb-4">
            Escribí una función que determine si una frase es un palíndromo (se lee igual de izquierda a derecha que de
            derecha a izquierda).
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>esPalindromo("anita lava la tina") // true</pre>
            <pre>esPalindromo("reconocer") // true</pre>
            <pre>esPalindromo("hola mundo") // false</pre>
          </div>

          <p className="mt-4">Ignorar espacios, signos de puntuación y diferencias entre mayúsculas y minúsculas.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">10. Generador de números romanos</h3>
          <p className="mb-4">
            Escribí una función que convierta un número entero (entre 1 y 3999) a su representación en números romanos.
          </p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>aRomano(4) // "IV"</pre>
            <pre>aRomano(9) // "IX"</pre>
            <pre>aRomano(58) // "LVIII"</pre>
            <pre>aRomano(1994) // "MCMXCIV"</pre>
          </div>

          <p className="mt-4">Recordá las reglas de los números romanos: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">11. Calculadora de fechas</h3>
          <p className="mb-4">Escribí una función que calcule la diferencia en días entre dos fechas.</p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>diferenciaDias("2023-01-01", "2023-01-10") // 9</pre>
            <pre>diferenciaDias("2023-05-15", "2023-04-15") // -30</pre>
          </div>

          <p className="mt-4">
            Usá el objeto Date de JavaScript. El resultado puede ser negativo si la primera fecha es posterior a la
            segunda.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">12. Ordenamiento personalizado</h3>
          <p className="mb-4">Escribí una función que ordene un array de objetos por una propiedad específica.</p>

          <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
            <pre>const personas = [</pre>
            <pre>
              {" "}
              {"{"} nombre: "Ana", edad: 25 {"}"},
            </pre>
            <pre>
              {" "}
              {"{"} nombre: "Carlos", edad: 30 {"}"},
            </pre>
            <pre>
              {" "}
              {"{"} nombre: "Beto", edad: 20 {"}"}
            </pre>
            <pre>];</pre>
            <pre></pre>
            <pre>ordenarPor(personas, "nombre") // ordena alfabéticamente por nombre</pre>
            <pre>ordenarPor(personas, "edad") // ordena numéricamente por edad</pre>
          </div>

          <p className="mt-4">
            La función debe aceptar un tercer parámetro opcional para indicar si el orden es ascendente o descendente.
          </p>
        </div>
      </div>
    </div>
  )
}
