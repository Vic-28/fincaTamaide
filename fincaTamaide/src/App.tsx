import './App.css'
import Header from './components/shared/header/header'
import Footer from './components/shared/footer/footer'
import Dashboard from './components/dashboard/dashboard'

function App() {

  return (
   <section className='app'>
    <Header />
    <Dashboard />
    <Footer />
   </section>
  )
}

export default App
