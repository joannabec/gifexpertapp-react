const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TFntoeqNb7U5KRQ3in8M0ZX238w4pzw1&q=${encodeURI(category)}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => (
    {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  ));

  return gifs;
};

export default getGifs;
