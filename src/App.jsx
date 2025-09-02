
import './App.css'
import Fotter from './core/Fotter'
import Header from './core/Header'
import Home from './shared/components/Home'

function App() {

  return (
    <>
    <div className="overflow-hidden">
      <Header />
      <Home />
      <Fotter />
      </div>
    </>
  )
}

export default App
