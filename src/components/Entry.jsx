import Marker from '../assets/location.svg'

export default function Entry(props){
    return(
        <article className='entry'>
         <img src={props.img} alt='image'></img>
         <div className='entry-content'>
          <div className='location'>
              <img src={Marker} alt="location"></img>
              <h3>{props.country}</h3>
              <a href={props.location}>View on Google Maps</a>
          </div>
          <h1>{props.name}</h1>
          <h4>{props.date}</h4>
          <p>{props.article}</p>
         </div>
        </article>

    )
}