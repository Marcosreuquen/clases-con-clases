class Album {
  title: string;
  songs: string[];
  constructor(title: string, songs: string[]) {
    this.title = title;
    this.songs = songs;
  }
}

class Banda {
  members: string[];
  albums: Album[];
  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
}

function main() {
  const unAlbum = new Album("titulo", [
    "cancion1",
    "cancion2",
    "cancion3",
    "cancion4",
  ]);
  const unaBanda = new Banda(
    ["miembro 1", "miembro 2"],
    [unAlbum, unAlbum, unAlbum]
  );
  console.log(unaBanda);
}

main();
