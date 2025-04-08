import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ModuleIntroduction from "@/components/modules/introduction"
import Module1 from "@/components/modules/module-1"
import Module2 from "@/components/modules/module-2"
import Module3 from "@/components/modules/module-3"
import Module4 from "@/components/modules/module-4"
import Module5 from "@/components/modules/module-5"
import Module6 from "@/components/modules/module-6"
import Module7 from "@/components/modules/module-7"
import ExtraExercises from "@/components/modules/extra-exercises"

export default function JavaScriptPractice() {
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
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
          <TabsTrigger value="module1">Módulo 1</TabsTrigger>
          <TabsTrigger value="module2">Módulo 2</TabsTrigger>
          <TabsTrigger value="module3">Módulo 3</TabsTrigger>
          <TabsTrigger value="module4">Módulo 4</TabsTrigger>
          <TabsTrigger value="module5">Módulo 5</TabsTrigger>
          <TabsTrigger value="module6">Módulo 6</TabsTrigger>
          <TabsTrigger value="module7">Módulo 7</TabsTrigger>
          <TabsTrigger value="extra">Ejercicios Extra</TabsTrigger>
        </TabsList>

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
