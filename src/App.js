import React, {useState, useEffect} from 'react';
import Spinner from './components/Spinner'
import Pageorder from './components/Pageorder';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  })
  return (
    <>
    {isLoading==true?
        <Spinner/>:
        <Pageorder/>
    }
    </>
  );
}

export default App;

