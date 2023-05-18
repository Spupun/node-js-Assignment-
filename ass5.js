import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {

  const [parts, setParts] = useState(null);
  function handleClick() {
    fetch("http://localhost:3000/get_data/")
      .then(function(res,error){
        if(res)
        {
          return res.json();
        }
        else
        {
          console.log("error",err)
        }
      })
      .then((data) => { setParts(data.part); })
      .catch((error) => console.log(error))
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  function RestData() {
            return (
              <div>
                <Header title="USERS" />
                {parts}
              </div>
  );
}
          

  return (
    <div>

      <Header title="PARTS" />

      <ul>{names.map((name) =>
        (<li key={name}>{name}</li>)
      )}</ul>
<RestData />

<button onClick={handleClick}>Count ({count})</button>

<h1 className="title">Read <Link href="first-post">this page!</Link></h1>
</div>
);
}


