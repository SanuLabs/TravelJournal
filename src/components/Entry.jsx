import Marker from '../assets/location.svg'

export default function Entry(props){
    return(
        <article className='entry'>
         <img src={props.img.src} alt='image'></img>
         <div className='entry-content'>
          <div className='location'>
              <img src={Marker} alt="location"></img>
              <h3>{props.country}</h3>
              <a href={props.googleMapsLink}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <h4>{props.dates}</h4>
          <p>{props.text}</p>
         </div>
        </article>

    )
}