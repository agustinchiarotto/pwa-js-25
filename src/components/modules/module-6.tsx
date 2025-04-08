import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { CodeBlock } from "../ui/code-block";

export default function Module6() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Módulo 6: Funciones Avanzadas y Callbacks</h2>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="theory6">
          <AccordionTrigger className="text-xl font-semibold">Preguntas Teóricas</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-6 space-y-4">
              <li>¿Qué es una función de orden superior (higher-order function)?</li>
              <li>¿Qué es un callback y para qué se usa?</li>
              <li>¿Cuál es la diferencia entre una función normal y una arrow function?</li>
              <li>¿Qué es el contexto de ejecución (this) en JavaScript?</li>
              <li>¿Cómo se maneja el contexto de ejecución en arrow functions?</li>
              <li>¿Qué es el closure en JavaScript?</li>
              <li>¿Cuáles son las ventajas de usar callbacks?</li>
              <li>¿Qué es el callback hell y cómo se puede evitar?</li>
              <li>¿Qué es la composición de funciones?</li>
              <li>¿Qué es la currying y para qué se usa?</li>
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
                <h3 className="font-bold text-lg mb-2">1. Filtrado de Pokémon</h3>

                <p className="mb-2">
                  Crea una función <code className="bg-muted-foreground/20 px-1 rounded">filtrarPokemon(pokemones, criterio)</code> que:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">Reciba un array de Pokémon y una función criterio.</p>
                  </li>
                  <li>
                    <p className="mb-2">Devuelva un nuevo array con los Pokémon que cumplan el criterio.</p>
                  </li>
                </ol>

                <CodeBlock code={`filtrarPokemon(pokemones, p => p.nivel &gt; 18);
filtrarPokemon(pokemones, p => p.tipo === "agua");`} />

                <p className="mt-4">Ejemplo de uso:</p>

                <CodeBlock code={`const pokemones = [
  { nombre: "Pikachu", nivel: 20, tipo: "eléctrico" },
  { nombre: "Squirtle", nivel: 15, tipo: "agua" },
  { nombre: "Charmander", nivel: 18, tipo: "fuego" }
];

const pokemonesFuertes = filtrarPokemon(pokemones, p => p.nivel &gt; 18);
const pokemonesAgua = filtrarPokemon(pokemones, p => p.tipo === "agua");`} />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">2. Reclutamiento de personajes</h3>

                <p className="mb-2">
                  Crea una función <code className="bg-muted-foreground/20 px-1 rounded">reclutar(personajes, criterio)</code> que:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">Reciba un array de personajes y una función criterio.</p>
                  </li>
                  <li>
                    <p className="mb-2">Devuelva un nuevo array con los personajes que cumplan el criterio.</p>
                  </li>
                </ol>

                <CodeBlock code={`reclutar(personajes, p => p.raza === "Hobbit" && p.valiente);`} />

                <p className="mt-4">Ejemplo de uso:</p>

                <CodeBlock code={`const personajes = [
  { nombre: "Frodo", raza: "Hobbit", valiente: true },
  { nombre: "Sam", raza: "Hobbit", valiente: true },
  { nombre: "Gandalf", raza: "Mago", valiente: true },
  { nombre: "Gollum", raza: "Hobbit", valiente: false }
];

const hobbitsValientes = reclutar(personajes, p => p.raza === "Hobbit" && p.valiente);`} />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">3. Laboratorio de Inventos</h3>

                <p className="mb-2">
                  Crea una clase <code className="bg-muted-foreground/20 px-1 rounded">Laboratorio</code> con un método{" "}
                  <code className="bg-muted-foreground/20 px-1 rounded">agregarInvento(nombre, efecto)</code> que:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">Reciba el nombre del invento y una función efecto.</p>
                  </li>
                  <li>
                    <p className="mb-2">Almacene el invento y su efecto en el laboratorio.</p>
                  </li>
                  <li>
                    <p className="mb-2">Permita aplicar el efecto a un sujeto de prueba.</p>
                  </li>
                </ol>

                <CodeBlock code={`lab.agregarInvento("Ray Gun", sujeto => sujeto.vida -= 30);
lab.agregarInvento("Suero de Inteligencia", sujeto => sujeto.inteligencia += 50);`} />

                <p className="mt-4">Ejemplo de uso:</p>

                <CodeBlock code={`class Laboratorio {
  constructor() {
    this.inventos = [];
  }

  agregarInvento(nombre, efecto) {
    this.inventos.push({ nombre, efecto });
  }

  aplicarInvento(nombre, sujeto) {
    const invento = this.inventos.find(i => i.nombre === nombre);
    if (invento) {
      invento.efecto(sujeto);
    }
  }
}

const lab = new Laboratorio();
const sujeto = { vida: 100, inteligencia: 50 };

lab.agregarInvento("Ray Gun", sujeto => sujeto.vida -= 30);
lab.agregarInvento("Suero de Inteligencia", sujeto => sujeto.inteligencia += 50);

lab.aplicarInvento("Ray Gun", sujeto);
lab.aplicarInvento("Suero de Inteligencia", sujeto);

console.log(sujeto); // { vida: 70, inteligencia: 100 }`} />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">4. Creación de Equipos</h3>

                <p className="mb-2">
                  Crea una función <code className="bg-muted-foreground/20 px-1 rounded">crearEquipo(nombre)</code> que:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-2">Reciba el nombre del equipo.</p>
                  </li>
                  <li>
                    <p className="mb-2">Devuelva un objeto con métodos para agregar y listar miembros.</p>
                  </li>
                  <li>
                    <p className="mb-2">Cada miembro debe tener nombre, fuerza y una habilidad especial.</p>
                  </li>
                </ol>

                <CodeBlock code={`{nombre: "Luke", fuerza: 80, habilidadEspecial: () => console.log("Usa la Fuerza!") }`} />

                <p className="mt-4">Ejemplo de uso:</p>

                <CodeBlock code={`function crearEquipo(nombre) {
  const miembros = [];
  
  return {
    nombre,
    agregar(miembro) {
      miembros.push(miembro);
    },
    listar() {
      return miembros;
    },
    usarHabilidadEspecial(nombreMiembro) {
      const miembro = miembros.find(m => m.nombre === nombreMiembro);
      if (miembro) {
        miembro.habilidadEspecial();
      }
    }
  };
}

const rebels = crearEquipo("Rebeldes");
rebels.agregar({ nombre: "Leia", fuerza: 70, habilidadEspecial: () => 
  console.log("¡Estrategia diplomática!") });

const sith = crearEquipo("Sith");
sith.agregar({ nombre: "Darth Vader", fuerza: 100, habilidadEspecial: () => 
  console.log("Fuerza sofocante!") });

rebels.usarHabilidadEspecial("Leia"); // "¡Estrategia diplomática!"
sith.usarHabilidadEspecial("Darth Vader"); // "Fuerza sofocante!"`} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
