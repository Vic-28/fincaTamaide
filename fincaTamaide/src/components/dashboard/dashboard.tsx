import Carrousel from '../carrousel/carrousel'
import Info from '../info/info'
//import Map from '../map/map'
//import Weather from '../weather/weather'
import Links from '../links/links'
import './dashboard.scss'


function Dashboard() {

    return (
     <main>
      <Carrousel></Carrousel>
      <Info></Info>
      <Links></Links>
     </main>
    )
  }

  export default Dashboard