
import './App.css'
import Fotter from './core/Fotter'
import Header from './core/Header'
import Approuter from './router/Approuter'
import About from './shared/components/About'
import Home from './shared/components/Home'

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <Approuter/>
      </div>
    </>
  )
}

export default App
