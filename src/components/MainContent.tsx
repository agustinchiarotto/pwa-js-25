import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import ModuleIntroduction from "./modules/introduction"
import Module1 from "./modules/module-1"
import Module2 from "./modules/module-2"
import Module3 from "./modules/module-3"
import Module4 from "./modules/module-4"
import Module5 from "./modules/module-5"
import Module6 from "./modules/module-6"
import Module7 from "./modules/module-7"
import ExtraExercises from "./modules/extra-exercises"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function MainContent() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Trabajo Práctico JavaScript</h1>
        <p className="text-lg text-muted-foreground">
          Una guía de estudio para repasar y profundizar los conceptos fundamentales de JavaScript
        </p>
      </header>

      <ModuleIntroduction />

      <Tabs defaultValue="module1" className="w-full">
        <div className="relative">
          <div className="overflow-x-auto pb-2 mb-6 scrollbar-hide">
            <TabsList className="flex flex-nowrap min-w-max p-1 bg-muted rounded-md">
              <TabsTrigger value="module1" className="px-4 py-2 text-sm">Módulo 1</TabsTrigger>
              <TabsTrigger value="module2" className="px-4 py-2 text-sm">Módulo 2</TabsTrigger>
              <TabsTrigger value="module3" className="px-4 py-2 text-sm">Módulo 3</TabsTrigger>
              <TabsTrigger value="module4" className="px-4 py-2 text-sm">Módulo 4</TabsTrigger>
              <TabsTrigger value="module5" className="px-4 py-2 text-sm">Módulo 5</TabsTrigger>
              <TabsTrigger value="module6" className="px-4 py-2 text-sm">Módulo 6</TabsTrigger>
              <TabsTrigger value="module7" className="px-4 py-2 text-sm">Módulo 7</TabsTrigger>
              <TabsTrigger value="extra" className="px-4 py-2 text-sm">Ejercicios Extra</TabsTrigger>
            </TabsList>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none flex items-center justify-center md:hidden">
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none flex items-center justify-center md:hidden">
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <TabsContent value="module1" className="space-y-8">
          <Module1 />
        </TabsContent>

        <TabsContent value="module2" className="space-y-8">
          <Module2 />
        </TabsContent>

        <TabsContent value="module3" className="space-y-8">
          <Module3 />
        </TabsContent>

        <TabsContent value="module4" className="space-y-8">
          <Module4 />
        </TabsContent>

        <TabsContent value="module5" className="space-y-8">
          <Module5 />
        </TabsContent>

        <TabsContent value="module6" className="space-y-8">
          <Module6 />
        </TabsContent>

        <TabsContent value="module7" className="space-y-8">
          <Module7 />
        </TabsContent>

        <TabsContent value="extra" className="space-y-8">
          <ExtraExercises />
        </TabsContent>
      </Tabs>
    </div>
  )
} 