$(document).ready(function(){
  $('#sidebar').fadeIn(1500);
});
$('.icon_container').click( function(){
  $('.icon-1').toggleClass('close_1');
  $('.icon-2').toggleClass('close_2');
  $('#sidebar_container').toggleClass('active');
});
$(function() {
    var BV = new $.BigVideo();
    BV.init();
    $('a').click(function(e){
      e.preventDefault();
      var file_name = $(this).attr('href');
      BV.show({type: "video/mp4", src: "videos/"+file_name});
    });
    BV.show({type: "video/mp4", src: "videos/Forgot.mp4"});
    BV.getPlayer().on('durationchange',function(){
    $('#big-video-wrap').fadeIn();
});
});
