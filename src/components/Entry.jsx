import Marker from '../assets/location.svg'
import Fuji from '../assets/fuji.png'

export default function Entry(){
    return(
        <article className='entry'>
         <img src={Fuji} alt='fuji.png'></img>
         <div className='entry-content'>
          <div className='location'>
              <img src={Marker} alt="location"></img>
              <h3>JAPAN</h3>
              <a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>View on Google Maps</a>
          </div>
          <h1>Mount Fuji</h1>
          <h4>12 Jan, 2023 - 24 Jan, 2023</h4>
          <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
         </div>
        </article>

    )
}