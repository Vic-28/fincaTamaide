import Carrousel from '../carrousel/carrousel'
import Info from '../info/info'
import Map from '../map/map'
import Weather from '../weather/weather'
import './dashboard.css'


function Dashboard() {

    return (
     <main>
      <Carrousel></Carrousel>
      <Info></Info>
      <Weather></Weather>
      <Map></Map>
     </main>
    )
  }

  export default Dashboard