import Marker from '../assets/location.svg'

export default function Entry(props){
    return(
        <article className='entry'>
         <img src={props.entry.img.src} alt='image'></img>
         <div className='entry-content'>
          <div className='location'>
              <img src={Marker} alt="location"></img>
              <h3>{props.entry.country}</h3>
              <a href={props.entry.googleMapsLink}>View on Google Maps</a>
          </div>
          <h1>{props.entry.title}</h1>
          <h4>{props.entry.dates}</h4>
          <p>{props.entry.text}</p>
         </div>
        </article>

    )
}