const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const photos = document.querySelector('.gallery');
photos.style.display = 'flex';
photos.style.listStyle = 'none';
const photosGallery = images
  .map(
    ({ url, alt }) => `<li><img src="${url}" alt="${alt}" style="width: 480px; height: 240px"></li>`
  )
  .join('');

photos.insertAdjacentHTML('beforeend', photosGallery);
