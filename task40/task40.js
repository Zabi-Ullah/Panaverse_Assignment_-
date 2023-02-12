function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    return {
        artist: artist,
        title: title,
        tracks: tracks
    };
}
var album1 = make_album("Adele", "25");
var album2 = make_album("Ed Sheeran", "Divide", 16);
var album3 = make_album("Billie Eilish", "When We All Fall Asleep, Where Do We Go?", 14);
console.log(album1);
console.log(album2);
console.log(album3);
