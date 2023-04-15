export const getGifs = async (category) => {
  // console.log(import.meta.env.VITE_GIPHY_KEY);
  const giphyKey = "Aqui debes ingresar tu key de la api Giphy";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
