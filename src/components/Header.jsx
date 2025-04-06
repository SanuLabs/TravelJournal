import GlobeIcon from '../assets/globe.svg'

export default function Header(){
    return(
        <div className="header">
            <img src={GlobeIcon} alt='globe-icon'></img>
            <span>my travel journal.</span>
        </div>
    )
}