let spinner = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

const showAlbum = (albumId, countPhotos = 6) => {
	const gallery = document.querySelector('.' + albumId);
		albumId = albumId.replace(RegExp(/\D/g), '');			//extract num from string

	const countOfPhotosInGallery = gallery.childElementCount || 0
	const maxPhotosInAlbum = 50;
	const startPhotoIdInAlbum = maxPhotosInAlbum * (albumId - 1);

	let photoId = startPhotoIdInAlbum + countOfPhotosInGallery;

	if ( countOfPhotosInGallery && countPhotos == 6 ) return

	displayPhotos(countPhotos);

	// Display photo in gallery
	async function displayPhotos(haveToAdd) {
		for (let i = 0; i < haveToAdd; i++) {
			++photoId;
			
			if (photoId % maxPhotosInAlbum == 0) return;

			let item = document.createElement('div');
			item.className = 'gallery__item';
			item.innerHTML = spinner;

			gallery.appendChild(item);

			const newItem = await getPhoto(albumId, photoId);

			if (!newItem[0]) return;

			const { thumbnailUrl, title, id } = newItem[0];

			item.innerHTML = `
				<div class="gallery__item">
					<div class="gallery-wallpaper">
						<img style="width:350px" src="${thumbnailUrl}" alt="${title} img">
					</div>						
					<div class="gallery__item-info">
						<h4 class="gallery__item-title head-text title-column"><span>№${id} Free mockups collection </span><span>laptop and phone</span></h4>
						<p class="reg-text">Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis; <br>${title};</p>
						<span class="btn-text">Read more</span>
					</div>
				</div>`;
		}
	}

	// Reqest photo with fetch
	async function getPhoto(albumId, photoId) {
		// if (cacheGallery[id]) return cacheGallery[id];
		let url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&id=${photoId}`;
		let response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Cannot find url ${response.url}! Code ${response.status}`)
		}

		let json = await response.json();
		return json
	}
}



						
/*						<div class="gallery__item">
							<div class="gallery-wallpaper">
								<img src="img/replace_image5.jpg" alt="img">
							</div>						
							<div class="gallery__item-info">
								<h4 class="gallery__item-title head-text title-column"><span>+300 Free mockups collection </span><span>laptop and phone</span></h4>
								<p class="reg-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
								<span class="btn-text">Read more</span>
							</div>
						</div>	*/

/*<div class="gallery__item">
	<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>*/