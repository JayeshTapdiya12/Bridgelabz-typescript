// https://dummyjson.com/quotes

type apiType = {
  id: number;
  quote: string;
  author: string;
};

async function apiCalling(): Promise<apiType> {
  const res = await fetch("https://dummyjson.com/quotes/1");
  const data = await res.json();
  // console.log(data);
  return data;
}
// console.log(apiCalling());
apiCalling().then((data: apiType) => {
  console.log(data);
});
