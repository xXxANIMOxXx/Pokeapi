import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { GenerationPage } from './pages/GenerationPage'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      <main className="container">
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<Home />} />

          {/* Generación 1 */}
          <Route
            path="/gen1"
            element={
              <GenerationPage
                title="Primera Generación (Gen 1)"
                minId={1}
                maxId={151}
              />
            }
          />

          {/* Generación 2 */}
          <Route
            path="/gen2"
            element={
              <GenerationPage
                title="Segunda Generación (Gen 2)"
                minId={152}
                maxId={251}
              />
            }
          />

          {/* Generación 3 */}
          <Route
            path="/gen3"
            element={
              <GenerationPage
                title="Tercera Generación (Gen 3)"
                minId={252}
                maxId={386}
              />
            }
          />

          {/* Cualquier ruta no existente => Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
