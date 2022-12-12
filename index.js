const button = document.querySelector(".button");
const image = document.querySelector(".image");
// const url = "http://aws.random.cat/meow";

const getImageCat = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=uNDGsKfOrlKXHCJZWKRJ9Mn8lAVs3hRo&tag=cat&rating=R'
  )
    .then(res => res.json())
    .then(data => {
      image.src = data.data.images.downsized.url
    })
}

getImageCat()
button.addEventListener('click', getImageCat)