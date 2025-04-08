import { ThemeProvider } from "./components/theme-provider"
import { MainContent } from "./components/MainContent"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainContent />
    </ThemeProvider>
  )
}

export default App
