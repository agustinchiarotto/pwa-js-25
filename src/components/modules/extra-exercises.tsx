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

          <p className="mt-4">Resolver: a) con for b) con funciones nativas (filter, match, etc.)</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">2. Duplicar letras</h3>
          <p className="mb-4">Escribí una función que reciba un string y duplique cada letra.</p>

          <p className="mt-4">Bonus: que solo duplique letras, no números ni símbolos.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">3. Palabra más frecuente</h3>
          <p className="mb-4">Dada una frase, devolvé la palabra que más veces aparece.</p>

          <p className="mt-4">Ignorar mayúsculas/minúsculas y signos. Empate: devolver cualquiera.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">4. Reemplazo circular de letras</h3>
          <p className="mb-4">Escribí una función que reemplace cada letra por la que sigue en el abecedario.</p>

          <p className="mt-4">
            Las letras deben seguir siendo minúsculas o mayúsculas. No modificar símbolos ni números. Z → A
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">5. Simulador de sueldo con bonus y retenciones</h3>
          <p className="mb-4">
            Pedile al usuario:
          </p>
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
            <li>Mostrá el sueldo neto con un mensaje como: Tu sueldo final es $38.250</li>
          </ul>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            const sueldoBase = 40000;
            const tieneBonus = true;
            const tieneHijos = true;

            // Resultado esperado:
            // Tu sueldo final es $38.250
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">6. Clasificador de clientes premium</h3>
          <p className="mb-4">
            Pedile al usuario:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cantidad de compras que hizo este mes</li>
            <li>Monto total gastado</li>
          </ul>

          <p className="mt-4 mb-4">Condiciones:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Es cliente "Premium" si hizo más de 10 compras y gastó más de $50.000</li>
            <li>Es cliente "Regular" si hizo entre 5 y 10 compras o gastó entre $20.000 y $50.000</li>
            <li>Es cliente "Nuevo" en cualquier otro caso</li>
          </ul>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            const compras = 12;
            const gasto = 65000;

            // Resultado esperado:
            // "Premium"

            const compras2 = 7;
            const gasto2 = 35000;

            // Resultado esperado:
            // "Regular"

            const compras3 = 3;
            const gasto3 = 15000;

            // Resultado esperado:
            // "Nuevo"
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
          <h3 className="text-xl font-bold mb-4">10. Reemplazar con longitud</h3>

          <p className="mb-4">
            Dado un string, reemplazá cada palabra por la cantidad de letras que tiene. Usá .split(), .map(), .join().
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            reemplazarPorLongitud("Hola mundo cruel")   // "4 5 5"
            reemplazarPorLongitud("Esto es JS")         // "4 2 2"
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">11. Reordenar letras por tipo</h3>

          <p className="mb-4">
            Escribí una función que reciba un string y devuelva otro donde las letras se agrupen en este orden:
            primero las vocales, luego las consonantes, luego los números, luego todo lo demás (signos, espacios, etc)
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            ordenarPorTipo("Hola123!?")  // "oaiHl123!?"
            ordenarPorTipo("JS 2025!")   // "oJS25 2!"
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">12. Comprimir letras repetidas</h3>

          <p className="mb-4">
            Escribí una función que transforme secuencias repetidas de letras en la letra seguida de la cantidad.
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            comprimir("aaabbcaaa")   // "a3b2c1a3"
            comprimir("abcd")        // "a1b1c1d1"
          </p>

          <p className="mt-4">
            Bonus: que ignore mayúsculas/minúsculas (tratarlas igual)<br />
            Extra: devolvé el resultado en minúscula siempre
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">13. Validar formato de fecha</h3>

          <p className="mb-4">
            Escribí una función que reciba un string y devuelva true si tiene el formato "DD/MM/AAAA" y es una fecha válida.
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            esFechaValida("12/05/2020")    // true
            esFechaValida("31/02/2020")    // false
            esFechaValida("01-01-2000")    // false
            esFechaValida("99/99/9999")    // false
          </p>

          <p className="mt-4">Pista: podés usar split y crear un objeto Date</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">14. Detección de palabras espejadas</h3>

          <p className="mb-4">
            Escribí una función que reciba dos palabras y devuelva true si una es el reverso exacto de la otra. Ignorar mayúsculas/minusculas
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            esEspejo("amor", "roma")     // false
            esEspejo("amor", "roma")     // false
            esEspejo("abc", "cba")       // true
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">15. Encontrar el carácter más frecuente</h3>

          <p className="mb-4">
            Escribí una función que reciba un string y devuelva el carácter (letra o número) que más veces aparece. Si hay empate, devolver cualquiera.
          </p>

          <p className="mt-4 mb-4">
            // Ejemplo de uso:
            masFrecuente("aabbbccdd")     // "b"
            masFrecuente("111223")        // "1"
            masFrecuente("abcd")          // "a" (u otra, cualquiera)
          </p>

          <p className="mt-4">Igná espacios y mayúsculas</p>
        </div>
      </div>
    </div>
  )
}
