import './App.css'
import Header from './components/Header';
import Entry from './components/Entry';
import MountFuji from './assets/fuji.png'

import data from './data.js'
const entryElements = data.map(entry => {
    return(
        <Entry 
        key={entry.id}
        img={entry.img.src}
        country={entry.country}
        name={entry.title}
        location={entry.googleMapsLink}
        date={entry.dates}
        article={entry.text}
        />
    )
})

function App() {

  return (
    <>
     <Header/>
     {entryElements}
    </>
  )
}

export default App;
