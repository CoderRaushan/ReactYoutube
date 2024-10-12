import { useState, useEffect } from 'react';
function Joke() 
{
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any') 
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.type === 'twopart') 
        {
          setJoke(`${data.setup} ... ${data.delivery}`);
        } else 
        {
          setJoke(data.joke);
        }
        setLoading(false);
      })
      .catch(error => console.error("Error fetching the joke:", error));
  }, []);
  return (
    <div>
      {loading ? <p>Loading joke...</p> : <p>{joke}</p>}
    </div>
  );
}

export default Joke;
