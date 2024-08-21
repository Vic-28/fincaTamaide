import Carrousel from '../carrousel/carrousel'
import Info from '../info/info'
import Maps from '../maps/maps'
//import Weather from '../weather/weather'
import Links from '../links/links'
import './dashboard.scss'


function Dashboard() {

    return (
     <main>
      <Carrousel/>
      <Info/>
      <Links/>
      <Maps/>
     </main>
    )
  }

  export default Dashboard