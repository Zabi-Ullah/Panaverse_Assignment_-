function make_album(artist, title, tracks = 0) {
    return {
      artist: artist,
      title: title,
      tracks: tracks
    };
  }
  
  let album1 = make_album("Adele", "25");
  let album2 = make_album("Ed Sheeran", "Divide", 16);
  let album3 = make_album("Billie Eilish", "When We All Fall Asleep, Where Do We Go?", 14);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);