import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {

  const [parts, setParts] = useState(null);
  function handleClick() {
    fetch("http://localhost:3000/get-data/")
      .then(function(res,error) {
        if(res) { return res.json(); }
        else { console.log("error",err) }
      })
      .then((data) => { setParts(data.part); })
      .catch((error) => console.log(error))
  }

  // REST API
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  function RestData() {
    return (
      <div>
        PARTS:
        {parts}
      </div>
    );
  }
          
  return (
    <div>

      {/* REST API */}
      <RestData />

      <button onClick={handleClick}>Count ({parts})</button>

    </div>
  );
}