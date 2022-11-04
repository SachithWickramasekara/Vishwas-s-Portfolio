import React ,{useState, useEffect} from 'react'
import ImageGallery from './ImageGallery'
import ImageSpinner from './ImageSpinner'
const ImageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    })
    return (
    <>
    {isLoading==true?
        <ImageSpinner/>:
        <ImageGallery/>
    }
    
    </>
  )
}

export default ImageLoader