import {useState, useEffect} from "react"
import Gallery from "./Gallery"
import ButtonBar from "./ButtonBar"

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = "Welcome to ArtWorld"
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  console.log('Data form api ?', data)
    return (
      <div>
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title}/>
        <ButtonBar handleIterate={handleIterate}/>
      </div>
    )

} //App Close

export default App;