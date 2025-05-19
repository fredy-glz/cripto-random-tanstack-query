import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((resp) => resp.json())
      .then((data) => setNumber(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [refreshToken]);

  return (
    <>
      {isLoading ? <h1>Cargando...</h1> : <h1>Numero: {number}</h1>}{" "}
      <div>{error}</div>
      <button
        onClick={() => setRefreshToken(refreshToken + 1)}
        disabled={isLoading}
      >
        Nuevo número
      </button>
    </>
  );
}

export default App;
