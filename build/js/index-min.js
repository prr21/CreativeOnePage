const burgerMenu=document.querySelector(".burger-menu"),list=document.querySelector(".menu-list"),aside=document.querySelector(".aside"),header=document.querySelector(".header"),galleryMenu=document.querySelector(".gallery-menu"),showMore=document.querySelector("#show-more");let menuIsOpened=!1,maxLengthPhotos=6,albumId="album-1";const cacheGallery={};function collapseMenu(){burgerMenu.classList.toggle("change"),list.classList.toggle("slide-down"),aside.classList.toggle("slide-right"),menuIsOpened=!menuIsOpened,header.style.backgroundColor=menuIsOpened?"white":"transparent"}function toggleGallery(e){if("gallery-menu__list"!=e.target.className)return;albumId=e.target.id;let t=document.querySelector("."+albumId),l=document.querySelectorAll(".active");l[0].classList.remove("active"),l[1].classList.remove("active"),e.target.classList.add("active"),t.classList.add("active"),showAlbum(albumId)}function showMorePhotos(){showAlbum(albumId,maxLengthPhotos=50)}document.addEventListener("DOMContentLoaded",()=>{showAlbum(albumId)}),burgerMenu.addEventListener("click",collapseMenu),galleryMenu.addEventListener("click",toggleGallery),showMore.addEventListener("click",showMorePhotos);