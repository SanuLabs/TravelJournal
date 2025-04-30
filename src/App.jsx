import './App.css'
import Header from './components/Header';
import Entry from './components/Entry';
import MountFuji from './assets/fuji.png'

import data from './data.js'
const entryElements = data.map(entry => {
    return(
        <Entry 
        key={entry.id}
        {...entry}
        />
      
    )
})

console.log(entryElements)

function App() {

  return (
    <>
     <Header/>
     {entryElements}
     
    </>
  )
}

export default App;
