// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
 export function removeDuplicates(playlist) {
    let uniquePlaylist = new Set(playlist);
    return Array.from(uniquePlaylist);
  }
  
  /**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
  export function hasTrack(playlist, track) {
    let uniquePlaylist = new Set(playlist);
    return uniquePlaylist.has(track);
  }
  
  /**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function addTrack(playlist, track) {
    if(hasTrack(playlist, track)){ return playlist; }
    playlist.push(track);
    return playlist;
  }
  
  /**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function deleteTrack(playlist, track) {
    if(!hasTrack(playlist, track)){ return playlist; }
    let uniquePlaylist = new Set(playlist);
    uniquePlaylist.delete(track);
    return Array.from(uniquePlaylist);
  }
  
  /**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
  export function listArtists(playlist) {
    const artists = new Set(playlist.map(track => track.split(' - ')[1]))
    return [...artists];
    
  }