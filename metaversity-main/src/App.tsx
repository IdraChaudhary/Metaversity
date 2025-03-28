import Header from './components/Header'
import Event from './components/Event'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Event />
    <Team />
    <div className=" bg-gray-100 flex flex-col">
    <Footer />
    </div>
    </>
  )
}

export default App
