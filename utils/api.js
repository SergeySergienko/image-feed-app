export const getImageFromId = id => {
  return `https://unsplash.it/600/600?image=${id}`;
};

export const fetchImages = async () => {
  try {
    const data = await fetch("https://picsum.photos/list");
    const json = await data.json();
    const items = json.map(item => {
      return {
        id: item.id,
        author: item.author
      };
    });
    // console.log(items);
    return items;
  } catch (e) {
    console.log(e);
  }
};
