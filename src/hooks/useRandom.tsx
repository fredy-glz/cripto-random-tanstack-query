import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
  // throw "No se pudo obtener el error";
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
    refetchOnWindowFocus: false, // false: no se refresca, true: se refresca
    retry: false,
    // retry: 5, // Numero de intentos
    // retryDelay: 1000, // 1s
  });
  return { randomQuery };
};
