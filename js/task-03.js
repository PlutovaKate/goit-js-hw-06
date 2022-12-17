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

const ulGalleryEl = document.querySelector(".gallery");
const makeGalleryCard = ({width, height, url, alt}) => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery-item');

  const listLinkEl = document.createElement('a');
  listLinkEl.href = '#';
  listItemEl.append(listLinkEl);

  const listImgEl = document.createElement('img');
 
  listImgEl.src = "${url}"
  listImgEl.alt = "${alt}"
  listImgEl.width = "100"
  listImgEl.height = "100"

  listLinkEl.append(listImgEl);

  return listItemEl
}
  
ulGalleryEl.getElementsByClassName.display = "flex";
ulGalleryEl.getElementsByClassName.margin = "30px";

// ulGalleryEl.insertAdjacentHTML("afterbegin", galleryCard);




// const galleryListEL = document.querySelector(".gallery");

// const imagesMarkUp = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="list-item new"><img src= ${url} alt = ${alt} width ="200" /></li>`
//   )
//   .join("");

// galleryListEL.style.display = "flex";
// galleryListEL.style.gap = "30px";

// galleryListEL.insertAdjacentHTML("afterbegin", imagesMarkUp);
