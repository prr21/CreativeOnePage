const burgerMenu = document.querySelector('.burger-menu');
const list = document.querySelector('.menu-list');
const aside = document.querySelector('.aside');
const header = document.querySelector('.header');
const galleryMenu = document.querySelector('.gallery-menu');
const showMore = document.querySelector('#show-more');

//fade animations
AOS.init({once: true});

//default params
let menuIsOpened = false;
let maxLengthPhotos = 6;
let itemIsLoading = true;
let albumId = 'album-1';

const cacheGallery = {};

// event listeners
document.addEventListener("DOMContentLoaded", () => { showAlbum(albumId) })

burgerMenu.addEventListener('click', collapseMenu);
galleryMenu.addEventListener('click', toggleGallery);
showMore.addEventListener('click', showMorePhotos)


// Menu slide animation 
function collapseMenu() {
  burgerMenu.classList.toggle("change");
  list.classList.toggle("slide-down");
  aside.classList.toggle("slide-right");

  menuIsOpened = menuIsOpened ? false : true
  header.style.backgroundColor = menuIsOpened ? 'white' : 'transparent';
}

// adding class active on li
function toggleGallery(e) {
  if (e.target.className != "gallery-menu__list") return;

  albumId = e.target.id;

  let selectedGallery = document.querySelector('.' + albumId);
  let activeLayers = document.querySelectorAll('.active');

  activeLayers[0].classList.remove('active');
  activeLayers[1].classList.remove('active');

  e.target.classList.add('active');
  selectedGallery.classList.add('active');

  showAlbum(albumId)
}

function showMorePhotos() {
  if (itemIsLoading) return
  maxLengthPhotos = +3;
  showAlbum(albumId, maxLengthPhotos)
}