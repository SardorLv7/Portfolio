// Define global variables
const apiUrl = 'https://api.example.com/music';
let artists = [];
let albums = [];
let playlists = [];

// Fetch data from API
fetch(apiUrl + '/artists')
  .then(response => response.json())
  .then(data => {
    artists = data;
    renderArtists();
  });

fetch(apiUrl + '/albums')
  .then(response => response.json())
  .then(data => {
    albums = data;
    renderAlbums();
  });

fetch(apiUrl + '/playlists')
  .then(response => response.json())
  .then(data => {
    playlists = data;
    renderPlaylists();
  });

// Render functions
function renderArtists() {
  const artistSection = document.querySelector('#featured-artists');
  artistSection.innerHTML = '';
  artists.forEach(artist => {
    const artistCard = createArtistCard(artist);
    artistSection.appendChild(artistCard);
  });
}

function createArtistCard(artist) {
  const card = document.createElement('div');
  card.classList.add('artist-card');
  const image = document.createElement('img');
  image.src = artist.image;
  const name = document.createElement('h3');
  name.textContent = artist.name;
  const genre = document.createElement('p');
  genre.textContent = artist.genre;
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(genre);
  return card;
}

function renderAlbums() {
  const albumSection = document.querySelector('#featured-albums');
  albumSection.innerHTML = '';
  albums.forEach(album => {
    const albumCard = createAlbumCard(album);
    albumSection.appendChild(albumCard);
  });
}

function createAlbumCard(album) {
  const card = document.createElement('div');
  card.classList.add('album-card');
  const image = document.createElement('img');
  image.src = album.image;
  const title = document.createElement('h3');
  title.textContent = album.title;
  const artist = document.createElement('p');
  artist.textContent = album.artist;
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(artist);
  return card;
}

function renderPlaylists() {
  const playlistSection = document.querySelector('#featured-playlists');
  playlistSection.innerHTML = '';
  playlists.forEach(playlist => {
    const playlistCard = createPlaylistCard(playlist);
    playlistSection.appendChild(playlistCard);
  });
}

function createPlaylistCard(playlist) {
  const card = document.createElement('div');
  card.classList.add('playlist-card');
  const image = document.createElement('img');
  image.src = playlist.image;
  const title = document.createElement('h3');
  title.textContent = playlist.title;
  const description = document.createElement('p');
  description.textContent = playlist.description;
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  return card;
}
