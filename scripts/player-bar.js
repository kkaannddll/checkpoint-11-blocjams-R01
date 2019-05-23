{
  $('button#play-pause').on('click', function() {
    const totalTime = player.currentlyPlaying.duration;

    helper.playPauseAndUpdate();
     $(this).attr('playState', player.playState);
     $('#time-control .total-time').text( totalTime );
  });

   $('button#next').on('click', function() {

     if (player.playState !== 'playing') { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
     helper.playPauseAndUpdate(nextSong);
     $('#time-control .total-time').text( nextSong.duration );
   });

   $('button#previous').on('click', function() {

     if (player.playState !== 'playing') { return; }
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex - 1;
     if (nextSongIndex >= album.songs.length) { return; }
     const nextSong = album.songs[nextSongIndex];
     helper.playPauseAndUpdate(nextSong);
     $('#time-control .total-time').text( nextSong.duration );
   });

    $('#time-control input').on('input', function (event) {
     player.skipTo(event.target.value);
   });

    $('#volume-control input').on('input', function (event) {
     player.setVolume(event.target.value);
   });

     setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control .current-time').text( currentTime );
     $('#time-control input').val(percent);
   }, 1000);

}
