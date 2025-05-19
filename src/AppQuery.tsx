import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { RandomNumber } from "./componets/RandomNumber";

const getCryptoNumber = async (): Promise<number> => {
  // throw "No se pudo obtener el error";
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
}; 

function App() {
  const {
    isLoading,
    isFetching,
    data: number,
    error,
    refetch,
  } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
    refetchOnWindowFocus: false, // false: no se refresca, true: se refresca
    retry: false,
    // retry: 5, // Numero de intentos
    // retryDelay: 1000, // 1s
  });

  return (
    <>
      {isFetching ? <h1>Cargando...</h1> : <h1>Numero: {number}</h1>}
      {/* <RandomNumber /> */}
      <div>{JSON.stringify(error)}</div>
      <button onClick={() => refetch()} disabled={isFetching}>
        Nuevo número
      </button>
    </>
  );
}

export default App;
