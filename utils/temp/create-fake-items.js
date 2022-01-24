const LoremIpsum = require("./lorem-ipsum-generator");

const fs = require("fs");

lipsum = new LoremIpsum();

const items = [];

const possibleImages = [
  "product-1.png",
  "product-2.png",
  "product-3.png",
  "product-4.png",
  "product-5.png",
];

Array(6).fill().map((_, cIndex) => {
  const itemsCount = Math.floor(Math.random() * 50) + 30;
  items.push(
    ...Array(itemsCount).fill().map((_, iIndex) => {
      const imageIndex = Math.floor(Math.random() * 5);
      const wordsCount = Math.floor(Math.random() * 80) + 20;
      const price = Math.floor(Math.random() * 2000) + 100;
      const favoriteCount = Math.floor(Math.random() * 0) + 99;

      return {
        id: items.length + iIndex + 1,
        name: lipsum.generate(1),
        description: lipsum.generate(wordsCount),
        price: price,
        image: `/assets/images/${possibleImages[imageIndex]}`,
        collectionId: cIndex + 1,
        favorites: favoriteCount,
      };
    })
  );

});


fs.writeFile(`./utils/items.json`, JSON.stringify(items, null, 4), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("DONE!");
  }
});