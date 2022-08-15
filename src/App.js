import React, {useState, useEffect} from 'react'
import Card from './Card'
import ImageSearch from './ImageSearch'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    retrieve();
  },[term])

  const retrieve = () => {
    fetch(`https://pixabay.com/api/?key=29184595-5b361b2559424236b15bd4a3f&q=${term}&image_type=photo`).then((res)=>{
      return res.json();
    }).then((response) => {
      console.log(response);
      setImages(response.hits);
    }).catch((err) => {
      console.log(err);
    })
    setIsLoading(false);
  }
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>
      {isLoading ? <span className="text-6xl text-center mx-auto mt-32">Loading images...</span> : 
      <div className="grid grid-cols-1 mx-auto gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.length ? images.map((image) => {
        return <Card image={image} />
      }) : <span>No images found...</span>}
      </div>}
    </div>
  );
}

export default App;
